#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
process.chdir(projectRoot);

console.log('🧹 Odstraňujem duplikátne meta tagy...\n');

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

function removeDuplicates(content) {
  // Remove duplicate og:title tags (keep only first)
  const lines = content.split('\n');
  const seen = new Set();
  const result = [];

  for (const line of lines) {
    // Check for duplicate og: properties
    const ogMatch = line.match(/property="og:([^"]+)"/);
    const twitterMatch = line.match(/name="twitter:([^"]+)"/);
    
    if (ogMatch) {
      const key = `og:${ogMatch[1]}`;
      if (seen.has(key)) {
        continue; // Skip duplicate
      }
      seen.add(key);
    } else if (twitterMatch) {
      const key = `twitter:${twitterMatch[1]}`;
      if (seen.has(key)) {
        continue; // Skip duplicate
      }
      seen.add(key);
    }
    
    result.push(line);
  }

  // Join and clean up extra blank lines
  return result.join('\n').replace(/\n\n\n+/g, '\n\n');
}

const htmlFiles = findHtmlFiles('.');
let fixed = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const cleaned = removeDuplicates(content);
  
  if (content !== cleaned) {
    fs.writeFileSync(file, cleaned);
    fixed++;
    console.log(`✅ ${path.relative('.', file)}`);
  }
});

console.log(`\n✨ Opravené ${fixed} súborov`);
