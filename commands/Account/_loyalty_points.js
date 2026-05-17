/*CMD
  command: /loyalty_points
  help: Loyalty points
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

var points = parseInt(Bot.getProperty('user_loyalty_points_' + uid)||0);
var rate = parseInt(Bot.getProperty('loyalty_rate')||100);
var walletConv = parseInt(Bot.getProperty('points_to_wallet')||10);
var text = '⭐ *Loyalty Points*\n\n' +
  'Your Points: ' + points + '\n\n' +
  '📊 1 point per ₹' + rate + ' spent\n' +
  '💱 ' + walletConv + ' points = ₹1 wallet credit\n' +
  '💰 Redeem value: ₹' + Math.floor(points/walletConv) + '\n\n' +
  'Redeem karne ke liye: /redeem_points [amount]';
Bot.sendMessage(text, {parse_mode:'Markdown'});
