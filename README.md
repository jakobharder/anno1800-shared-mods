# Shared Anno 1800 Mods

<style>
  img.icon {
    vertical-align: text-bottom;
    width: 18px;
  }
</style>

Shared mods from Jakob's Collection.

You are free to include ground textures and shared products, as long as you don't modify the mods themselves.

You may add additional unlocks, but please don't change balancing if that's not the theme of your mod (e.g. rebalance together with vanilla rebalance is OK).

## Shared Products

ID: `shared-products-jakob`

Contains products with definition, icon and Docklands information.

Icon | GUID | Name | Region | Production Mod
---|---|---|---|---
<img src="./mods/shared-products-jakob/data/ui/jakob/icon_vegetables.png" class="icon" width="18" /> | 1500010836 | Vegetables | OW | `production-vegetables-jakob`
<img src="./mods/shared-products-jakob/data/ui/jakob/icon_olives2.png" class="icon" width="18" /> | 1500010105 | Olives | OW | `production-olive-oil-jakob`
<img src="./mods/shared-products-jakob/data/ui/jakob/icon_olive_oil2.png" class="icon" width="18" /> | 1500011326 | Olive Oil | OW | `production-olive-oil-jakob`
<img src="./doc/icons/icon_milk.png" class="icon" width="18" /> | vanilla | Milk | OW | `production-cheese-jakob`
<img src="./doc/icons/icon_cheese_16.png" class="icon" width="18" /> | 1500010102 | Cheese | OW<br/>(NW) | `production-cheese-jakob`<br/>(`New World Cities`)
<img src="./doc/icons/icon_tools_16.png" class="icon" width="18" /> | 1500010153 | Tools | OW
<img src="./doc/icons/icon_fish_16.png" class="icon" width="18" /> | 1500010120 | Sardines | OW<br/>NW
<img src="./doc/icons/icon_hemp.png" class="icon" width="18" /> | 1440224 | Hemp | OW<br/>(Asia) | `production-hemp-jakob`<br/>(`New Horizons`)
<img src="./doc/icons/icon_rope_16.png" class="icon" width="18" /> | 1500010825 | Ropes
<img src="./mods/shared-products-jakob/data/ui/jakob/icon_suits.png" class="icon" width="18" /> | 1500010127 | Suits | OW | `production-suits-jakob`
<img src="./doc/icons/icon_herbs.png" class="icon" width="18" /> | vanilla | Herbs | OW
<img src="./mods/shared-products-jakob/data/ui/jakob/icon_tea.png" class="icon" width="18" /> | 1500010847 | Tea | OW

### Use Products in your Mod

Add the following dependencies to your `modinfo.json`:
```json
"ModDependencies": [
  "https://github.com/jakobharder/anno1800-shared-mods/releases/download/v3.5.1/shared-products-jakob.zip"
]
```

Products are not unlocked automatically, but with their production mods - mainly provided by `[Addon] Industrial Cities` and `[Addon] Pescatarians`.
You need to unlock them yourself, if you use the products without those.

## Ground Textures

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
Any 1 | <img src="./doc/icons/icon_potatoes.png" class="icon" width="18" /> <img src="./doc/icons/icon_grain.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_vegetables.png" class="icon" width="18" /> | <img src="./doc/icons/icon_red_pepper.png" class="icon" width="18" /> <img src="./doc/icons/icon_hemp.png" class="icon" width="18" /> | <img src="./doc/icons/icon_niter.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_olives2.png" class="icon" width="18" />
Any 2 | <img src="./doc/icons/icon_potatoes.png" class="icon" width="18" /> <img src="./doc/icons/icon_grain.png" class="icon" width="18" /> <img src="./doc/icons/icon_hemp.png" class="icon" width="18" /> | <img src="./doc/icons/icon_niter.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_olives2.png" class="icon" width="18" /> | <img src="./doc/icons/icon_grapes.png" class="icon" width="18" /> <img src="./doc/icons/icon_herbs.png" class="icon" width="18" />
Any 3 | <img src="./doc/icons/icon_potatoes.png" class="icon" width="18" /> <img src="./doc/icons/icon_grain.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_olives2.png" class="icon" width="18" /> | <img src="./doc/icons/icon_grapes.png" class="icon" width="18" /> <img src="./doc/icons/icon_hemp.png" class="icon" width="18" /> | <img src="./doc/icons/icon_red_pepper.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_vegetables.png" class="icon" width="18" />
Any 4 | <img src="./doc/icons/icon_potatoes.png" class="icon" width="18" /> <img src="./doc/icons/icon_grain.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_vegetables.png" class="icon" width="18" /> | <img src="./doc/icons/icon_fur.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_olives2.png" class="icon" width="18" /> | <img src="./doc/icons/icon_hops.png" class="icon" width="18" /> <img src="./doc/icons/icon_herbs.png" class="icon" width="18" />
Any 5 | <img src="./doc/icons/icon_potatoes.png" class="icon" width="18" /> <img src="./doc/icons/icon_red_pepper.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_olives2.png" class="icon" width="18" /> | <img src="./doc/icons/icon_potatoes.png" class="icon" width="18" /> <img src="./doc/icons/icon_hemp.png" class="icon" width="18" /> | <img src="./doc/icons/icon_fur.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_vegetables.png" class="icon" width="18" />
Any 6 | <img src="./doc/icons/icon_potatoes.png" class="icon" width="18" /> <img src="./doc/icons/icon_red_pepper.png" class="icon" width="18" /> <img src="./doc/icons/icon_hemp.png" class="icon" width="18" /> | <img src="./doc/icons/icon_grain.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_vegetables.png" class="icon" width="18" /> | <img src="./doc/icons/icon_fur.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_olives2.png" class="icon" width="18" />
Non-starter 7 | <img src="./doc/icons/icon_hops.png" class="icon" width="18" /> <img src="./doc/icons/icon_niter.png" class="icon" width="18" /> <img src="./doc/icons/icon_herbs.png" class="icon" width="18" /> | <img src="./doc/icons/icon_potatoes.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_olives2.png" class="icon" width="18" /> | <img src="./doc/icons/icon_grain.png" class="icon" width="18" /> <img src="./doc/icons/icon_hemp.png" class="icon" width="18" />
Non-starter 8 | <img src="./doc/icons/icon_hops.png" class="icon" width="18" /> <img src="./doc/icons/icon_grapes.png" class="icon" width="18" /> <img src="./doc/icons/icon_hemp.png" class="icon" width="18" /> | <img src="./doc/icons/icon_red_pepper.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_vegetables.png" class="icon" width="18" /> | <img src="./doc/icons/icon_potatoes.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_olives2.png" class="icon" width="18" />
Non-starter 9 | <img src="./doc/icons/icon_fur.png" class="icon" width="18" /> <img src="./doc/icons/icon_red_pepper.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_vegetables.png" class="icon" width="18" /> | <img src="./doc/icons/icon_hops.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_olives2.png" class="icon" width="18" /> | <img src="./doc/icons/icon_potatoes.png" class="icon" width="18" /> <img src="./doc/icons/icon_hemp.png" class="icon" width="18" />
Non-starter 10 | <img src="./doc/icons/icon_fur.png" class="icon" width="18" /> <img src="./doc/icons/icon_niter.png" class="icon" width="18" /> <img src="./doc/icons/icon_herbs.png" class="icon" width="18" /> | <img src="./doc/icons/icon_hops.png" class="icon" width="18" /> <img src="./doc/icons/icon_hemp.png" class="icon" width="18" /> | <img src="./doc/icons/icon_grain.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_olives2.png" class="icon" width="18" />
Non-starter 11 | <img src="./doc/icons/icon_fur.png" class="icon" width="18" /> <img src="./doc/icons/icon_grapes.png" class="icon" width="18" /> <img src="./doc/icons/icon_herbs.png" class="icon" width="18" /> | <img src="./doc/icons/icon_grain.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_olives2.png" class="icon" width="18" /> | <img src="./doc/icons/icon_hops.png" class="icon" width="18" /> <img src="./mods/shared-products-jakob/data/ui/jakob/icon_vegetables.png" class="icon" width="18" />

## Production: Vegetables

ID: `production-vegetables`

Icon | GUID | Name | Unlock
---|---|---|---
<img src="./mods/shared-products-jakob/data/ui/jakob/icon_vegetables.png" class="icon" width="18" /> | 1500010836<br/>1500010830 | Vegetables<br/>Vegetable Farm | 400 <img src="./doc/icons/icon_worker.png" class="icon" width="18" />

## Production: Olives and Olive Oil

ID: `production-olive-oil`

Contains products and production chains.
Soap is an alternative production chain to produce vanilla soap.

Icon | GUID | Name | Unlock | Chain
---|---|---|---|---
<img src="./mods/production-olive-oil-jakob/data/ui/jakob/icon_olives.png" class="icon" width="18" /> | 1500010105<br/>1500010107 | Olives<br/>Olive Grove | 400 <img src="./doc/icons/icon_worker.png" class="icon" width="18" />
<img src="./mods/production-olive-oil-jakob/data/ui/jakob/icon_olive_oil.png" class="icon" width="18" /> | 1500011326<br/>1500011325 | Olive Oil<br/>Olive Oil Press | 400 <img src="./doc/icons/icon_worker.png" class="icon" width="18" />
<img src="./mods/production-olive-oil-jakob/data/ui/jakob/icon_olive_soap.png" class="icon" width="18" /> | TBD | Olive Soap Factory | 800 <img src="./doc/icons/icon_artisan.png" class="icon" width="18" /> | <img src="./mods/production-olive-oil-jakob/data/ui/jakob/icon_olives.png" class="icon" width="18" /> → <img src="./mods/production-olive-oil-jakob/data/ui/jakob/icon_olive_oil.png" class="icon" width="18" /> → <img src="./mods/production-olive-oil-jakob/data/ui/jakob/icon_olive_soap.png" class="icon" width="18" />

## Production: Sardines

ID: `production-sardines`
Requires: `production-olive-oil`

Icon | GUID | Name | Unlock | Chain
---|---|---|---|---
<img src="./doc/icons/icon_fish_16.png" class="icon" width="18" /> | 1500010120<br/>1500010121 | Sardines<br/>Fish Cannery | 800 <img src="./doc/icons/icon_artisan.png" class="icon" width="18" /> | <img src="./mods/production-olive-oil-jakob/data/ui/jakob/icon_olives.png" class="icon" width="18" /> → <img src="./mods/production-olive-oil-jakob/data/ui/jakob/icon_olive_oil.png" class="icon" width="18" /> + <img src="./doc/icons/icon_fish.png" class="icon" width="18" /> + <img src="./doc/icons/icon_iron.png" class="icon" width="18" /> → <img src="./doc/icons/icon_fish_16.png" class="icon" width="18" />

## Production: Hemp

ID: `production-hemp`

Icon | GUID | Name | Unlock
---|---|---|---
<img src="./doc/icons/icon_hemp.png" class="icon" width="18" /> | 1500010105<br/>1500010107 | Hemp<br/>Hemp Farm | 800 <img src="./doc/icons/icon_artisan.png" class="icon" width="18" />
<img src="./doc/icons/icon_linen.png" class="icon" width="18" /> | vanilla<br/>1500011325 | Linen<br/>Linen Cloth Maker | 800 <img src="./doc/icons/icon_artisan.png" class="icon" width="18" />
<img src="./doc/icons/icon_rope_16.png" class="icon" width="18" /> | 1500010825 | Ropes

## Production: Suits

ID: `production-suits`
Requires: `production-hemp`

Icon | GUID | Name | Unlock | Chain
---|---|---|---|---
<img src="./mods/shared-products-jakob/data/ui/jakob/icon_suits.png" class="icon" width="18" /> | 1500010127<br/>1500011150 | Suits<br/>Suits Factory | 800 <img src="./doc/icons/icon_artisan.png" class="icon" width="18" /> | <img src="./doc/icons/icon_hemp.png" class="icon" width="18" /> → <img src="./doc/icons/icon_linen.png" class="icon" width="18" /> → <img src="./mods/shared-products-jakob/data/ui/jakob/icon_suits.png" class="icon" width="18" />

## Changes

### 3.5

- Added Tea to all drinks production

### 3.4

- Added more darken props in Ground Textures Industry
- Updated Korean translation

### 3.3

- Rebalanced unlocks
- Renamed canned fish to sardines

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
