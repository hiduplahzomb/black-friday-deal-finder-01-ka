// Deal detail view for FridayFinds.
// Opens an overlay with the full price breakdown, the verdict evidence,
// the source the price was read from, and — when the same product is
// listed at more than one store — a side-by-side price comparison.

function comparisonRows(deal) {
  if (!deal.group) return "";
  const siblings = DEALS.filter(
    (d) => d.group === deal.group && d.id !== deal.id
  );
  if (!siblings.length) return "";
  const all = [deal].concat(siblings).sort((a, b) => a.sale - b.sale);
  const rows = all
    .map((d) => {
      const cheapest = d.sale === all[0].sale;
      return (
        "<tr" +
        (d.id === deal.id ? ' class="row-current"' : "") +
        "><td>" +
        d.store +
        "</td><td>" +
        money(d.sale) +
        "</td><td>" +
        money(d.regular) +
        "</td><td>−" +
        discountPct(d) +
        "%</td><td>" +
        (cheapest ? "Cheapest" : "") +
        "</td></tr>"
      );
    })
    .join("");
  return (
    "<h3>Same product, other stores</h3>" +
    '<table class="compare"><thead><tr><th>Store</th><th>Sale</th><th>Regular</th><th>Off</th><th></th></tr></thead>' +
    "<tbody>" +
    rows +
    "</tbody></table>" +
    '<p class="compare-note">Prices checked ' +
    CHECKED_AT +
    ". The cheapest row is the best price found today.</p>"
  );
}

function detailHtml(deal) {
  const pct = discountPct(deal);
  const saved = deal.regular - deal.sale;
  return (
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
    CHECKED_AT +
    "</p>" +
    '<div class="detail-actions">' +
    '<a class="btn btn-store" href="' +
    deal.url +
    '" target="_blank" rel="noopener">View at ' +
    deal.store +
    " →</a>" +
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
