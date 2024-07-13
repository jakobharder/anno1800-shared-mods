const child_process = require('child_process');
const fs = require('fs');
const glob = require('glob');
const path = require('path');

const extraGoods = '[Shared] Extra Goods (Jakob)';

const mods = glob.sync("./out/*/modinfo.json")
  .map(modinfoPath => path.basename(path.dirname(modinfoPath)))
  .filter(mod => mod !== extraGoods);

// package individual mods
mods.forEach(mod => {
  const zipName = mod
    .replace(/\s/g, '-')
    .replace(/\[|\]|\(|\)/g, '')
    .toLowerCase()
    .replace('product-', '')
    .replace('production-', '')
    .replace('shared-', '');

  child_process.execFileSync('tar', [
    '-c', '-a',
    '-f', `out/${zipName}.zip`,
    '-C', 'out/', `${mod}`
  ]);
});

// //  move mods
// mods.forEach(mod => {
//   const modBuildFolder = path.join('out', mod);
//   const modTargetFolder = path.join('out', extraGoods, mod);
//   if (fs.existsSync(modBuildFolder)) {
//     if (fs.existsSync(modTargetFolder)) {
//       fs.rmSync(modTargetFolder, { recursive: true });
//     }
//     fs.renameSync(modBuildFolder, modTargetFolder);
//   }
// });

// // package collection
// const modinfo = JSON.parse(fs.readFileSync(path.join('./out', extraGoods, 'modinfo.json')));
// child_process.execFileSync('tar', [
//   '-c', '-a',
//   '-f', `out/Shared-Extra-Goods-${modinfo.Version}.zip`,
//   '-C', 'out/', `${extraGoods}`,
//   ...mods.map(mod => `${path.join(extraGoods, mod)}`)
// ]);
