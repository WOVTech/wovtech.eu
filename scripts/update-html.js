#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
process.chdir(projectRoot);

console.log('🔧 Aktualizujem HTML súbory na WebP optimalizáciu...\n');

// Minimálny glob fallback ak nie je dostupný
const findHtmlFiles = () => {
  const files = [];
  function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory() && !file.startsWith('.')) {
        walk(filePath);
      } else if (file.endsWith('.html')) {
        files.push(filePath);
      }
    });
  }
  walk('.');
  return files;
};

const htmlFiles = findHtmlFiles();
console.log(`📄 Nájdeno ${htmlFiles.length} HTML súborov\n`);

let updated = 0;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let modified = false;

  // Pridať WebP CSS (ak nie je)
  if (!content.includes('/assets/css/webp.css')) {
    content = content.replace(
      /(<link rel="stylesheet" href="\/assets\/css\/styles\.min\.css" \/>)/,
      '$1\n  <link rel="stylesheet" href="/assets/css/webp.css" />'
    );
    modified = true;
  }

  // Pridať WebP detekciu script (ak nie je)
  if (!content.includes('/assets/js/webp-detect.js')) {
    content = content.replace(
      /(<body[^>]*>)/,
      '$1\n  <script src="/assets/js/webp-detect.js"><\/script>'
    );
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content);
    updated++;
    console.log(`✅ ${path.relative('.', file)}`);
  }
});

console.log(`\n✨ Aktualizované ${updated} súborov!`);
