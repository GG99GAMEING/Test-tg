/*CMD
  command: /reflink
  help: Referral link
  need_reply: false
  auto_retry_time: 
  folder: Referral
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var refLink = 'https://t.me/JACK_SHOP_BOT?start=' + uid;
Bot.sendMessage('🔗 *Aapka Referral Link*\n\n`' + refLink + '`\n\nIs link ko share karein. Har naye user ke join + first order par aapko ₹' + (Bot.getProperty('referral_bonus')||25) + ' milenge!', {parse_mode:'Markdown'});
