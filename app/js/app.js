// FridayFinds wiring: controls, state, rendering, detail overlay.
// Reads the filter state from the form, re-renders the list, and keeps
// the result count in sync. All state lives in this one object.

const state = {
  query: "",
  category: "all",
  store: "all",
  minDiscount: 0,
  sort: "discount"
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
  if (state.minDiscount) bits.push("at least " + state.minDiscount + "% off");
  bits.push(
    state.sort === "discount"
      ? "biggest discount first"
      : state.sort === "price"
        ? "lowest price first"
        : "best verdict first"
  );
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

document.addEventListener("DOMContentLoaded", () => {
  const categoryCounts = countBy(DEALS, "category");
  const storeCounts = countBy(DEALS, "store");
  fillOptions(document.getElementById("category"), CATEGORIES, categoryCounts);
  fillOptions(document.getElementById("store"), STORES, storeCounts);

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
    state.minDiscount = 0;
    state.sort = "discount";
    document.getElementById("search").value = "";
    document.getElementById("category").value = "all";
    document.getElementById("store").value = "all";
    document.getElementById("min-discount").value = "0";
    document.getElementById("sort").value = "discount";
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
    "Prices checked " + CHECKED_AT + " — re-check the store page before buying, prices move fast on Black Friday.";
  refresh();
});
