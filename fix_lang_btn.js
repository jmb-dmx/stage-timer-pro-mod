const fs = require('fs');
let html = fs.readFileSync('stage-timer-pro-1.0.0/public/index.html', 'utf8');

// Also remove `btn-lang` text update from updateLangUI
const langUiSearch = `document.getElementById('btn-lang').innerText = currentLang === 'en' ? 'FR' : 'EN';`;
html = html.replace(langUiSearch, '');

fs.writeFileSync('stage-timer-pro-1.0.0/public/index.html', html);
