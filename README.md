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
  "https://github.com/jakobharder/anno1800-shared-mods/releases/download/v3.1/shared-ground-textures-city-jakob.zip",
  "https://github.com/jakobharder/anno1800-shared-mods/releases/download/v3.1/shared-ground-textures-industry-jakob.zip"
]
```

## Shared Products

Contains products with definition, icon and Docklands information.

Icon | GUID | Name | Production Unlock
---|---|---|---
<img src="./mods/shared-products/data/products/vegetables/icon_vegetables.png" width="20" /> | 1500010836 | Vegetables | 400 Workers
<img src="./doc/icon_fish_16.png" width="20" /> | 1500010120 | Canned Fish | 900 Artisans
<img src="./doc/icon_cheese_16.png" width="20" /> | 1500010102 | Cheese | 900 Artisans
<img src="./doc/icon_tools_16.png" width="20" /> | 1500010153 | Tools | 900 Artisans
<img src="./doc/icon_hemp_16.png" width="20" /> | 1440224 | Hemp | 1500 Artisans / 1 Engineer
<img src="./mods/shared-products/data/products/suits/icon_suits.png" width="20" /> | 1500010127 | Suits | 1500 Artisans / 1 Engineer
<img src="./mods/shared-products/data/products/tea/icon_tea.png" width="20" /> | 1500010847 | Tea | 400 Engineers

### Use Products in your Mod

Add the following dependencies to your `modinfo.json`:
```json
"ModDependencies": [
  "https://github.com/jakobharder/anno1800-shared-mods/releases/download/v3.1/shared-products-jakob.zip"
]
```

Products are not unlocked automatically, but with their production mods - mainly provided by `[Addon] Industrial Cities` and `[Addon] Pescatarians`.
You need to unlock them yourself, if you use the products without those.

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
