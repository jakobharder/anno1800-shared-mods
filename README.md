# Shared Anno 1800 Mods

Shared mods from Jakob's Collection.

You are free to include ground textures and shared products, as long as you don't modify the mods themselves.

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

## Production: Olives, Olive Oil and Soap

ID: `production-olive-oil`

Contains products and production chains.
Soap is an alternative production chain to produce vanilla soap.

Icon | GUID | Name | Unlock
---|---|---|---
<img src="./mods/production-olive-oil/data/ui/jakob/icon_olives.png" width="20" /> | 1500010105<br/>1500010107 | Olives<br/>Olive Grove | 400 Workers
<img src="./mods/production-olive-oil/data/ui/jakob/icon_olive_oil.png" width="20" /> | 1500011326<br/>1500011325 | Olive Oil<br/>Olive Oil Press | 400 Workers
<img src="./mods/production-olive-oil/data/ui/jakob/icon_olive_soap.png" width="20" /> | TBD | Olive Soap Factory | 900 Artisans

## Shared Products

Contains products with definition, icon and Docklands information.

Icon | GUID | Name | Production Unlock
---|---|---|---
<img src="./mods/shared-products-jakob/data/ui/jakob/icon_vegetables.png" width="20" /> | 1500010836 | Vegetables | 400 Workers
<img src="./doc/icon_cheese_16.png" width="20" /> | 1500010102 | Cheese | 1 Artisan
<img src="./doc/icon_tools_16.png" width="20" /> | 1500010153 | Tools | 250 Artisans
<img src="./mods/shared-products-jakob/data/ui/jakob/icon_tea.png" width="20" /> | 1500010847 | Tea | 800 Artisans
<img src="./doc/icon_fish_16.png" width="20" /> | 1500010120 | Sardines | 900 Artisans
<img src="./doc/icon_hemp_16.png" width="20" /> | 1440224 | Hemp | 1500 Artisans / 1 Engineer
<img src="./mods/shared-products-jakob/data/ui/jakob/icon_suits.png" width="20" /> | 1500010127 | Suits | 1500 Artisans / 1 Engineer

### Use Products in your Mod

Add the following dependencies to your `modinfo.json`:
```json
"ModDependencies": [
  "https://github.com/jakobharder/anno1800-shared-mods/releases/download/v3.5.1/shared-products-jakob.zip"
]
```

Products are not unlocked automatically, but with their production mods - mainly provided by `[Addon] Industrial Cities` and `[Addon] Pescatarians`.
You need to unlock them yourself, if you use the products without those.

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
