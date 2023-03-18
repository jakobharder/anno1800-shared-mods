# Shared Extra Goods

Commonly used goods across mods.

You are free to share and depend on this mod.

Only products mentioned in `PopulationInputs/Item/Product` in all mods loaded before `[Shared] Extra Goods` will be shown in the construction menu.

Contributions are welcome: see [Contribution Guide](#contribution-guide)

## Products

Icon | GUID | Name | Production Unlock
---|---|---|---
<img src="./shared/products/vegetables/icon_vegetables.png" width="16" /> | 1500010836 | Vegetables | 400 Workers
<img src="./doc/icon_fish_16.png" width="16" /> | 1500010120 | Canned Fish | 900 Artisans
<img src="./doc/icon_cheese_16.png" width="16" /> | 1500010102 | Cheese | 900 Artisans
<img src="./shared/products/olive-soap/icon_olive_soap.png" width="16" /> | 1500010106 | Olive Soap | 900 Artisans
<img src="./shared/products/pickled-vegetables/icon_vegetables.png" width="16" /> | 1500010831 | Pickled Vegetables | 900 Artisans
<img src="./doc/icon_tools_16.png" width="16" /> | 1500010153 | Tools | 900 Artisans
<img src="./doc/icon_rope_16.png" width="16" /> | 1500010825 | Ropes | TBD
<img src="./doc/icon_hemp_16.png" width="16" /> | 1440224 | Hemp | 1500 Artisans / 1 Engineer
<img src="./shared/products/suits/icon_suits.png" width="16" /> | 1500010127 | Suits | 1500 Artisans / 1 Engineer
<img src="./shared/products/tea/icon_tea.png" width="16" /> | 1500010847 | Tea | 400 Engineers

## Contribution Guide

- Make sure products are only shown when used in mods. Ask for help if you don't know how to do that.
- Balancing of factories should match vanilla.
- Don't use DLC Cfgs - except if the product itself is from that DLC.
- Try to keep the factory model, texture sizes small. Re-use from the game if possible.
- Prefer to use shared ground textures instead of custom decals

## How to Build

### Build with Visual Studio Code plugin

The mods are made with the [Modding Tools for Anno](https://marketplace.visualstudio.com/items?itemName=JakobHarder.anno-modding-tools) extension for [VS Code](https://code.visualstudio.com/).

Make sure to set `annoMods` settings.

Install the plugin, open a mod folder and press `F1` and choose `Build Anno Mod`.

### Build with Node.js

Run the following commands:

```
npm install .
npm run build
npm run package
```
