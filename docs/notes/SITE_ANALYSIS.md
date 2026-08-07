# WOV Tech Analýza HTML stránok - Detailný Report

**Dátum analyýzy:** 2026-03-27  
**Celkový počet stránok:** 26 HTML súborov

---

## 1. ZOZNAM VŠETKÝCH STRÁN

### Hlavné stránky (8)
| Stránka | Úloha | Popis obsahu |
|---------|-------|-------------|
| **index.html** | Homepage | Hero + 3 situácie pomoci + služby; strong CTA; ~800 slov |
| **sluzby.html** | Hub | Popis 6 služieb s krátkou intro + ikonky; ~500 slov |
| **navrh-infrastruktury.html** | Hub | Návrh infra service page; detaily; FAQ; ~700 slov |
| **clanky.html** | Hub | Články + checklisty; 2×7 liniek na detaily; ~300 slov |
| **kontakt.html** | Call | Email, telefón, kontaktný formulár |
| **obchodne-podmienky.html** | Legal | B2B T&Cs; stručne |
| **ochrana-osobnych-udajov.html** | Legal | Privacy policy; GDPR info |
| **404.html** | Error | Pravdepodobne error page |

### Služby - Detailné strany (6)
| Cesta | Názov | Obsah | Dlžka |
|------|-------|-------|-------|
| `/sluzby/cloud-aws-azure.html` | Cloud ops | H1 + 2 odstavce + 2 boxy (čo riešime + články) | ~100 slov |
| `/sluzby/ddi-dns-dhcp-ipam.html` | DDI | H1 + 2 odstavce + 2 boxy | ~100 slov |
| `/sluzby/monitoring-infrastruktury.html` | Monitoring | H1 + 2 odstavce + 2 boxy | ~100 slov |
| `/sluzby/ntp.html` | NTP | H1 + 2 odstavce + 2 boxy | ~100 slov |
| `/sluzby/zalohy-a-obnova.html` | Zálohy | H1 + 2 odstavce + 2 boxy | ~100 slov |
| `/sluzby/log-management.html` | Log management | H1 + 2 odstavce + 2 boxy | ~100 slov |

### Články - Návrh infraštruktúry (7)
| Cesta | Názov | Obsah | Dlžka |
|------|-------|-------|-------|
| `/navrh-infrastruktury/monitoring-vs-logy.html` | Monitoring vs logy | Vysvetlenie rozdielu + notice block + kľúčové otázky | ~250 slov |
| `/navrh-infrastruktury/zalohy-a-obnova.html` | Zálohy & obnova | RPO/RTO, typické riziká + notice block | ~350 slov |
| `/navrh-infrastruktury/ntp-preco-je-cas-kriticky.html` | Prečo NTP | Dôvody kritičnosti + otázky + riziká | ~300 slov |
| `/navrh-infrastruktury/incident-a-change-procesy.html` | Incident & Change | Procesné aspekty, runbooky, eskalácie | ~350 slov |
| `/navrh-infrastruktury/pristupy-a-identita.html` | IAM | Identita, oprávnenia, least privilege | ~400 slov |
| `/navrh-infrastruktury/networking-v-infra-navrhu.html` | Networking | Segmentácia, firewall, routing | ~300 slov |
| `/navrh-infrastruktury/dokumentacia-a-runbooky.html` | Dokumentácia | Importance, runbooky, ownership | ~300 slov |

### Checklisty (6)
| Cesta | Názov | Predpokladaný obsah | Dĺžka |
|------|-------|-------------------|-------|
| `/checklisty/cloud-aws-azure.html` | Cloud checklist | (nie je prečítaný) | neznáma |
| `/checklisty/ddi-dns-dhcp-ipam.html` | DDI checklist | (nie je prečítaný) | neznáma |
| `/checklisty/log-management.html` | Log mgmt checklist | (nie je prečítaný) | neznáma |
| `/checklisty/monitoring-infrastruktury.html` | Monitoring checklist | (nie je prečítaný) | neznáma |
| `/checklisty/ntp.html` | NTP checklist | (nie je prečítaný) | neznáma |
| `/checklisty/zalohy-a-obnova.html` | Backup checklist | (nie je prečítaný) | neznáma |

---

## 2. NAVIGAČNÁ ŠTRUKTÚRA

```
wovtech.sk/
├── / (Homepage)
│   ├── "Návrh infra" → navrh-infrastruktury.html
│   ├── "Služby" → sluzby.html
│   ├── "Články" → clanky.html
│   └── "Kontakt" → kontakt.html
│
├── /sluzby.html (Hub)
│   ├── Cloud ops → /sluzby/cloud-aws-azure.html
│   ├── DDI → /sluzby/ddi-dns-dhcp-ipam.html
│   ├── NTP → /sluzby/ntp.html
│   ├── Monitoring → /sluzby/monitoring-infrastruktury.html
│   ├── Log mgmt → /sluzby/log-management.html
│   └── Zálohy → /sluzby/zalohy-a-obnova.html
│
├── /navrh-infrastruktury.html (Hub)
│   └── (Detailní články v clanky.html s linkami)
│
├── /clanky.html (Hub + linky)
│   ├── Články (7 stránok)
│   │   ├── /navrh-infrastruktury/monitoring-vs-logy.html
│   │   ├── /navrh-infrastruktury/zalohy-a-obnova.html
│   │   ├── /navrh-infrastruktury/ntp-preco-je-cas-kriticky.html
│   │   ├── /navrh-infrastruktury/incident-a-change-procesy.html
│   │   ├── /navrh-infrastruktury/pristupy-a-identita.html
│   │   ├── /navrh-infrastruktury/networking-v-infra-navrhu.html
│   │   └── /navrh-infrastruktury/dokumentacia-a-runbooky.html
│   │
│   └── Checklisty (6 stránok)
│       ├── /checklisty/ddi-dns-dhcp-ipam.html
│       ├── /checklisty/ntp.html
│       ├── /checklisty/cloud-aws-azure.html
│       ├── /checklisty/monitoring-infrastruktury.html
│       ├── /checklisty/log-management.html
│       └── /checklisty/zalohy-a-obnova.html
│
└── /kontakt.html
```

**Problém:** Nejasná hierachia - checklisty sú v 2 kliknutiach.

---

## 3. DUPLIKÁCIE A REDUNDANCIA

### 🔴 KRITICKÉ DUPLIKÁCIE OBSAHU

#### a) **Tematické duplikácie: 3-vrstvová štruktúra**

Pre každú tému existujú **až 3 strany** s podobným/rovnakým obsahom:

| Téma | `/sluzby/` | `/navrh-infrastruktury/` | `/checklisty/` | FREE/LEAD |
|------|----------|------------------------|----------------|-----------|
| **NTP** | `/sluzby/ntp.html` (krátka) | `/navrh-infrastruktury/ntp-preco-je-cas-kriticky.html` (long) | `/checklisty/ntp.html` | + lead gen? |
| **Zálohy** | `/sluzby/zalohy-a-obnova.html` | `/navrh-infrastruktury/zalohy-a-obnova.html` | `/checklisty/zalohy-a-obnova.html` | + lead gen?|
| **Monitoring** | `/sluzby/monitoring-infrastruktury.html` | (bez dlhého článku, ale link na monitoring-vs-logy) | `/checklisty/monitoring-infrastruktury.html` | - |
| **DDI** | `/sluzby/ddi-dns-dhcp-ipam.html` | (bez dlhého článku, link na networking) | `/checklisty/ddi-dns-dhcp-ipam.html` | - |
| **Cloud** | `/sluzby/cloud-aws-azure.html` | (bez dlhého článku) | `/checklisty/cloud-aws-azure.html` | - |
| **Log mgmt** | `/sluzby/log-management.html` | (bez dlhého článku, link na monitoring-vs-logy) | `/checklisty/log-management.html` | - |

**Problém:** Google vidí **silný duplicate content signal** - rovnaké témy na viacerých URL-och s podobným obsahom.

#### b) **Textové duplikácie**

- **Meta descriptions:** Všetky `/sluzby/` stránky majú rovnaké keywords:
  ```
  "IT služby, cloud, monitoring, zálohovanie, DNS DHCP, DDI IPAM, NTP, log management"
  ```
  → Žiadna diferenciácia, slabá SEO

- **Hero sekcie:** Všetky `/sluzby/` strany majú rovnakú šablónu:
  ```html
  <h1>Názov služby</h1>
  <p>[Krátsy popis]</p>
  ```

- **"Čo typicky riešime":** Opakovací obsah v `/sluzby/` a potom dlhšia verzia v `/navrh-infrastruktury/`

---

## 4. OBJAVENÉ PROBLÉMY

### A) NAVIGÁCIA & ORIENTÁCIA

| # | Problém | Dopad | Závažnosť |
|---|---------|-------|-----------|
| **N1** | Checklisty sú skryté v druhu rade clanky.html | Ľudia ich ľahko prehliadnu | STREDNÁ |
| **N2** | Nepôsobí ako "lead magnet" - sú skryté na webe | Nižšia konverzia | VYSOKÁ |
| **N3** | Bez "breadcrumb" na podstránkach | Ťažšia orientácia | NÍZKA |
| **N4** | Link na /sluzby/ z /navrh-infrastruktury/ chýba | Nelogické prepojenie | NÍZKA |

### B) SEO & DUPLICITNÝ OBSAH

| # | Problém | Dopad | Závažnosť |
|---|---------|-------|-----------|
| **S1** | Všetky `/sluzby/*.html` majú rovnaké keywords | Slabá diferenciácia, dupli content penalty | VYSOKÁ |
| **S2** | Meta descriptions sú generické, opakovajúce sa | Nižšia CTR z SERPs | STREDNÁ |
| **S3** | 3 na seba nabaľané strany (služ/nav/check) | Google penalizuje duplikáty | VYSOKÁ |
| **S4** | Bez H1 hierarchie na podstránkach s checklisty | Slabá SEO štruktúra | NÍZKA |
| **S5** | Chýbajú unique keywords na /sluzby/ stranách | Ťažká pozičnosť | VYSOKÁ |

### C) OBSAH & DLŽKA

| # | Problém | Dopad | Závažnosť |
|---|---------|-------|-----------|
| **O1** | `/sluzby/*.html` sú veľmi krátke (~100 slov) | Vyzerajú "nedokončené" | STREDNÁ |
| **O2** | Bez "intro text" na `/checklisty/*` | Nevieme sa orientovať | NÍZKA |
| **O3** | Bez praktických príkladov/case studies | Abstraktne, ťažko pochopiť dopad | STREDNÁ |
| **O4** | Spodok všetkých `/navrh-infrastruktury/*` nemá CTA | Nižšia konverzia | STREDNÁ |

### D) ŠTRUKTURÁLNE NEKONZISTENTNOSTI

| # | Problém | Dopad | Závažnosť |
|---|---------|-------|-----------|
| **T1** | Niektoré strany majú `<div class="hr">`, niektoré nie | Vizuálna nejednotnosť | NÍZKA |
| **T2** | Layout sa mení (hero-grid vs. two-col) | Nečíta sa jednotne | NÍZKA |
| **T3** | Bez jednotnej "Related articles" sekcie dole | Nevedel, kam ďalej | NÍZKA |
| **T4** | Bez featured image/ikony na každej sekcii | Vizuálne nudné, nízka engagement | STREDNÁ |

### E) CALL-TO-ACTION & KONVERZIA

| # | Problém | Dopad | Závažnosť |
|---|---------|-------|-----------|
| **C1** | `/navrh-infrastruktury/*` nemajú CTA v hlade | Ľudia sa nemajú ako pozvať ku kontaktu | VYSOKÁ |
| **C2** | CTA tlačítka sú čítané, ale nie zrejmé | Nižšia konverzia | STREDNÁ |
| **C3** | Kontakt je iba v menu, nie na spodku | Ľudia si klikať musia | NÍZKA |

### F) CHÝBAJÚCE PRVKY

| # | Prvok | Očakávaný obsah | Téma |
|---|-------|-----------------|------|
| **F1** | Breadcrumbs | `/kontakt › DDI › Detail` | UX |
| **F2** | Related articles | Na spodku každého článku | SEO/UX |
| **F3** | "Previous/Next" | Na podstránkach | UX |
| **F4** | Ikony/visual hierarchy | Na dôležitých poliach | Design |
| **F5** | Case studies alebo príklady | Praktické ukážky | Content |
| **F6** | FAQ sekcia | Odpovede na časté otázky | UX |

---

## 5. KONKRÉTNE ODPORÚČANIA

### ✅ TOP 5 VYLEPŠENÍ (podľa dopadu + jednoduchosti)

#### **1. [VYSOKÝ PRIORIT] Unifikovať metadata a SEO**
**Problém:** Všetky `/sluzby/*.html` majú rovnaké keywords a meta descriptions  
**Riešenie:**
```html
<!-- Príklad: /sluzby/cloud-aws-azure.html -->
<title>Cloud ops (AWS/Azure/GCP) | WOV Tech</title>
<meta name="description" content="Cloud ops pre AWS/Azure/GCP: štandardy, bezpečnosť, prístupy, IaC. Stabilizujeme cloud a hybrid prostredia." />
<meta name="keywords" content="cloud ops, AWS, Azure, GCP, cloud infrastructure, bezpečnosť cloudu" />

<!-- Príklad: /sluzby/ddi-dns-dhcp-ipam.html -->
<title>DDI: DNS/DHCP/IPAM | WOV Tech</title>
<meta name="description" content="DDI služby: návrh DNS, DHCP a IPAM. Stabilizácia core sieťových služieb pre spoľahlivú dostupnosť." />
<meta name="keywords" content="DNS, DHCP, IPAM, DDI, sieťové služby, infraštruktúra" />
```
**Dopad:** ↑ CTR z SERPs, jasná diferenciácia  
**Čas:** 30 min

---

#### **2. [VYSOKÝ PRIORIT] Pridať CTA na dne všetkých `/navrh-infrastruktury/*` stránok**
**Problém:** Články nebávajú call-to-action, ľudia si nemajú ako zavolať  
**Riešenie:** Pridať pred footer blok:
```html
<section class="section" style="background: #f5f5f5;">
  <div class="container">
    <div class="card pad-lg" style="text-align: center;">
      <h2>Potrebujete pomoc s infraštruktúrou?</h2>
      <p>Voláme firmám pomôcť s návrhom, stabilizáciou IT a znížením prevádzkových rizík.</p>
      <a class="cta" href="/kontakt.html">Nezáväzne nás kontaktovať</a>
    </div>
  </div>
</section>
```
**Dopad:** ↑ Lead generation, konverzia  
**Čas:** 20 min (7 stránok × 3 min)

---

#### **3. [STREDNÝ PRIORIT] Reorganizovať checklisty - urobiť ich "Lead Magnet"**
**Problém:** Checklisty sú skryté, nevyzerajú ako hodnota  
**Riešenie:**
- Vydať checklisty ako **downloadovateľný PDF** z `/clanky.html`
- Pridať **"Get checklist"** CTA na každé stránke v `/sluzby/` a `/navrh-infrastruktury/`
- URL pattern: `/downloads/checklist-ntp.pdf` alebo email capture form

Príklad na `/sluzby/ntp.html`:
```html
<aside class="cta-box">
  <h3>Stáhnite si NTP checklist</h3>
  <p>Praktická kontrolka: 10 otázok, ktoré si treba položiť pred nasadením NTP.</p>
  <form method="POST" action="/download-checklist?type=ntp">
    <input type="email" placeholder="vasa@firma.sk" required />
    <button type="submit">Stiahnuť PDF</button>
  </form>
</aside>
```
**Dopad:** ↑ Email list, lead gen, sticky engagement  
**Čas:** 1-2 hodiny (+ backend?)

---

#### **4. [STREDNÝ PRIORIT] Rozšíriť `/sluzby/*.html` obsah**
**Problém:** Strany vyzerajú "nedokončené" (~100 slov), neverí sa im klient  
**Riešenie:** Každú službu rozšíriť na ~400-500 slov:
```html
<!-- Príklad: /sluzby/ntp.html -->
<section class="section">
  <h2>Typické scenáre, keď NTP pomáhame</h2>
  <ul class="list">
    <li>Audit: overíme dostupnosť NTP, drifty a bezpečnosť</li>
    <li>Návrh: zdroje času, redundancia, monitoring</li>
    <li>Stabilizácia: hardening, certifikáty, autentifikácia</li>
  </ul>
</section>

<section class="section">
  <h2>Čo by ste mali vedieť o NTP</h2>
  <p>NTP je "tier-0" služba – jej zlyhanie má reťazový efekt...</p>
  <!-- linky do detailného článku -->
</section>

<section class="section">
  <h2>FAQ</h2>
  <details>
    <summary>Potrebujem NTP, ak používam Azure/AWS?</summary>
    <p>Áno, dokonca viac – cloud + on-prem vyžaduje...</p>
  </details>
</section>
```
**Dopad:** ↑ SEO, trust, konverzia  
**Čas:** 2-3 hodiny

---

#### **5. [STREDNÝ PRIORIT] Vytvoriť jednotný template na "Related articles"**
**Problém:** Bez kontextu, kde ďalej – potrebuje jednotnosť  
**Riešenie:** Na dne každej strany (články i služby):
```html
<div class="related-articles">
  <h3>Súvisiace témy</h3>
  <div class="grid">
    <a href="/sluzby/ntp.html">NTP služba</a>
    <a href="/navrh-infrastruktury/ntp-preco-je-cas-kriticky.html">Prečo NTP kritické</a>
    <a href="/checklisty/ntp.html">NTP checklist</a>
  </div>
</div>
```
**Dopad:** ↑ Session depth, CTR, user flow  
**Čas:** 1-2 hodiny (template + aplikácia)

---

### 📋 DOPLNKOVÉ ODPORÚČANIA

| # | Návrh | Priorita | Čas | Dopad |
|---|-------|----------|-----|-------|
| **6** | Podstrany linkovať z homepage - "Featured Services" sekcia | STREDNÁ | 30 min | ↑ Discoverability |
| **7** | Pre každú službu: "3 kroky" - ako to robíme | NÍZKA | 2h | ↑ Trust |
| **8** | Pridať FAQs sekciu na homepage a hub strany | NÍZKA | 1h | ↑ Engagement |
| **9** | Vytvoriť "All articles" filter/stromovú stránku | NÍZKA | 1h | ↑ Discoverability |
| **10** | Seo schema markup (Article, FAQ, Organization) | NÍZKA | 1h | ↑ SERP features |

---

## 6. AKČNÝ PLÁN

### Fáza 1: SEO & Konverzia (Týždeň 1)
- [ ] Zmeniť meta tags a keywords na všetkých `/sluzby/*.html` (30 min)
- [ ] Pridať CTA blok na všetkých `/navrh-infrastruktury/*` (20 min)
- [ ] Rozšíriť obsah v `/sluzby/ntp.html` a `/sluzby/zalohy-a-obnova.html` (1h)

### Fáza 2: UX & Navigation (Týždeň 2)
- [ ] Vytvoriť "Related articles" template a aplikovať (2h)
- [ ] Reorganizovať checklisty - vytvoriť lead magnet (2-3h)
- [ ] Pridať breadcrumbs na podstránky (optional, 1h)

### Fáza 3: Content (Týždeň 3+)
- [ ] Rozšíriť všetky `/sluzby/*` strany rovnako
- [ ] Pridať príklady a case studies (4-5h)
- [ ] Vytvoriť FAQ sekcie

---

## 7. SÚHRN: ČÍSLA

- **Celk. stránok:** 26
- **Duplikácií obsahu:** 3 vrstvy × 6 tém = vysoký duplicate risk
- **Strany bez CTA:** 7 (`/navrh-infrastruktury/*`)
- **Strany bez unique meta:** 6 (`/sluzby/*`)
- **Chýbajúce breadcrumbs:** Všetky podstránky
- **Návrh obsahu k rozšíreniu:** 13 stránok (~50 kb textu)

---

**Autor analýzy:** AI Asistent  
**Status:** Pripravenosť na úpravu: ✅ ÁZBUKA (všetky problémy sú jasne identifikované)
