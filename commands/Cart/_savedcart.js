/*CMD
  command: /savedcart
  help: View saved cart
  need_reply: false
  auto_retry_time: 
  folder: Cart
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var cartKey = (Bot.getProperty('cart_prefix') || 'cart_') + uid;
var saved = Bot.getProperty('saved_' + cartKey);
try { saved = JSON.parse(saved); } catch(e){ saved = null; }
if(!saved || !saved.items || saved.items.length == 0){ Bot.sendMessage('💾 Koi saved cart nahi hai.'); return; }
var text = '💾 *Saved Cart*\n\n' + saved.items.length + ' items saved hain.\n\nRestore karne ke liye /restorecart use karein.';
Bot.sendMessage(text, {parse_mode:'Markdown'});
