# Shared Anno 1800 Mods

Shared mods from Jakob's Collection.

## Include in your Mod

You are free to include ground textures and shared products, as long as you don't modify the mods themselves.

You may add additional unlocks, but please don't change balancing if that's not the core theme of your mod (e.g. complete rebalance mod is OK).

Easily add shared mods by adding the following URL pattern to the dependencies in `modinfo.json` with `ModID` as the name for the zip file:
```json
"ModDependencies": [
  "https://github.com/jakobharder/anno1800-shared-mods/releases/download/v4/cheese-jakob.zip"
]
```

## Products and Productions

Product mods contain product asset, icon, storage list, expedition values and Docklands information if applicable - at least a fake factory for `IsMainFactory` handling.

Production mods contain production buildings in one region and sometimes a chain menu.
They include their needed products by default.

| | Name | GUID | Product ModID | Production ModID
---|---|---|---|---
<img src="./mods/vegetables-jakob/data/ui/jakob/icon_vegetables.png" style="vertical-align: text-bottom;18px" width="18" /> | Vegetables | 1500010836 | `vegetables-jakob`| `ow-vegetables-jakob`
<img src="./doc/icons/icon_flax.png" style="vertical-align: text-bottom;18px" width="18" /> | Flax | 114365 | vanilla | `ow-flax-jakob`
<img src="./mods/olives-jakob/data/ui/jakob/icon_olives3.png" style="vertical-align: text-bottom;18px" width="18" /> | Olives | 1500010105 | `olives-jakob` | `ow-olive-oil-jakob`
<img src="./mods/olive-oil-jakob/data/ui/jakob/icon_olive_oil3.png" style="vertical-align: text-bottom;18px" width="18" />| Olive Oil | 1500011326  | `olive-oil` | `ow-olive-oil-jakob`
<img src="./doc/icons/icon_milk.png" style="vertical-align: text-bottom;18px" width="18" /> | Milk | 5385 | vanilla | `ow-cheese-jakob`
<img src="./doc/icons/icon_cheese_16.png" style="vertical-align: text-bottom;18px" width="18" /> | Cheese | 1500010102 | `cheese-jakob` | `ow-cheese-jakob`<br/>(`New World Cities`)
<img src="./doc/icons/icon_tools.png" style="vertical-align: text-bottom;18px" width="18" /> | Tools | 1500010153 | `tools-jakob` | `ow-tools-jakob`
<img src="./doc/icons/icon_fish_16.png" style="vertical-align: text-bottom;18px" width="18" /> | Sardines | 1500010120 | `sardines-jakob` | (`ow-sardines-jakob`)
<img src="./doc/icons/icon_hemp.png" style="vertical-align: text-bottom;18px" width="18" /> | Hemp | 1440224 | `hemp-jakob` | `ow-hemp-jakob`<br/>(`New Horizons`, Asia)
<img src="./doc/icons/icon_rope.png" style="vertical-align: text-bottom;18px" width="18" /> | Ropes | 1500010825 | `ropes-jakob` | `ow-ropes-jakob`
<img src="./mods/suits-jakob/data/ui/jakob/icon_suits.png" style="vertical-align: text-bottom;18px" width="18" /> | Suits | 1500010127 | `suits-jakob` | (`ow-suits-jakob`)
<img src="./doc/icons/icon_herbs.png" style="vertical-align: text-bottom;18px" width="18" /> | Herbs | 5383 | vanilla | `ow-herbs-jakob`<br/>(`shared_herb_garden_kurila`)<br>*compatible, differ in fertility*
<img src="./mods/tea-jakob/data/ui/jakob/icon_tea.png" style="vertical-align: text-bottom;18px" width="18" /> | Tea | 1500010847 | `tea-jakob` | (`ow-tea-jakob`)

## Modular Decals

Contains 1x1 CFG tiles to use instead of decals.

- City: Engineer/Investor like pavements.
- Industry: Concrete/stone pavement for industries.

### Use Textures in your Mod

Add the following dependencies to your `modinfo.json`:
```json
"ModDependencies": [
  "https://github.com/jakobharder/anno1800-shared-mods/releases/download/v3.4/shared-ground-textures-city-jakob.zip",
  "https://github.com/jakobharder/anno1800-shared-mods/releases/download/v3.4/shared-ground-textures-industry-jakob.zip"
]
```

## Production: Vegetables

ID: `ow-vegetables-jakob`

Icon | GUID | Name | Unlock
---|---|---|---
<img src="./mods/vegetables-jakob/data/ui/jakob/icon_vegetables.png" style="vertical-align: text-bottom;18px" width="18" /> | 1500010836<br/>1500010830 | Vegetables<br/>Vegetable Farm | 400 <img src="./doc/icons/icon_worker.png" style="vertical-align: text-bottom;18px" width="18" />

## Production: Olives and Olive Oil

ID: `ow-olive-oil-jakob`

Contains products and production chains.
Soap is an alternative production chain to produce vanilla soap.

Icon | GUID | Name | Unlock | Chain
---|---|---|---|---
<img src="./mods/olives-jakob/data/ui/jakob/icon_olives3.png" style="vertical-align: text-bottom;18px" width="18" /> | 1500010105<br/>1500010107 | Olives<br/>Olive Grove | 400 <img src="./doc/icons/icon_worker.png" style="vertical-align: text-bottom;18px" width="18" />
<img src="./mods/olive-oil-jakob/data/ui/jakob/icon_olive_oil3.png" style="vertical-align: text-bottom;18px" width="18" /> | 1500011326<br/>1500011325 | Olive Oil<br/>Olive Oil Press | 400 <img src="./doc/icons/icon_worker.png" style="vertical-align: text-bottom;18px" width="18" />

## Production: Sardines

ID: `ow-sardines-jakob`

Icon | GUID | Name | Unlock | Chain
---|---|---|---|---
<img src="./doc/icons/icon_fish_16.png" style="vertical-align: text-bottom;18px" width="18" /> | 1500010120<br/>1500010121 | Sardines<br/>Fish Cannery | 800 <img src="./doc/icons/icon_artisan.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./mods/olives-jakob/data/ui/jakob/icon_olives3.png" style="vertical-align: text-bottom;18px" width="18" /> → <img src="./mods/olive-oil-jakob/data/ui/jakob/icon_olive_oil3.png" style="vertical-align: text-bottom;18px" width="18" /> + <img src="./doc/icons/icon_fish.png" style="vertical-align: text-bottom;18px" width="18" /> + <img src="./doc/icons/icon_iron.png" style="vertical-align: text-bottom;18px" width="18" /> → <img src="./doc/icons/icon_fish_16.png" style="vertical-align: text-bottom;18px" width="18" />

## Production: Hemp and Linen

ID: `ow-hemp`

Icon | GUID | Name | Unlock
---|---|---|---
<img src="./doc/icons/icon_hemp.png" style="vertical-align: text-bottom;18px" width="18" /> | 1500010105<br/>1500010107 | Hemp<br/>Hemp Farm | 800 <img src="./doc/icons/icon_artisan.png" style="vertical-align: text-bottom;18px" width="18" />
<img src="./doc/icons/icon_linen.png" style="vertical-align: text-bottom;18px" width="18" /> | vanilla<br/>1500011325 | Linen<br/>Linen Cloth Maker | 800 <img src="./doc/icons/icon_artisan.png" style="vertical-align: text-bottom;18px" width="18" />
<img src="./doc/icons/icon_rope_16.png" style="vertical-align: text-bottom;18px" width="18" /> | 1500010825 | Ropes

## Production: Suits

ID: `ow-suits`

Icon | GUID | Name | Unlock | Chain
---|---|---|---|---
<img src="./mods/suits-jakob/data/ui/jakob/icon_suits.png" style="vertical-align: text-bottom;18px" width="18" /> | 1500010127<br/>1500011150 | Suits<br/>Suits Factory | 800 <img src="./doc/icons/icon_artisan.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_hemp.png" style="vertical-align: text-bottom;18px" width="18" /> → <img src="./doc/icons/icon_linen.png" style="vertical-align: text-bottom;18px" width="18" /> → <img src="./mods/suits-jakob/data/ui/jakob/icon_suits.png" style="vertical-align: text-bottom;18px" width="18" />

## Production Fertilities

Set | Hard | Medium | Easy
---|---|---|---
Any 1 | <img src="./doc/icons/icon_potatoes.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_grain.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/vegetables-jakob/data/ui/jakob/icon_vegetables.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_flax.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_red_pepper.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_hemp.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_niter.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/olives-jakob/data/ui/jakob/icon_olives3.png" style="vertical-align: text-bottom;18px" width="18" />
Any 2 | <img src="./doc/icons/icon_potatoes.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_grain.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_hemp.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_niter.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/olives-jakob/data/ui/jakob/icon_olives3.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_grapes.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_herbs.png" style="vertical-align: text-bottom;18px" width="18" />*
Any 3 | <img src="./doc/icons/icon_potatoes.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_grain.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/olives-jakob/data/ui/jakob/icon_olives3.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_flax.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_grapes.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_hemp.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_red_pepper.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/vegetables-jakob/data/ui/jakob/icon_vegetables.png" style="vertical-align: text-bottom;18px" width="18" />
Any 4 | <img src="./doc/icons/icon_potatoes.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_grain.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/vegetables-jakob/data/ui/jakob/icon_vegetables.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_fur.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/olives-jakob/data/ui/jakob/icon_olives3.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_hops.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_herbs.png" style="vertical-align: text-bottom;18px" width="18" />*
Any 5 | <img src="./doc/icons/icon_potatoes.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_red_pepper.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/olives-jakob/data/ui/jakob/icon_olives3.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_flax.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_potatoes.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_hemp.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_fur.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/vegetables-jakob/data/ui/jakob/icon_vegetables.png" style="vertical-align: text-bottom;18px" width="18" />
Any 6 | <img src="./doc/icons/icon_potatoes.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_red_pepper.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_hemp.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_grain.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/vegetables-jakob/data/ui/jakob/icon_vegetables.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_flax.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_fur.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/olives-jakob/data/ui/jakob/icon_olives3.png" style="vertical-align: text-bottom;18px" width="18" />
Non-starter 7 | <img src="./doc/icons/icon_hops.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_niter.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_herbs.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_flax.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_potatoes.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/olives-jakob/data/ui/jakob/icon_olives3.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_grain.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_hemp.png" style="vertical-align: text-bottom;18px" width="18" />
Non-starter 8 | <img src="./doc/icons/icon_hops.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_grapes.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_hemp.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_red_pepper.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/vegetables-jakob/data/ui/jakob/icon_vegetables.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_potatoes.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/olives-jakob/data/ui/jakob/icon_olives3.png" style="vertical-align: text-bottom;18px" width="18" />
Non-starter 9 | <img src="./doc/icons/icon_fur.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_red_pepper.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/vegetables-jakob/data/ui/jakob/icon_vegetables.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_hops.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/olives-jakob/data/ui/jakob/icon_olives3.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_flax.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_potatoes.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_hemp.png" style="vertical-align: text-bottom;18px" width="18" />
Non-starter 10 | <img src="./doc/icons/icon_fur.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_niter.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_herbs.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_hops.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_hemp.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_grain.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/olives-jakob/data/ui/jakob/icon_olives3.png" style="vertical-align: text-bottom;18px" width="18" />
Non-starter 11 | <img src="./doc/icons/icon_fur.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_grapes.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./doc/icons/icon_herbs.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_grain.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/olives-jakob/data/ui/jakob/icon_olives3.png" style="vertical-align: text-bottom;18px" width="18" /> | <img src="./doc/icons/icon_hops.png" style="vertical-align: text-bottom;18px" width="18" /> <img src="./mods/vegetables-jakob/data/ui/jakob/icon_vegetables.png" style="vertical-align: text-bottom;18px" width="18" />

*) Extra herb fertility on easy only with `ow-herbs-jakob`.
`shared_herb_garden_kurila` has the same on all difficulty levels, but comes with fertility items.

## Changes

### [Unreleased]

- Split products, productions into individual mods
- Added olive oil to olive related productions
- Added fertilities to vegetables, olives and hemp including existing save fallback with buffs

## How to Build

### Build with Visual Studio Code plugin

The mods are made with the [Modding Tools for Anno](https://marketplace.visualstudio.com/items?itemName=JakobHarder.anno-modding-tools) extension for [VS Code](https://code.visualstudio.com/).

Make sure to set `annoMods` settings.

Install the plugin, open a mod folder and press `F1` and choose `Build Anno Mod` or right click on a `modinfo.json` file.

### Build with Node.js

Run the following commands:

```
npm install .
npm run build
npm run package
```
