const fs = require('fs');
const path = require('path');
const { builtinModules } = require('module');

function findFiles(dir, exts, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findFiles(fullPath, exts, fileList);
    } else {
      if (exts.some(ext => file.endsWith(ext))) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

// Function to get the real case-sensitive path
function getExactCasePath(targetPath) {
  const parts = targetPath.split(path.sep);
  let current = path.parse(targetPath).root;
  // skip root
  parts.shift();
  if (parts.length > 0 && parts[0] === '') parts.shift();
  
  for (const part of parts) {
    if (!fs.existsSync(current)) return null;
    const items = fs.readdirSync(current);
    const exactMatch = items.find(item => item.toLowerCase() === part.toLowerCase());
    if (exactMatch) {
      if (exactMatch !== part) {
         return false; // Found but case mismatch
      }
      current = path.join(current, exactMatch);
    } else {
      // not found (could be an external module)
      return null; 
    }
  }
  return true; // Match
}

const sourceFiles = findFiles(path.join(__dirname, 'src'), ['.js', '.jsx', '.ts', '.tsx']);

const importRegex = /from\s+['"]([^'"]+)['"]/g;
const dynamicImportRegex = /import\s*\(\s*['"]([^'"]+)['"]\s*\)/g;

let errors = [];

function checkImport(filePath, importPath) {
  if (importPath.startsWith('.')) {
    const dir = path.dirname(filePath);
    let target = path.join(dir, importPath);
    // the target might be a file without extension or a directory
    
    // We need to check exact case of the target string
    // Let's get the absolute path and walk it from root.
    
    const parts = target.split(path.sep);
    let current = path.parse(target).root;
    let index = 1; // skip root
    
    // Quick and dirty manual walk
    let fullResolved = target;
    // let's try to resolve it using require.resolve
    try {
        fullResolved = require.resolve(target, { paths: [dir] });
    } catch(e) {
        // ignore missing modules, maybe aliases
        return;
    }
    
    // now we have a resolved path. let's check if the casing of the resolved path
    // matches the casing of the required string components.
    // Actually, on Windows, require.resolve keeps the original casing of the path parts that were provided!
    // So we need to match the file system.
    
    const realPathParts = fullResolved.split(path.sep);
    let fsPath = realPathParts[0] + '\\';
    for(let i = 1; i < realPathParts.length; i++) {
        const expected = realPathParts[i];
        if (!fs.existsSync(fsPath)) break;
        const actuals = fs.readdirSync(fsPath);
        const actual = actuals.find(a => a.toLowerCase() === expected.toLowerCase());
        if (actual && actual !== expected) {
            errors.push({
                file: filePath,
                importPath: importPath,
                expected: expected,
                actualFs: actual,
                fullResolved: fullResolved,
                wrongPartInImport: expected
            });
            break;
        }
        fsPath = path.join(fsPath, actual || expected);
    }
  }
}

for (const file of sourceFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    checkImport(file, match[1]);
  }
  while ((match = dynamicImportRegex.exec(content)) !== null) {
     checkImport(file, match[1]);
  }
}

console.log(JSON.stringify(errors, null, 2));
