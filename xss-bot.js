const puppeteer = require('puppeteer');

const host = process.argv[2];
const postNum = process.argv[3];
const url = `http://${host}:6177/posts/${postNum}`;
const timeout = 5000;
const waitMs = 5000;

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });

  const page = await browser.newPage();

  page.on('request', request => {
    if (request.isNavigationRequest()) {
      console.log(`[URL] URL=${request.url()}`);
    }
  });

  await page.setCookie({
    name: 'BotCookie',
    value: 'FLAG{0op$_c00k13_w17h0u7_h77p_0n1y?}',
    domain: host,
    path: '/',
    httpOnly: false,
    secure: false,
  });

  try {
    const response = await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout,
    });
    console.log('[INFO] rendered page', response ? `status ${response.status()}` : 'no response');
  } catch (error) {
    console.log('[INFO] Timeout or navigation error', error.message);
  }

  await new Promise(resolve => setTimeout(resolve, waitMs));
  await browser.close();
})();