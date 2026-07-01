const fs = require('fs');
const path = require('path');
const projectRoot = process.cwd();
const srcDir = path.join(projectRoot, 'src');
function getAllFiles(dir, exts) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, exts));
    } else {
      if (exts.includes(path.extname(file))) results.push(filePath);
    }
  });
  return results;
}
const files = getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
const importMap = {};
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const imports = [];
  const regex = /import\s+(?:[^'\"]+\s+from\s+)?[\'\"]([^\'\"]+)[\'\"]/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    let imp = m[1];
    if (imp.startsWith('.')) {
      const resolved = path.resolve(path.dirname(f), imp);
      const candidates = [resolved+'.js', resolved+'.jsx', resolved+'.ts', resolved+'.tsx', resolved+'.json', resolved];
      for (const c of candidates) {
        if (fs.existsSync(c) && fs.statSync(c).isFile()) {
          imports.push(c);
          break;
        }
      }
    }
  }
  importMap[f] = imports;
});
const entryPoints = [path.join(srcDir,'main.jsx'), path.join(srcDir,'App.jsx')];
const visited = new Set();
function dfs(file) {
  if (visited.has(file)) return;
  visited.add(file);
  const deps = importMap[file] || [];
  deps.forEach(dfs);
}
entryPoints.forEach(dfs);
const unused = files.filter(f => !visited.has(f));
console.log('UNUSED_FILES_START');
unused.forEach(f => console.log(path.relative(projectRoot, f)));
console.log('UNUSED_FILES_END');
