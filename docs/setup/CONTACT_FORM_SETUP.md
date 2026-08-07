# 📧 Kontaktný formulár - Návod na nastavenie

Kontaktný formulár je teraz integrovaný do stránky. Aby fungoval, musíte nastaviť backend na spracovanie e-mailov.

## Možnosti servisu:

### 1. **Formspree.io** (Odporúčané - najjednoduchšie)

**Výhody:**
- Bez backendu
- Free plán
- Jednoduchá konfigurácia
- Automatické e-maily

**Postup:**

1. Prejdite na https://formspree.io/
2. Zaregistrujte sa (alebo sa prihláste)
3. Kliknite na "New Project" a zadajte: `kontakt-wovtech`
4. Kliknite na "New Form"
5. Zvolte "HTML Form"
6. Nahraďte v súbore `assets/js/contact-form.js` riadok:
   ```javascript
   fetch('https://formspree.io/f/xovkyezp', {
   ```
   Váš Formspree ID (nájdete v projekte, vyzerá ako `f/xxxxx`):
   ```javascript
   fetch('https://formspree.io/f/VAS_ID', {
   ```

7. Uložte súbor a hotovo!

### 2. **EmailJS** (Alternatíva)

**Postup:**

1. Prejdite na https://www.emailjs.com/
2. Zaregistrujte sa
3. Skopírujte Your **Service ID**, **Template ID** a **Public Key**
4. Vytvorte email template
5. V `assets/js/contact-form.js` nahraďte fetch logiku EmailJS kodom:

```javascript
emailjs.init('PUBLIC_KEY');

emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {
  from_name: data.name,
  from_email: data.email,
  message: data.message,
  // ... ostatné polia
});
```

### 3. **Vlastný backend** (Node.js/Express)

Ak máte vlastný backend, vytvorte endpoint `/api/contact` a zmeniť fetch URL v JS súbore.

---

## 🔧 Testovanie

1. Otvorte stránku `/kontakt.html` v prehliadači
2. Vyplňte formulár
3. Kliknite "Odoslať správu"
4. Mal by ste dostať email na `kontakt@wovtech.sk`

---

## 📋 Súbory

- `kontakt.html` - HTML formulár
- `assets/css/contact-form.css` - Styling formulára
- `assets/js/contact-form.js` - Validácia a submission logika

---

## ⚙️ Customizácia

### Zmena e-mailovej adresy príjemcu

V `assets/js/contact-form.js` v Formspree fetch call:

```javascript
body: JSON.stringify({
  // ... polia
  _to: 'vas-email@wovtech.sk',  // <-- Zmení adresu príjemcu
})
```

### Pridané polia

Ak chcete pridať ďalšie polia, pridajte:

1. HTML input/textarea v `kontakt.html`
2. Validáciu v `contact-form.js` (funkcia `validateForm`)
3. Pole do JSON body v fetch call
