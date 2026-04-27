const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({args: ['--no-sandbox']});
    const page = await browser.newPage();

    // Add event listeners to catch console errors
    page.on('console', msg => {
        if (msg.type() === 'error') console.log('PAGE ERROR:', msg.text());
    });

    // Evaluate in page to catch exactly what is throwing
    await page.goto('http://localhost:3000/');

    await page.evaluate(() => {
        window.onerror = function(msg, url, lineNo, columnNo, error) {
           console.log('WIN ERROR: ' + msg + ' at ' + lineNo + ':' + columnNo);
           return false;
        };
    });

    await new Promise(r => setTimeout(r, 2000));

    await page.evaluate(() => {
        updateLangUI();
    });

    await new Promise(r => setTimeout(r, 2000));

    await browser.close();
})();
