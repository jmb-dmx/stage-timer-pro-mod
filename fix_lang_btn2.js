const fs = require('fs');
let html = fs.readFileSync('stage-timer-pro-1.0.0/public/index.html', 'utf8');

// I already successfully removed document.getElementById('btn-lang').innerText = currentLang === 'en' ? 'FR' : 'EN';
// Let's check what else might be null.
// Ah! In `updateLangUI()`:
// document.querySelector('header span').innerText = i18n[currentLang].moderator;
// The header span might not exist or might be structured differently now.
// Let's look at the header in index.html
