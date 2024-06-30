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

Production mods contain production buildings in one region and sometimes a chain menu with an unlock.

| | Name | GUID | Product | Production | Unlock
---|---|---|---|---|---
<img src="./mods/vegetables-jakob/data/ui/jakob/icon_vegetables.png" style="vertical-align: text-bottom;18px" width="18" /> | Vegetables | 1500010836 | `vegetables-jakob`| `ow-vegetables-jakob` | 1 <img src="./doc/icons/icon_worker.png" style="vertical-align: text-bottom;18px" width="18" />
<img src="./doc/icons/icon_flax.png" style="vertical-align: text-bottom;18px" width="18" /> | Flax | 114365 | vanilla | `ow-flax-jakob` | 1 <img src="./doc/icons/icon_worker.png" style="vertical-align: text-bottom;18px" width="18" />
<img src="./mods/olives-jakob/data/ui/jakob/icon_olives3.png" style="vertical-align: text-bottom;18px" width="18" /> | Olives | 1500010105 | `olives-jakob` | `ow-olive-oil-jakob`
<img src="./mods/olive-oil-jakob/data/ui/jakob/icon_olive_oil3.png" style="vertical-align: text-bottom;18px" width="18" />| Olive Oil | 1500011326  | `olive-oil` | `ow-olive-oil-jakob`
<img src="./doc/icons/icon_milk.png" style="vertical-align: text-bottom;18px" width="18" /> | Milk | 5385 | vanilla | `ow-cheese-jakob` | 1 <img src="./doc/icons/icon_worker.png" style="vertical-align: text-bottom;18px" width="18" />
<img src="./doc/icons/icon_cheese_16.png" style="vertical-align: text-bottom;18px" width="18" /> | Cheese | 1500010102 | `cheese-jakob` | `ow-cheese-jakob`<br/>(`New World Cities`) | 1 <img src="./doc/icons/icon_worker.png" style="vertical-align: text-bottom;18px" width="18" />
<img src="./doc/icons/icon_hemp.png" style="vertical-align: text-bottom;18px" width="18" /> | Hemp | 1440224 | `hemp-jakob` | `ow-hemp-jakob`<br/>(`New Horizons`, Asia)
<img src="./doc/icons/icon_rope.png" style="vertical-align: text-bottom;18px" width="18" /> | Ropes | 1500010825 | `ropes-jakob` | `ow-ropes-jakob` | 500 <img src="./doc/icons/icon_worker.png" style="vertical-align: text-bottom;18px" width="18" />
<img src="./doc/icons/icon_tools.png" style="vertical-align: text-bottom;18px" width="18" /> | Tools | 1500010153 | `tools-jakob` | `ow-tools-jakob` | 900 <img src="./doc/icons/icon_artisan.png" style="vertical-align: text-bottom;18px" width="18" />
<img src="./doc/icons/icon_fish_16.png" style="vertical-align: text-bottom;18px" width="18" /> | Sardines | 1500010120 | `sardines-jakob` | (`ow-sardines-jakob`) | 900 <img src="./doc/icons/icon_artisan.png" style="vertical-align: text-bottom;18px" width="18" />
<img src="./doc/icons/icon_linen.png" style="vertical-align: text-bottom;18px" width="18" /> | Linen | 114391 | vanilla | `ow-linen-jakob`
<img src="./mods/suits-jakob/data/ui/jakob/icon_suits.png" style="vertical-align: text-bottom;18px" width="18" /> | Suits | 1500010127 | `suits-jakob` | (`ow-suits-jakob`) | 900 <img src="./doc/icons/icon_artisan.png" style="vertical-align: text-bottom;18px" width="18" />
<img src="./doc/icons/icon_herbs.png" style="vertical-align: text-bottom;18px" width="18" /> | Herbs | 5383 | vanilla | `ow-herbs-jakob`<br/>(`shared_herb_garden_kurila`)<br>*compatible, differ in fertility*
<img src="./mods/tea-jakob/data/ui/jakob/icon_tea.png" style="vertical-align: text-bottom;18px" width="18" /> | Tea | 1500010847 | `tea-jakob` | (`ow-tea-jakob`) | 900 <img src="./doc/icons/icon_artisan.png" style="vertical-align: text-bottom;18px" width="18" />

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
