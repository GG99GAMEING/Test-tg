/*CMD
  command: /vip_benefits
  help: VIP benefits
  need_reply: false
  auto_retry_time: 
  folder: Account
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var text = '👑 *VIP Level Benefits*\n\n' +
  '🥉 *Level 1 (₹1,000+)*: 2% extra discount\n' +
  '🥈 *Level 2 (₹5,000+)*: 5% extra discount + priority support\n' +
  '🥇 *Level 3 (₹10,000+)*: 8% extra discount + free shipping always\n' +
  '💎 *Level 4 (₹25,000+)*: 10% extra discount + early access to sales\n' +
  '👑 *Level 5 (₹50,000+)*: 15% extra discount + VIP-only products + personal support';
Bot.sendMessage(text, {parse_mode:'Markdown'});
