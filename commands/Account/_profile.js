/*CMD
  command: /profile
  help: View profile
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

var name = Bot.getProperty('user_name_' + uid) || user.first_name || 'N/A';
var phone = Bot.getProperty('user_phone_' + uid) || 'Not set';
var email = Bot.getProperty('user_email_' + uid) || 'Not set';
var joined = Bot.getProperty('user_joined_' + uid) || 'N/A';
var vip = parseInt(Bot.getProperty('user_vip_' + uid)||0);
var points = parseInt(Bot.getProperty('user_loyalty_points_' + uid)||0);
var spent = parseFloat(Bot.getProperty('user_total_spent_' + uid)||0);
try { var bal = Libs.ResourcesLib.userRes('balance').value(); } catch(e){ var bal = 0; }
var lang = Bot.getProperty('user_lang_' + uid) || 'hinglish';
var text = '👤 *Profile*\n\n' +
  '📛 Name: ' + name + '\n' +
  '🆔 ID: ' + uid + '\n' +
  '📱 Phone: ' + phone + '\n' +
  '📧 Email: ' + email + '\n' +
  '👑 VIP: Level ' + vip + '\n' +
  '⭐ Points: ' + points + '\n' +
  '💰 Spent: ₹' + spent + '\n' +
  '👛 Wallet: ₹' + bal + '\n' +
  '🌐 Lang: ' + lang + '\n' +
  '📅 Joined: ' + (joined != 'N/A' ? new Date(joined).toLocaleDateString('en-IN') : 'N/A');
Bot.sendMessage(text, {parse_mode:'Markdown'});
