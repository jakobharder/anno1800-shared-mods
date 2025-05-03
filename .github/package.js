const child_process = require('child_process');
const fs = require('fs');
const glob = require('glob');
const path = require('path');

const mods = glob.sync("./out/*/modinfo.json");
// package individual mods
mods.forEach(mod => {
  const package = path.basename(path.dirname(mod));
  const modinfo = JSON.parse(fs.readFileSync(mod, 'utf8'));
  const zipName = modinfo.ModID;

  child_process.execFileSync('tar', [
    '-c', '-a',
    '-f', `out/${zipName}.zip`,
    '-C', 'out/', `${package}`
  ]);
});
