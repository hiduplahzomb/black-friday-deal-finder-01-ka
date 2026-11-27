// Filter, search and sort logic for FridayFinds.
// Pure functions over the DEALS array — no DOM here, so the rules are
// easy to test and the list renderer stays thin.

function discountPct(deal) {
  return Math.round((1 - deal.sale / deal.regular) * 100);
}

function money(amount) {
  return "$" + amount.toFixed(2).replace(/\.00$/, "");
}

function matchesQuery(deal, query) {
  if (!query) return true;
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const hay = [deal.name, deal.store, deal.category, deal.note || ""]
    .join(" ")
    .toLowerCase();
  return q.split(/\s+/).every((word) => hay.includes(word));
}

function applyFilters(deals, state) {
  return deals.filter((deal) => {
    if (state.category && state.category !== "all" && deal.category !== state.category) return false;
    if (state.store && state.store !== "all" && deal.store !== state.store) return false;
    if (state.minDiscount && discountPct(deal) < state.minDiscount) return false;
    if (!matchesQuery(deal, state.query)) return false;
    return true;
  });
}

function sortDeals(deals, sortKey) {
  const list = deals.slice();
  if (sortKey === "discount") {
    list.sort((a, b) => discountPct(b) - discountPct(a) || a.sale - b.sale);
  } else if (sortKey === "price") {
    list.sort((a, b) => a.sale - b.sale || discountPct(b) - discountPct(a));
  } else if (sortKey === "verdict") {
    list.sort(
      (a, b) =>
        VERDICTS[a.verdict].rank - VERDICTS[b.verdict].rank ||
        discountPct(b) - discountPct(a)
    );
  }
  return list;
}

function countBy(deals, key) {
  const counts = {};
  for (const deal of deals) {
    counts[deal[key]] = (counts[deal[key]] || 0) + 1;
  }
  return counts;
}
