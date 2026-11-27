// Deal detail view for FridayFinds.
// Opens an overlay with the full price breakdown, the verdict evidence,
// the source the price was read from, and — when the same product is
// listed at more than one store — a side-by-side price comparison.
// Every store row links straight to that store's product page, and the
// main action button goes to the cheapest store in the comparison only
// when one store is strictly cheaper than the deal being viewed; when
// the lowest price is tied, the button simply goes to the store of the
// deal being viewed, with no cheapest claim.

function cheapestDeal(deal) {
  if (!deal.group) return deal;
  const all = DEALS.filter((d) => d.group === deal.group);
  return all.slice().sort((a, b) => a.sale - b.sale)[0];
}

function comparisonRows(deal) {
  if (!deal.group) return "";
  const siblings = DEALS.filter(
    (d) => d.group === deal.group && d.id !== deal.id
  );
  if (!siblings.length) return "";
  const all = [deal].concat(siblings).sort((a, b) => a.sale - b.sale);
  const minPrice = all[0].sale;
  const tiedAtMin = all.filter((d) => d.sale === minPrice).length;
  const rows = all
    .map((d) => {
      const isMin = d.sale === minPrice;
      // A tie at the lowest price is "Same price", never "Cheapest";
      // only a single lowest price earns "Cheapest". Any other price
      // shared by two stores is labelled "Same price" too.
      const sharesPrice = all.some((o) => o !== d && o.sale === d.sale);
      const label = isMin
        ? tiedAtMin > 1
          ? "Same price"
          : "Cheapest"
        : sharesPrice
          ? "Same price"
          : "";
      return (
        "<tr" +
        (d.id === deal.id ? ' class="row-current"' : "") +
        '><td><a href="' +
        d.url +
        '" target="_blank" rel="noopener">' +
        d.store +
        "</a></td><td>" +
        money(d.sale) +
        "</td><td>" +
        money(d.regular) +
        "</td><td>−" +
        discountPct(d) +
        "%</td><td>" +
        (d.note || "") +
        "</td><td>" +
        label +
        "</td></tr>"
      );
    })
    .join("");
  return (
    "<h3>Same product, other stores</h3>" +
    '<table class="compare"><thead><tr><th>Store</th><th>Sale</th><th>Regular</th><th>Off</th><th>What you get</th><th></th></tr></thead>' +
    "<tbody>" +
    rows +
    "</tbody></table>" +
    '<p class="compare-note">Prices checked ' +
    checkedRangeText(all) +
    " (UTC). Click a store name to open that store's product page.</p>"
  );
}

function detailHtml(deal) {
  const pct = discountPct(deal);
  const saved = dollarsSaved(deal);
  const cheapest = cheapestDeal(deal);
  // Only name another store as the cheapest when its price is strictly
  // lower than the deal being viewed. On a tie at the lowest price there
  // is no cheapest store, so the button stays neutral and points at the
  // store of the deal being viewed instead of claiming a cheaper one.
  const strictlyCheaper = cheapest.id !== deal.id && cheapest.sale < deal.sale;
  const cta =
    '<a class="btn btn-store" href="' +
    (strictlyCheaper ? cheapest.url : deal.url) +
    '" target="_blank" rel="noopener">' +
    (strictlyCheaper
      ? "View cheapest at " + cheapest.store + " →"
      : "View at " + deal.store + " →") +
    "</a>";
  const alsoAt =
    strictlyCheaper
      ? '<a class="btn btn-detail" href="' +
        deal.url +
        '" target="_blank" rel="noopener">View at ' +
        deal.store +
        " →</a>"
      : "";
  return (
    '<button class="detail-x" data-close-detail aria-label="Close">×</button>' +
    '<div class="detail-head">' +
    '<span class="store-chip store-' +
    deal.store.toLowerCase().replace(/[^a-z]/g, "") +
    '">' +
    storeMark(deal.store) +
    "</span>" +
    '<span class="card-category">' +
    deal.category +
    " · " +
    deal.store +
    "</span>" +
    verdictBadge(deal) +
    "</div>" +
    '<h2 class="detail-name">' +
    deal.name +
    "</h2>" +
    '<p class="detail-note">' +
    (deal.note || "") +
    "</p>" +
    '<div class="detail-prices">' +
    '<div><span class="detail-label">Sale price</span><span class="detail-sale">' +
    money(deal.sale) +
    "</span></div>" +
    '<div><span class="detail-label">Regular price</span><span class="detail-regular">' +
    money(deal.regular) +
    "</span></div>" +
    '<div><span class="detail-label">Discount</span><span class="detail-off">−' +
    pct +
    "% · save " +
    money(saved) +
    "</span></div>" +
    "</div>" +
    '<h3>Is it really a deal?</h3>' +
    '<p class="detail-evidence">' +
    deal.evidence +
    "</p>" +
    comparisonRows(deal) +
    '<h3>Where the price was checked</h3>' +
    '<p class="detail-source">Source: ' +
    deal.source +
    "</p>" +
    '<p class="detail-checked">Checked: ' +
    deal.checked +
    " (UTC)</p>" +
    '<div class="detail-actions">' +
    cta +
    alsoAt +
    '<button class="btn btn-close" data-close-detail>Close</button>' +
    "</div>"
  );
}

function openDetail(overlay, body, dealId) {
  const deal = DEALS.find((d) => d.id === dealId);
  if (!deal) return;
  body.innerHTML = detailHtml(deal);
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeDetail(overlay) {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}
