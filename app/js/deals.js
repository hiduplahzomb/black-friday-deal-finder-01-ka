// FridayFinds deal data — Black Friday 2026.
// Every price below was read from the named source between 22 and 27 Nov
// 2026 (UTC). Each deal carries its own checked date, taken from the date
// of the source it was read from — store pages checked 27 Nov, roundups
// dated 22–26 Nov. Times are UTC; this is a US store list in USD.
// sale and regular are USD numbers; the discount % shown on the site is
// computed from them, so it always matches the two prices exactly.
// verdict: "new-low" | "strong" | "routine"
// group: deals sharing a group id are the same product at different stores.
// why: one line of evidence for the verdict, shown on the deal card.

const DEALS = [
  {
    id: "airpods-pro-3-amazon",
    name: "Apple AirPods Pro 3",
    store: "Amazon",
    category: "Audio",
    sale: 149,
    regular: 249,
    verdict: "new-low",
    evidence: "All-time low. Was $169 overnight before dropping to $149; the previous low was $189.",
    why: "Lowest price ever tracked — fell from $189 to $149.",
    checked: "26 Nov 2026",
    source: "9to5Toys Black Friday diary, 24–26 Nov 2026; Macworld price check 26 Nov 2026",
    url: "https://www.amazon.com/dp/B0FQFB8FMG",
    group: null,
    note: "USB-C charging case"
  },
  {
    id: "watch-series-12-amazon",
    name: "Apple Watch Series 12 (GPS, 46mm)",
    store: "Amazon",
    category: "Wearables",
    sale: 349,
    regular: 449,
    verdict: "new-low",
    evidence: "All-time low, $100 off list. The 42mm version is $299; this is the 46mm model.",
    why: "$100 off list — the lowest price tracked for the 46mm.",
    checked: "26 Nov 2026",
    source: "9to5Toys, 24–26 Nov 2026",
    url: "https://www.amazon.com/dp/B0HJBCGY95",
    group: null,
    note: "46mm case, GPS"
  },
  {
    id: "airtag-2-amazon",
    name: "Apple AirTag 2 (1-pack)",
    store: "Amazon",
    category: "Wearables",
    sale: 18,
    regular: 29,
    verdict: "new-low",
    evidence: "Lowest price yet. Was $23 earlier in November (11–16 Nov); now $18.",
    why: "Lowest price yet, down from $23 earlier in November.",
    checked: "27 Nov 2026",
    source: "9to5Toys, 24 Nov 2026; trendthread.space Black Friday diary, 27 Nov 2026",
    url: "https://www.amazon.com/dp/B0GJTFXNRX",
    group: null,
    note: "Single tracker"
  },
  {
    id: "apple-pencil-usbc-amazon",
    name: "Apple Pencil (USB-C)",
    store: "Amazon",
    category: "Computing",
    sale: 49,
    regular: 79,
    verdict: "strong",
    evidence: "A recurring Black Friday price for this model; $30 off list and the lowest tier it reaches.",
    why: "$30 off list; the lowest tier it reaches each Black Friday.",
    checked: "26 Nov 2026",
    source: "9to5Toys, 24–26 Nov 2026",
    url: "https://www.amazon.com/dp/B0CL7J12YK",
    group: null,
    note: "Model MUWA3AM/A"
  },
  {
    id: "airpods-max-2-amazon",
    name: "Apple AirPods Max 2",
    store: "Amazon",
    category: "Audio",
    sale: 419,
    regular: 549,
    verdict: "new-low",
    evidence: "Lowest price at Amazon since June; $130 off list.",
    why: "Lowest Amazon price since June; $130 off list.",
    checked: "26 Nov 2026",
    source: "9to5Mac, 25 Nov 2026; Macworld price check 26 Nov 2026; DealNews",
    url: "https://www.amazon.com/dp/B0GSS4SGZR",
    group: null,
    note: "Over-ear, USB-C"
  },
  {
    id: "watch-se-3-amazon",
    name: "Apple Watch SE 3 (GPS, 40mm)",
    store: "Amazon",
    category: "Wearables",
    sale: 179,
    regular: 249,
    verdict: "new-low",
    evidence: "All-time low, $70 off list, confirmed across three deal roundups.",
    why: "All-time low, $70 off list.",
    checked: "26 Nov 2026",
    source: "9to5Toys, 23–26 Nov 2026; MacRumors; AppleInsider",
    url: "https://www.amazon.com/dp/B0HJ9SMYXY",
    group: null,
    note: "40mm case, GPS"
  },
  {
    id: "beats-studio-pro-amazon",
    name: "Beats Studio Pro — Sand Gray",
    store: "Amazon",
    category: "Audio",
    sale: 139.95,
    regular: 299.99,
    verdict: "new-low",
    evidence: "Lowest price tracked for this model. Price varies by color ($139.95–$149); Sand Gray is the cheapest.",
    why: "Lowest price tracked for this color; $160 off list.",
    checked: "25 Nov 2026",
    source: "Product Bible, 23 Nov 2026; MacRumors; PC Guide, 25 Nov 2026",
    url: "https://www.amazon.com/dp/B0FHM61VTK",
    group: null,
    note: "Sand Gray color"
  },
  {
    id: "switch-2-bundle-amazon",
    name: "Nintendo Switch 2 + Mario Kart World Bundle",
    store: "Amazon",
    category: "Gaming",
    sale: 499.99,
    regular: 549.99,
    verdict: "routine",
    evidence: "A rollback, not a new low: $499.99 was the original June 2025 launch price before a $50 hike. Target lists the same bundle at $499.99; Walmart lists it at $499 — $0.99 less.",
    why: "A rollback to the June launch price, not a new low.",
    checked: "26 Nov 2026",
    source: "Nintendo Black Friday pricing, verified 22–26 Nov 2026; pro-gamer.gg; CNN",
    url: "https://www.amazon.com/dp/B0GQWCGVFV",
    group: "switch-2-bundle",
    note: "256GB, game download"
  },
  {
    id: "switch-2-bundle-target",
    name: "Nintendo Switch 2 + Mario Kart World Bundle",
    store: "Target",
    category: "Gaming",
    sale: 499.99,
    regular: 549.99,
    verdict: "routine",
    evidence: "Same $499.99 rollback as Amazon — $50 off the $549.99 list. Walmart lists the same bundle at $499, $0.99 less. The box includes the game download and a 3-month Switch Online code.",
    why: "Same $499.99 rollback as Amazon; Walmart is $0.99 cheaper.",
    checked: "27 Nov 2026",
    source: "Target Black Friday listing, checked 27 Nov 2026 (UTC); CNN",
    url: "https://www.target.com/p/nintendo-switch-2-mario-kart-world-bundle/-/A-1013129025",
    group: "switch-2-bundle",
    note: "256GB, download + 3-month Online"
  },
  {
    id: "donkey-kong-bananza-amazon",
    name: "Donkey Kong Bananza (Nintendo Switch 2)",
    store: "Amazon",
    category: "Gaming",
    sale: 49.99,
    regular: 69.99,
    verdict: "strong",
    evidence: "Part of Nintendo's $20-off first-party games promotion, 22–29 Nov 2026; $20 off the $69.99 list.",
    why: "$20 off list in Nintendo's 22–29 Nov promo.",
    checked: "26 Nov 2026",
    source: "Slickdeals / DealNews, verified 22–26 Nov 2026",
    url: "https://www.amazon.com/dp/B0F66KLYVH",
    group: null,
    note: "Physical game card"
  },
  {
    id: "sony-xm5-bestbuy",
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones — Black",
    store: "Best Buy",
    category: "Audio",
    sale: 169.99,
    regular: 397.99,
    verdict: "new-low",
    evidence: "Doorbuster. Best Buy lists 'Save $228' against a $398 comparison value — the lowest price seen for the XM5.",
    why: "Doorbuster — $228 off, the lowest price seen for the XM5.",
    checked: "27 Nov 2026",
    source: "Best Buy product page, checked 27 Nov 2026 (SKU 6505727)",
    url: "https://www.bestbuy.com/product/sony-wh-1000xm5-wireless-noise-cancelling-over-the-ear-headphones-black/J7XSRH5CXG",
    group: null,
    note: "Black; doorbuster"
  },
  {
    id: "tcl-65-s4cf-bestbuy",
    name: "TCL 65\" S4CF Series 4K UHD HDR Smart TV with Fire TV (2026)",
    store: "Best Buy",
    category: "TV",
    sale: 229.99,
    regular: 469.99,
    verdict: "new-low",
    evidence: "Doorbuster, 'Save $240'. Best deal seen for this 2026 model.",
    why: "Doorbuster — the best deal seen for this 2026 model.",
    checked: "27 Nov 2026",
    source: "Best Buy product page, checked 27 Nov 2026 (SKU 6687112); DealNews",
    url: "https://www.bestbuy.com/product/tcl-65-s4cf-series-4k-uhd-hdr-smart-tv-with-fire-tv-2026/J36QYTHZVP/sku/6687112",
    group: null,
    note: "65-inch, Fire TV"
  },
  {
    id: "hp-omnibook-5-bestbuy",
    name: "HP OmniBook 5 14\" 2K OLED Touchscreen Laptop — 8GB / 256GB, Starlit Blue",
    store: "Best Buy",
    category: "Computing",
    sale: 449.99,
    regular: 799.99,
    verdict: "strong",
    evidence: "Doorbuster, 'Save $350'. This is the 256GB configuration; the 512GB version is $749.99 and not on sale.",
    why: "Doorbuster, $350 off the 256GB model.",
    checked: "27 Nov 2026",
    source: "Best Buy product page, checked 27 Nov 2026 (SKU 6690110); USA Today / redding.com",
    url: "https://www.bestbuy.com/product/hp-omnibook-5-14-2k-oled-touchscreen-laptop-intel-core-5-series-3-2026-8gb-memory-256gb-ssd-14-mh0013dx-starlit-blue/J3KSW748W6/sku/6690110",
    group: null,
    note: "Intel Core 5, 256GB SSD"
  },
  {
    id: "sennheiser-momentum-4-bestbuy",
    name: "Sennheiser MOMENTUM 4 Wireless Headphones — Denim",
    store: "Best Buy",
    category: "Audio",
    sale: 179.99,
    regular: 299.99,
    verdict: "strong",
    evidence: "Best Buy lists 'Save $120'. Price varies by color — Black $189.99, White $199.99; Denim is the cheapest at $179.99.",
    why: "$120 off list; Denim is the cheapest color.",
    checked: "27 Nov 2026",
    source: "Best Buy product page, checked 27 Nov 2026 (SKU 6557562); 9to5Toys",
    url: "https://www.bestbuy.com/product/sennheiser-momentum-4-wireless-adaptive-noise-canceling-over-the-ear-headphones-denim/J3GW2LH65F/sku/6557562",
    group: null,
    note: "Denim color"
  },
  {
    id: "hisense-98-qd5-bestbuy",
    name: "Hisense 98\" QD5 Hi-QLED Series 4K UHD Smart Fire TV (2026)",
    store: "Best Buy",
    category: "TV",
    sale: 799.99,
    regular: 2499.99,
    verdict: "strong",
    evidence: "Doorbuster, 'Save $1,700'. This is the 2026 Fire TV model (98QD5SF); the 2025 Google TV version is $1,299.99 — a different TV.",
    why: "Doorbuster, $1,700 off the 2026 Fire TV model.",
    checked: "27 Nov 2026",
    source: "Best Buy product page, checked 27 Nov 2026 (SKU 6685580)",
    url: "https://www.bestbuy.com/product/hisense-98-class-qd5-hi-qled-series-4k-uhd-smart-fire-tv-2026/J3Z9Z42FS4/sku/6685580",
    group: null,
    note: "98-inch, model 98QD5SF"
  },
  {
    id: "dyson-v9-target",
    name: "Dyson V9 Motorbar Cordless Vacuum",
    store: "Target",
    category: "Home",
    sale: 269.99,
    regular: 599.99,
    verdict: "new-low",
    evidence: "Less than half price — the biggest dollar saving at Target this Black Friday, $330 off.",
    why: "Less than half price — $330 off, Target's biggest dollar saving.",
    checked: "27 Nov 2026",
    source: "Target product page (JSON-LD), checked 27 Nov 2026; flashdealfeed, prices checked 25 Nov 2026",
    url: "https://www.target.com/p/dyson-v9-motorbar-cordless-vacuum-9-8-34-cleaning-path-nickel/-/A-1011912746",
    group: null,
    note: "9.8\" cleaning path, Nickel"
  },
  {
    id: "kitchenaid-ksm55-target",
    name: "KitchenAid 5.5 Qt Bowl-Lift Stand Mixer KSM55 — Contour Silver",
    store: "Target",
    category: "Kitchen",
    sale: 299.99,
    regular: 499.99,
    verdict: "strong",
    evidence: "$200 off list at Target's own price; a recurring Black Friday tier for this mixer, not a first-time low.",
    why: "$200 off list; a recurring Black Friday tier, not a first-time low.",
    checked: "27 Nov 2026",
    source: "Target product page (JSON-LD), checked 27 Nov 2026; passionforsavings.com",
    url: "https://www.target.com/p/kitchenaid-5-5-quart-bowl-lift-stand-mixer-ksm55-contour-silver/-/A-88347595",
    group: null,
    note: "Contour Silver"
  },
  {
    id: "breville-smart-oven-target",
    name: "Breville Smart Oven Air Fryer Pro",
    store: "Target",
    category: "Kitchen",
    sale: 299.99,
    regular: 399.99,
    verdict: "strong",
    evidence: "$100 off list. Read from a roundup that checked Target's price on 25 Nov 2026; an older listing at $319.99 is stale — the current price is $299.99.",
    why: "$100 off list at Target, read from a roundup checked 25 Nov.",
    checked: "25 Nov 2026",
    source: "soomuch.com, prices checked on Target 25 Nov 2026",
    url: "https://www.target.com/p/breville-smart-oven-air-fryer-pro/-/A-90673373",
    group: null,
    note: "Air fryer + convection oven"
  },
  {
    id: "samsung-frame-55-target",
    name: "Samsung 55\" The Frame LS03HE QLED 4K TV (QN55LS03HE)",
    store: "Target",
    category: "TV",
    sale: 899.99,
    regular: 1199.99,
    verdict: "strong",
    evidence: "$300 off list. Best Buy lists the same model at the same $899.99 — the price is consistent across stores.",
    why: "$300 off list; Best Buy lists the same model at the same price.",
    checked: "27 Nov 2026",
    source: "Target product page, checked 27 Nov 2026; flashdealfeed, prices checked 25 Nov 2026",
    url: "https://www.target.com/p/samsung-55-34-4k-uhd-ls03he-series-the-frame-samsungvision-ai-smart-tizen-os-tv-qn55ls03he/-/A-95251703",
    group: "samsung-frame-55",
    note: "Model QN55LS03HE"
  },
  {
    id: "samsung-frame-55-bestbuy",
    name: "Samsung 55\" The Frame LS03HE QLED 4K TV (QN55LS03HE)",
    store: "Best Buy",
    category: "TV",
    sale: 899.99,
    regular: 1199.99,
    verdict: "strong",
    evidence: "Best Buy lists the same model at $899.99 — $300 off list, the same price as Target. A marketplace copy lists at $897.99, but it is not sold by Best Buy.",
    why: "Same $899.99 as Target; $300 off list.",
    checked: "27 Nov 2026",
    source: "Best Buy product page, checked 27 Nov 2026 (SKU 6671655)",
    url: "https://www.bestbuy.com/product/samsung-55-class-ls03h-series-the-frame-4k-uhd-samsungvision-ai-smart-tizen-tv-2026/JJGRF3HJXL/sku/6671655",
    group: "samsung-frame-55",
    note: "Model QN55LS03HEFXZA; sold by Best Buy"
  },
  {
    id: "lego-fifa-target",
    name: "LEGO Editions FIFA World Cup Official Trophy 43020",
    store: "Target",
    category: "Toys",
    sale: 149.99,
    regular: 199.99,
    verdict: "routine",
    evidence: "Was $119.99 on 15–25 Nov, now $149.99 — the deep cut is gone, but 25% off list still holds. Amazon lists the same set at the same $149.99 today.",
    why: "Was $119.99 two weeks ago; now $149.99 — the deep cut is gone.",
    checked: "27 Nov 2026",
    source: "Target product page, checked 27 Nov 2026; Slickdeals, 15 Nov 2026",
    url: "https://www.target.com/p/lego-editions-fifa-world-cup-official-trophy-43020/-/A-94756855",
    group: "lego-fifa-43020",
    note: "2,842 pieces, ages 12+"
  },
  {
    id: "switch-2-bundle-walmart",
    name: "Nintendo Switch 2 + Mario Kart World Bundle",
    store: "Walmart",
    category: "Gaming",
    sale: 499,
    regular: 549.99,
    verdict: "routine",
    evidence: "$50.99 off list — $0.99 cheaper than Amazon and Target at $499.99. Sold and shipped by Walmart.com; marketplace copies of the same bundle list at $548.99.",
    why: "$0.99 cheaper than Amazon and Target for the same bundle.",
    checked: "27 Nov 2026",
    source: "Walmart product page, checked 27 Nov 2026; passionforsavings.com; CNN",
    url: "https://www.walmart.com/ip/Nintendo-Switch-2-Mario-Kart-World-Bundle/20865751029",
    group: "switch-2-bundle",
    note: "256GB, includes 3-month Online"
  },
  {
    id: "beats-solo-4-walmart",
    name: "Beats Solo 4 — Slate Blue",
    store: "Walmart",
    category: "Audio",
    sale: 99.95,
    regular: 199.99,
    verdict: "routine",
    evidence: "Half price. Fell from $129.95 a week ago to $99.95 now. Target's Warm White is cheaper at $79.99 — compare before buying.",
    why: "Half price, but Target's Warm White is $20 cheaper.",
    checked: "27 Nov 2026",
    source: "Walmart product page, checked 27 Nov 2026",
    url: "https://www.walmart.com/ip/Beats-Solo4-Wireless-Headphones-On-Ear-Wireless-Headphones-Slate-Blue/5321127915",
    group: "beats-solo-4",
    note: "Slate Blue; Black and Cloud Pink also $99.95"
  },
  {
    id: "jlab-go-air-pop-walmart",
    name: "JLab Go Air Pop Bluetooth Earbuds — Black",
    store: "Walmart",
    category: "Audio",
    sale: 9.88,
    regular: 26.99,
    verdict: "new-low",
    evidence: "Black Friday doorbuster price, flagged on Walmart's own page. Most colors are $19.99; Black (and Teal) are $9.88.",
    why: "Doorbuster $9.88 for Black; most colors are $19.99.",
    checked: "27 Nov 2026",
    source: "Walmart product page, checked 27 Nov 2026; comicbook.com Walmart deals",
    url: "https://www.walmart.com/ip/JLab-Go-Air-Pop-Bluetooth-Earbuds-True-Wireless-with-Charging-Case/5699757383",
    group: null,
    note: "Black; 32+ hours total playtime"
  },
  {
    id: "beats-solo-4-target",
    name: "Beats Solo 4 — Warm White",
    store: "Target",
    category: "Audio",
    sale: 79.99,
    regular: 199.99,
    verdict: "strong",
    evidence: "Cheapest Solo 4 anywhere today: $79.99 at Target vs $99.95 at Walmart. Price varies by color — Slate Blue and Matte Black are $99.99 at Target.",
    why: "Cheapest Solo 4 anywhere today — $20 under Walmart.",
    checked: "27 Nov 2026",
    source: "Target product page (JSON-LD), checked 27 Nov 2026; flashdealfeed, prices checked 25 Nov 2026",
    url: "https://www.target.com/p/beats-solo-4-bluetooth-wireless-on-ear-headphones-warm-white/-/A-93124207",
    group: "beats-solo-4",
    note: "Warm White color"
  },
  {
    id: "lego-fifa-amazon",
    name: "LEGO Editions FIFA World Cup Official Trophy 43020",
    store: "Amazon",
    category: "Toys",
    sale: 149.99,
    regular: 199.99,
    verdict: "routine",
    evidence: "Was $119.99 on 15–19 Nov (40% off), now $149.99 — the deepest cut is gone, but 25% off list holds. Target lists the same set at the same $149.99 today.",
    why: "Was $119.99 two weeks ago; now $149.99 — the deep cut is gone.",
    checked: "26 Nov 2026",
    source: "pickoryx.com Amazon price check, 26 Nov 2026; Slickdeals, 15 Nov 2026; StudSteals",
    url: "https://www.amazon.com/dp/B0FMYYGFQF",
    group: "lego-fifa-43020",
    note: "2,842 pieces, ages 12+"
  }
];

const VERDICTS = {
  "new-low": { label: "NEW LOW", rank: 0 },
  "strong": { label: "STRONG DEAL", rank: 1 },
  "routine": { label: "ROUTINE SALE", rank: 2 }
};

const CATEGORIES = ["Audio", "Wearables", "Gaming", "TV", "Computing", "Home", "Kitchen", "Toys"];
const STORES = ["Amazon", "Best Buy", "Target", "Walmart"];

// Date helpers — checked dates are stored as "26 Nov 2026" (UTC).
const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function fmtCheckedDate(d) {
  return d.getUTCDate() + " " + MONTHS_SHORT[d.getUTCMonth()] + " " + d.getUTCFullYear();
}

// "25–27 Nov 2026" for a span, or "27 Nov 2026" for a single day.
function checkedRangeText(deals) {
  const dates = deals.map((d) => new Date(d.checked + " UTC")).sort((a, b) => a - b);
  if (!dates.length) return "";
  const first = dates[0];
  const last = dates[dates.length - 1];
  if (first.getTime() === last.getTime()) return fmtCheckedDate(first);
  if (first.getUTCMonth() === last.getUTCMonth() && first.getUTCFullYear() === last.getUTCFullYear()) {
    return first.getUTCDate() + "–" + fmtCheckedDate(last);
  }
  return fmtCheckedDate(first) + " – " + fmtCheckedDate(last);
}
