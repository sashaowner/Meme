// Replace these three URLs after launch.
const BUY_URL = '#';
const TWITTER_URL = '#';
const TELEGRAM_URL = '#';

for (const id of ['heroBuy','buyButton']) document.getElementById(id).href = BUY_URL;
for (const [id,url] of [['twitterLink',TWITTER_URL],['telegramLink',TELEGRAM_URL]]) {
  const el=document.getElementById(id); el.href=url;
  if(url==='#'){el.style.opacity='.5';el.addEventListener('click',e=>e.preventDefault());}
}
