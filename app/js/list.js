// Deal list renderer for FridayFinds.
// Builds the card grid from a filtered deal list and wires the
// "Details" buttons to the detail view. No network calls.

function verdictBadge(deal) {
  const v = VERDICTS[deal.verdict];
  return (
    '<span class="badge badge-' +
    deal.verdict +
    '">' +
    v.label +
    "</span>"
  );
}

function storeMark(store) {
  const marks = {
    Amazon: "a",
    "Best Buy": "BB",
    Target: "T",
    Walmart: "W"
  };
  return marks[store] || store.charAt(0);
}

function dealCard(deal) {
  const pct = discountPct(deal);
  const saved = deal.regular - deal.sale;
  return (
    '<article class="card" data-id="' +
    deal.id +
    '">' +
    '<div class="card-top">' +
    '<span class="store-chip store-' +
    deal.store.toLowerCase().replace(/[^a-z]/g, "") +
    '" title="' +
    deal.store +
    '">' +
    storeMark(deal.store) +
    "</span>" +
    '<span class="card-category">' +
    deal.category +
    "</span>" +
    verdictBadge(deal) +
    "</div>" +
    '<h3 class="card-name">' +
    deal.name +
    "</h3>" +
    '<p class="card-note">' +
    (deal.note || "") +
    "</p>" +
    '<div class="card-prices">' +
    '<span class="price-sale">' +
    money(deal.sale) +
    "</span>" +
    '<span class="price-regular">' +
    money(deal.regular) +
    "</span>" +
    '<span class="price-off">−' +
    pct +
    "%</span>" +
    "</div>" +
    '<p class="card-saved">You save ' +
    money(saved) +
    " · " +
    deal.store +
    "</p>" +
    '<div class="card-actions">' +
    '<button class="btn btn-detail" data-detail="' +
    deal.id +
    '">Details &amp; proof</button>' +
    '<a class="btn btn-store" href="' +
    deal.url +
    '" target="_blank" rel="noopener">View at ' +
    deal.store +
    " →</a>" +
    "</div>" +
    "</article>"
  );
}

function renderList(container, deals) {
  if (!deals.length) {
    container.innerHTML =
      '<p class="empty">No deals match those filters. Try clearing the search or lowering the minimum discount.</p>';
    return;
  }
  container.innerHTML = deals.map(dealCard).join("");
}

function renderCounts(countEl, shown, total) {
  countEl.textContent =
    shown === total
      ? total + " verified deals"
      : shown + " of " + total + " deals";
}
