#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
process.chdir(projectRoot);

console.log('🔍 Aktualizujem SEO metadata na všetkých HTML súboroch...\n');

// Konfigurácia strán
const pagesConfig = {
  'index.html': {
    title: 'WOV Tech s. r. o. | IT infraštruktúra pre malé, stredné a veľké firmy',
    description: 'Pomáhame malým, stredným a veľkým firmám získať prehľadnú, stabilnú a bezpečnú IT infraštruktúru. Cloud, monitoring, zálohovanie, návrh a stabilizácia IT prostredia.',
    keywords: 'IT infraštruktúra, cloud AWS Azure, monitoring, zálohovanie, DNS DHCP, NTP, IT konzultácia'
  },
  'sluzby/index.html': {
    title: 'Služby | WOV Tech',
    description: 'Pomáhame malým, stredným a veľkým firmám s návrhom a stabilizáciou IT infraštruktúry. Cloud AWS/Azure/GCP, DNS, DHCP, NTP, monitoring, log manažment, zálohovanie a obnova.',
    keywords: 'IT služby, návrh infraštruktúry, cloud, monitoring, zálohy, DNS DHCP, log manažment'
  },
  'kontakt.html': {
    title: 'Kontakt | WOV Tech',
    description: 'Kontaktujte WOV Tech s. r. o. Pomáhame malým, stredným a veľkým firmám s návrhom a stabilizáciou IT infraštruktúry. E-mail, telefón a kontaktný formulár.',
    keywords: 'kontakt WOV Tech, IT konzultácia, kontaktný formulár, support'
  },
  'sluzby/navrh-infrastruktury.html': {
    title: 'Návrh IT infraštruktúry | WOV Tech',
    description: 'Pomáhame malým, stredným a veľkým firmám navrhnúť prehľadnú, stabilnú a bezpečnú IT infraštruktúru.',
    keywords: 'návrh IT infraštruktúry, IT konzultácia, stabilnú IT, bezpečnú IT, IT systém'
  },
  '404.html': {
    title: '404 - Stránka nenájdená | WOV Tech',
    description: 'Oops! Hľadaná stránka neexistuje. Vráťte sa na domovskú stránku.',
    keywords: 'chyba 404, stránka nenájdená'
  },
  'ochrana-osobnych-udajov.html': {
    title: 'Ochrana osobných údajov | WOV Tech',
    description: 'Informácie o ochrane osobných údajov pri používaní webu WOV Tech.',
    keywords: 'ochrana údajov, GDPR, privacy policy',
    noIndex: false
  },
  'obchodne-podmienky.html': {
    title: 'Obchodné podmienky | WOV Tech',
    description: 'Obchodné podmienky použitia služieb WOV Tech s. r. o.',
    keywords: 'obchodné podmienky, terms of service'
  }
};

// Twitter Card template
const twitterCardTemplate = `  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="TITLE_PLACEHOLDER" />
  <meta name="twitter:description" content="DESCRIPTION_PLACEHOLDER" />
  <meta name="twitter:image" content="https://test.wovtech.sk/assets/img/logo-full.png" />`;

// OpenGraph template
const ogTemplate = `  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="TITLE_PLACEHOLDER" />
  <meta property="og:description" content="DESCRIPTION_PLACEHOLDER" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="URL_PLACEHOLDER" />
  <meta property="og:image" content="https://test.wovtech.sk/assets/img/logo-full.png" />
  <meta property="og:image:width" content="800" />
  <meta property="og:image:height" content="412" />`;

function updateMetadata(filePath, config) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative('.', filePath).replace(/\\/g, '/');
  const baseUrl = 'https://test.wovtech.sk/';
  const fileUrl = baseUrl + relativePath;

  // Update meta description
  content = content.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${config.description}" />`
  );

  // Add meta keywords if not exists
  if (!content.includes('name="keywords"')) {
    content = content.replace(
      /(<meta name="description" content="[^"]*" \/>)/,
      `$1\n  <meta name="keywords" content="${config.keywords}" />`
    );
  }

  // Update meta robots (remove noarchive)
  content = content.replace(
    /meta name="robots" content="[^"]*"/,
    'meta name="robots" content="index, follow"'
  );

  // Update OG tags
  const ogDone = content.includes('og:image');
  if (ogDone) {
    content = content.replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${config.title}" />`
    );
    content = content.replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${config.description}" />`
    );
    content = content.replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${fileUrl}" />`
    );
  }

  // Add Twitter Card if not exists
  if (!content.includes('twitter:card')) {
    const twitterCard = twitterCardTemplate
      .replace('TITLE_PLACEHOLDER', config.title)
      .replace('DESCRIPTION_PLACEHOLDER', config.description);
    content = content.replace(
      /(<link rel="canonical" href="[^"]*" \/>)/,
      `$1\n\n${twitterCard.replace(/<\!--.*?-->/g, '')}`
    );
  }

  fs.writeFileSync(filePath, content);
}

// Find all HTML files
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

htmlFiles.forEach(file => {
  const relativePath = path.relative('.', file).replace(/\\/g, '/');
  if (pagesConfig[relativePath]) {
    try {
      updateMetadata(file, pagesConfig[relativePath]);
      updated++;
      console.log(`✅ ${relativePath}`);
    } catch (error) {
      console.log(`❌ ${relativePath}: ${error.message}`);
    }
  }
});

console.log(`\n✨ Aktualizované ${updated} súborov!`);
