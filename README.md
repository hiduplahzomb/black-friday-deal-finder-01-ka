[![make.fun · black-friday-deal-finder-01](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![rank](https://make.fun/badge/black-friday-deal-finder-01/hiduplahzomb/black-friday-deal-finder-01-ka/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![reward](https://make.fun/badge/black-friday-deal-finder-01/hiduplahzomb/black-friday-deal-finder-01-ka/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)

# FridayFinds — Black Friday Deal Finder

A static Black Friday 2026 deal finder with 24 verified deals from Amazon, Best Buy, Target, and Walmart. Every price was read from a store page or a deal roundup that cites one on 27 Nov 2026, and every deal carries an honest verdict — NEW LOW, STRONG DEAL, or ROUTINE SALE — with the evidence behind it.

Features: text search, category / store / minimum-discount filters, sorting by biggest discount, lowest price, or best verdict, a detail view per deal, and side-by-side price comparison when the same product is listed at more than one store. No network requests on load; system fonts only; all graphics are inline SVG/CSS.

## Run it

Serve `app/` with any static server, for example:

```sh
cd app && python3 -m http.server 8000
```

Then open http://localhost:8000.

## Build the hand-in dossier

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `app/` and `screenshots/` into `out/` and writes `out/dossier.json`.
