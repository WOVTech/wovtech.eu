#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Pridávam Twitter Card a Open Graph na všetky HTML súbory...\n');

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

function extractPageInfo(content, filePath) {
  // Extract title
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  const title = titleMatch ? titleMatch[1] : 'WOV Tech';

  // Extract description
  const descMatch = content.match(/<meta name="description" content="([^"]+)"/);
  const description = descMatch ? descMatch[1] : 'WOV Tech s. r. o. - IT infraštruktúra';

  // Get URL from canonical or construct it
  let url = 'https://test.wovtech.sk/';
  const canonicalMatch = content.match(/<link rel="canonical" href="([^"]+)"/);
  if (canonicalMatch) {
    url = canonicalMatch[1];
  }

  return { title, description, url };
}

function addOpenGraphAndTwitter(content, pageInfo) {
  // Check if og:image already exists
  if (content.includes('og:image')) {
    return content; // Already has OG tags
  }

  const ogTags = `  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="${pageInfo.title.replace(/"/g, '&quot;')}" />
  <meta property="og:description" content="${pageInfo.description.replace(/"/g, '&quot;')}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${pageInfo.url}" />
  <meta property="og:image" content="https://test.wovtech.sk/assets/img/logo-full.png" />
  <meta property="og:image:width" content="800" />
  <meta property="og:image:height" content="412" />

  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${pageInfo.title.replace(/"/g, '&quot;')}" />
  <meta name="twitter:description" content="${pageInfo.description.replace(/"/g, '&quot;')}" />
  <meta name="twitter:image" content="https://test.wovtech.sk/assets/img/logo-full.png" />`;

  // Insert after canonical link
  const finalContent = content.replace(
    /(<link rel="canonical" href="[^"]*" \/>)/,
    `$1\n\n${ogTags}`
  );

  return finalContent;
}

const htmlFiles = findHtmlFiles('.');
let updated = 0;
let skipped = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  
  if (!content.includes('og:image')) {
    const pageInfo = extractPageInfo(content, file);
    const newContent = addOpenGraphAndTwitter(content, pageInfo);
    fs.writeFileSync(file, newContent);
    updated++;
    console.log(`✅ ${path.relative('.', file)}`);
  } else {
    skipped++;
  }
});

console.log(`\n✨ Aktualizované ${updated} súborov, preskočené ${skipped} (už majú tagy)`);
