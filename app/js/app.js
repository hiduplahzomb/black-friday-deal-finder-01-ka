// FridayFinds wiring: controls, state, rendering, detail overlay.
// Reads the filter state from the form, re-renders the list, and keeps
// the result count in sync. All state lives in this one object.

const state = {
  query: "",
  category: "all",
  store: "all",
  verdict: "all",
  minDiscount: 0,
  sort: "verdict"
};

const SORT_LABELS = {
  verdict: "best verdict first",
  discount: "biggest discount first",
  price: "lowest price first",
  savings: "biggest dollar saving first"
};

function refresh() {
  const filtered = sortDeals(applyFilters(DEALS, state), state.sort);
  renderList(document.getElementById("deal-list"), filtered);
  renderCounts(
    document.getElementById("deal-count"),
    filtered.length,
    DEALS.length
  );
  const active = document.getElementById("active-filters");
  const bits = [];
  if (state.query) bits.push('search "' + state.query + '"');
  if (state.category !== "all") bits.push(state.category);
  if (state.store !== "all") bits.push(state.store);
  if (state.verdict !== "all") bits.push(VERDICTS[state.verdict].label.toLowerCase());
  if (state.minDiscount) bits.push("at least " + state.minDiscount + "% off");
  bits.push(SORT_LABELS[state.sort] || state.sort);
  active.textContent = bits.join(" · ");
}

function fillOptions(select, values, counts) {
  for (const value of values) {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent =
      value + (counts && counts[value] ? " (" + counts[value] + ")" : "");
    select.appendChild(opt);
  }
}

function fillVerdictOptions(select) {
  const counts = countBy(DEALS, "verdict");
  for (const key of Object.keys(VERDICTS)) {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent =
      VERDICTS[key].label.charAt(0) +
      VERDICTS[key].label.slice(1).toLowerCase() +
      (counts[key] ? " (" + counts[key] + ")" : "");
    select.appendChild(opt);
  }
}

function renderHeaderStats() {
  const stores = new Set(DEALS.map((d) => d.store)).size;
  const biggestCut = Math.max.apply(
    null,
    DEALS.map((d) => discountPct(d))
  );
  document.getElementById("stat-deals").textContent = DEALS.length;
  document.getElementById("stat-stores").textContent = stores;
  document.getElementById("stat-cut").textContent = biggestCut + "%";
}

document.addEventListener("DOMContentLoaded", () => {
  const categoryCounts = countBy(DEALS, "category");
  const storeCounts = countBy(DEALS, "store");
  fillOptions(document.getElementById("category"), CATEGORIES, categoryCounts);
  fillOptions(document.getElementById("store"), STORES, storeCounts);
  fillVerdictOptions(document.getElementById("verdict"));
  renderHeaderStats();

  document.getElementById("search").addEventListener("input", (e) => {
    state.query = e.target.value;
    refresh();
  });
  document.getElementById("category").addEventListener("change", (e) => {
    state.category = e.target.value;
    refresh();
  });
  document.getElementById("store").addEventListener("change", (e) => {
    state.store = e.target.value;
    refresh();
  });
  document.getElementById("verdict").addEventListener("change", (e) => {
    state.verdict = e.target.value;
    refresh();
  });
  document.getElementById("min-discount").addEventListener("change", (e) => {
    state.minDiscount = Number(e.target.value);
    refresh();
  });
  document.getElementById("sort").addEventListener("change", (e) => {
    state.sort = e.target.value;
    refresh();
  });
  document.getElementById("reset").addEventListener("click", () => {
    state.query = "";
    state.category = "all";
    state.store = "all";
    state.verdict = "all";
    state.minDiscount = 0;
    state.sort = "verdict";
    document.getElementById("search").value = "";
    document.getElementById("category").value = "all";
    document.getElementById("store").value = "all";
    document.getElementById("verdict").value = "all";
    document.getElementById("min-discount").value = "0";
    document.getElementById("sort").value = "verdict";
    refresh();
  });

  const overlay = document.getElementById("detail-overlay");
  const body = document.getElementById("detail-body");
  document.getElementById("deal-list").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-detail]");
    if (btn) openDetail(overlay, body, btn.getAttribute("data-detail"));
  });
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay || e.target.closest("[data-close-detail]")) {
      closeDetail(overlay);
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) {
      closeDetail(overlay);
    }
  });

  document.getElementById("checked-at").textContent =
    "Prices checked " + checkedRangeText(DEALS) + " (UTC) — re-check the store page before buying, prices move fast on Black Friday.";
  refresh();
});
