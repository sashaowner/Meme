// Meme Scout links

const BUY_URL =
  'https://www.ponsfamily.com/launchpad/0x5Da07CB2c05eBE3F001B31E5f6cCc876778304e8';

const TWITTER_URL =
  'https://x.com/MemeScoutCo';

const TELEGRAM_URL =
  'https://t.me/MemeScoutAppBot';


// BUY buttons
for (const id of ['heroBuy', 'buyButton']) {
  const el = document.getElementById(id);

  if (el) {
    el.href = BUY_URL;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  }
}


// Social links
const twitterLink = document.getElementById('twitterLink');
const telegramLink = document.getElementById('telegramLink');

if (twitterLink) {
  twitterLink.href = TWITTER_URL;
  twitterLink.target = '_blank';
  twitterLink.rel = 'noopener noreferrer';
}

if (telegramLink) {
  telegramLink.href = TELEGRAM_URL;
  telegramLink.target = '_blank';
  telegramLink.rel = 'noopener noreferrer';
}
