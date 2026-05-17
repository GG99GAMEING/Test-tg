/*CMD
  command: /clearcart
  help: Clear cart
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
var buttons = [
  [{title:'✅ Haan, Clear Karo',command:'/clearcart_confirm'},{title:'❌ Nahin',command:'/cart'}]
];
Bot.sendInlineKeyboard(buttons, '⚠️ *Cart Clear Karein?*\n\nKya aap sure hain ki poori cart clear karna chahte hain? Ye action undo nahi ho sakta.');
