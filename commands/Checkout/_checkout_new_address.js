/*CMD
  command: /checkout_new_address
  help: Enter new address
  need_reply: true
  auto_retry_time: 
  folder: Checkout
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var addr = {line1: message.trim(), line2: '', city: '', state: '', pincode: '', phone: ''};
Bot.setProperty('checkout_address_' + uid, JSON.stringify(addr), 'string');
Bot.setProperty('addr_step_' + uid, 'city', 'string');
Bot.sendMessage('📍 *Line 1 saved!*\n\nAb city ka naam bhejiye:', {parse_mode:'Markdown'});
Bot.setProperty('awaiting_addr_' + uid, 'true', 'string');
