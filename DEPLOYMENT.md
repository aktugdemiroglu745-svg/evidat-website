# Website live schalten — Schritt-für-Schritt

## Schritt 1: Formspree einrichten (Kontaktformular)

1. Gehe auf https://formspree.io
2. Konto erstellen (kostenlos)
3. Klicke "New Form"
4. Gib deine E-Mail-Adresse ein
5. Kopiere die Form-ID (z.B. "xbjnkpqr")
6. Öffne: src/components/Contact.tsx
7. Ersetze "DEINE_FORMSPREE_ID" mit deiner ID:
   const FORMSPREE_ID = 'xbjnkpqr';   ← deine ID hier
8. Speichern

---

## Schritt 2: GitHub-Repository erstellen

1. Gehe auf https://github.com → Konto erstellen (falls nicht vorhanden)
2. Klicke "+ New repository"
3. Name: "evidat-website"
4. Öffentlich (Public) auswählen
5. Klicke "Create repository"

6. Im Terminal:
   cd Desktop/evidat-next
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/DEIN-USERNAME/evidat-website.git
   git push -u origin main

---

## Schritt 3: Vercel einrichten (kostenlos)

1. Gehe auf https://vercel.com
2. "Sign up" → mit GitHub-Konto anmelden
3. Klicke "Add New Project"
4. Wähle dein Repository "evidat-website"
5. Klicke "Deploy" → fertig!

Vercel gibt dir eine kostenlose URL wie:
https://evidat-website.vercel.app

---

## Schritt 4: Eigene Domain (optional)

Falls du eine Domain wie "evidat.ch" möchtest:
1. Domain kaufen z.B. bei Hostpoint.ch (~15 CHF/Jahr)
2. In Vercel: Settings → Domains → Add Domain
3. DNS-Einstellungen beim Registrar anpassen (Vercel zeigt genau was)

---

## Änderungen publizieren (nach der Ersteinrichtung)

Jedes Mal wenn du etwas änderst:
   git add .
   git commit -m "Beschreibung der Änderung"
   git push

→ Vercel erkennt das automatisch und aktualisiert die Website in ~1 Minute!

---

## Lokale Entwicklung (Vorschau auf deinem Computer)

   cd Desktop/evidat-next
   npm run dev
   → http://localhost:3000/de öffnen
