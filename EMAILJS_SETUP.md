# EmailJS Setup Guide

Formularassim site-ului este acum gata sa trimita emailuri reale prin **EmailJS** - un serviciu gratuit care nu necesita backend.

## Pași Setup (5 minute)

### 1. Crează cont EmailJS
- Mergi la: https://emailjs.com
- Apasă **Sign Up Free**
- Completează datele și confirma emailul

### 2. Adaugă serviciu email (Gmail)
- Login la https://dashboard.emailjs.com
- Mergi la **Email Services** (stânga)
- Apasă **Add Service**
- Selectează **Gmail**
- Apasă **Connect Account**
- Autentifică-te cu cont Gmail (paxfinesse877@gmail.com)
- Apasă **Create Service** → id-ul tău de serviciu va apărea (ex: `service_abc123xyz`)

### 3. Crează Email Template
- Mergi la **Email Templates** (stânga)
- Apasă **Create New Template**
- Completează:
  - **Name**: `paxfinesse_contact_form`
  - **Subject**: `{{subject}}`
  - **Content (HTML)**:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Inter, sans-serif; background: #0a0a0a; color: #fff; }
    .container { max-width: 600px; margin: 0 auto; background: #1a1a1a; padding: 40px; border-radius: 8px; border: 1px solid #c41e3a; }
    h2 { color: #c41e3a; text-transform: uppercase; font-size: 18px; margin-bottom: 20px; border-bottom: 2px solid #c41e3a; padding-bottom: 10px; }
    .section { margin-bottom: 24px; }
    .row { display: flex; justify-content: space-between; margin-bottom: 8px; }
    .label { font-weight: 600; color: #d4af37; min-width: 150px; }
    .value { color: #aaa; word-break: break-word; flex: 1; }
    .footer { margin-top: 32px; padding-top: 20px; border-top: 1px solid #333; font-size: 12px; color: #666; text-align: center; }
    a { color: #c41e3a; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <h2>🚗 Cerere Noua de Proiect</h2>
    
    <div class="section">
      <h3 style="color: #d4af37; font-size: 14px; margin-bottom: 12px;">Informatii Client</h3>
      <div class="row">
        <span class="label">Nume:</span>
        <span class="value">{{from_name}}</span>
      </div>
      <div class="row">
        <span class="label">Email:</span>
        <span class="value"><a href="mailto:{{from_email}}">{{from_email}}</a></span>
      </div>
      <div class="row">
        <span class="label">Telefon:</span>
        <span class="value">{{client_phone}}</span>
      </div>
      <div class="row">
        <span class="label">Oras:</span>
        <span class="value">{{client_city}}</span>
      </div>
    </div>

    <div class="section">
      <h3 style="color: #d4af37; font-size: 14px; margin-bottom: 12px;">Detalii Proiect</h3>
      <div class="row">
        <span class="label">Serviciu:</span>
        <span class="value">{{service_type}}</span>
      </div>
      <div class="row">
        <span class="label">Masina:</span>
        <span class="value">{{car_brand}} {{car_model}}</span>
      </div>
      <div class="row">
        <span class="label">Buget:</span>
        <span class="value">{{budget}} EUR</span>
      </div>
      {{#if project_details}}
      <div class="row">
        <span class="label">Detalii:</span>
        <span class="value">{{project_details}}</span>
      </div>
      {{/if}}
    </div>

    <div class="footer">
      <p>Mesaj trimis din formularul de pe <strong>paxfinesse.ro</strong></p>
      <p>🌐 <a href="https://paxfinesse.ro">paxfinesse.ro</a> | 📱 +40 722 633 676</p>
    </div>
  </div>
</body>
</html>
```

- Apasă **Save**
- Template ID-ul va apărea sus (ex: `template_abc123xyz`)

### 4. Obține Public Key
- Mergi la **Account** (stânga jos)
- Sub **API Keys**, copia **Public Key** (ex: `abc123xyz_public`)

### 5. Actualizează codul site-ului
- Deschide `js/main.js`
- Găsește secțiunea `EMAILJS_CONFIG` la liniile 1-11
- Inlocuieste:
  - `YOUR_SERVICE_ID_HERE` → Service ID din EmailJS
  - `YOUR_TEMPLATE_ID_HERE` → Template ID din EmailJS
  - `YOUR_PUBLIC_KEY_HERE` → Public Key din EmailJS

**Exemplu:**
```javascript
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_abc123xyz',
    TEMPLATE_ID: 'template_xyz789abc',
    PUBLIC_KEY: 'abc123xyz_public_key'
};
```

### 6. Test
- Deschide site-ul
- Completeaza formularul de pe /comanda.html
- Apasă "Trimite Cererea"
- EmailJS va trimite email cu HTML styled la paxfinesse877@gmail.com

## Limite Free Tier
- **300 emailuri/luna** (suficient pentru un site mic)
- Fără card de credit necesar

## Troubleshooting

| Problema | Soluție |
|----------|---------|
| "EmailJS nu este configurat" | Verifica daca ai inlocuit valorile din `EMAILJS_CONFIG` |
| Email nu primeste HTML | Verifica daca template-ul are `{{variable_names}}` corecte |
| Eroare de CORS | EmailJS o suporta din browser - ar trebui sa mearga automat |

---

**Detalii Contacte Paxfinesse:**
- 📧 Email: paxfinesse877@gmail.com
- 📱 Telefon: +40 722 633 676
- 📍 Sediu: Constanța, România
- 📲 Instagram: https://www.instagram.com/paxfinessepax/
- 🎬 TikTok: [link din config]
