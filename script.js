// Meme Scout links

const TWITTER_URL = 'https://x.com/MemeScoutCo';
const TELEGRAM_URL = 'https://t.me/MemeScoutAppBot';


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
