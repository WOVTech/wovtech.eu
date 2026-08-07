#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
process.chdir(projectRoot);

console.log('🏷️ Pridávam keywords meta tagy na všetky HTML súbory...\n');

// Default keywords pre rôzne typy strán
const defaultKeywords = {
  'sluzby/': 'IT služby, cloud, monitoring, zálohovanie, DNS DHCP, DDI IPAM, NTP, log management',
  'navrh-infrastruktury/': 'návrh infraštruktúry, IT architektúra, incident management, change management',
  'checklisty/': 'IT checklist, best practices, konfiguracia, konfigurácia infraštruktúry',
  'default': 'IT infraštruktúra, cloud, monitoring, IT konzultácia, IT služby'
};

function getKeywordsForFile(filePath) {
  for (const [key, keywords] of Object.entries(defaultKeywords)) {
    if (filePath.includes(key)) {
      return keywords;
    }
  }
  return defaultKeywords.default;
}

function addKeywordsMeta(content, keywords) {
  // Check if keywords already exist
  if (content.includes('meta name="keywords"')) {
    return content;
  }

  // Insert after description
  const updated = content.replace(
    /(<meta name="description" content="[^"]*" \/>)/,
    `$1\n  <meta name="keywords" content="${keywords}" />`
  );

  return updated;
}

function findHtmlFiles(dir) {
  const files = [];
  function walk(dirPath) {
    fs.readdirSync(dirPath).forEach(file => {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory() && !file.startsWith('.')) {
        walk(filePath);
      } else if (file.endsWith('.html')) {
        files.push(filePath);
      }
    });
  }
  walk(dir);
  return files;
}

const htmlFiles = findHtmlFiles('.');
let updated = 0;
let skipped = 0;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  if (!content.includes('meta name="keywords"')) {
    const keywords = getKeywordsForFile(file);
    content = addKeywordsMeta(content, keywords);
    fs.writeFileSync(file, content);
    updated++;
    console.log(`✅ ${path.relative('.', file)}`);
  } else {
    skipped++;
  }
});

console.log(`\n✨ Aktualizované ${updated} súborov, preskočené ${skipped}`);
