import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const sourceFiles = findFiles(path.join(__dirname, 'src'), ['.js', '.jsx', '.ts', '.tsx']);

const importRegex = /import\s+(?:.*?\s+from\s+)?['"]([^'"]+)['"]/g;
const requireRegex = /(?:import|require)\s*\(\s*['"]([^'"]+)['"]\s*\)/g;
const exportRegex = /export\s+(?:.*?\s+from\s+)?['"]([^'"]+)['"]/g;

const errors = [];

function checkImport(filePath, importPath) {
  if (importPath.startsWith('.')) {
    const dir = path.dirname(filePath);
    let target = path.join(dir, importPath);
    
    // Sometimes imports lack extensions.
    // Let's resolve the exact file it points to.
    let resolvedFilename = null;
    const extensions = ['', '.js', '.jsx', '.ts', '.tsx', '/index.js', '/index.jsx', '/index.ts', '/index.tsx'];
    
    for (const ext of extensions) {
      if (fs.existsSync(target + ext)) {
        resolvedFilename = target + ext;
        break;
      }
    }
    
    if (resolvedFilename) {
      try {
         const realPath = fs.realpathSync.native(resolvedFilename);
         // compare the substring
         // we only care about the parts matching the relative import
         // An easy way is to check the case of the filename and folders within the src dir
         const relativeResolved = path.relative(__dirname, resolvedFilename);
         const relativeReal = path.relative(__dirname, realPath);
         
         if (relativeResolved !== relativeReal) {
             errors.push({
                 file: filePath,
                 importPath: importPath,
                 resolved: relativeResolved,
                 realExpected: relativeReal
             });
         }
      } catch(e) {
         // Should not happen since we check existsSync
      }
    }
  }
}

for (const file of sourceFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    checkImport(file, match[1]);
  }
  while ((match = requireRegex.exec(content)) !== null) {
    checkImport(file, match[1]);
  }
  while ((match = exportRegex.exec(content)) !== null) {
    checkImport(file, match[1]);
  }
}

console.log(JSON.stringify(errors, null, 2));
