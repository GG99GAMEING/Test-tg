/*CMD
  command: /shipping_calculator
  help: Shop feature
  need_reply: false
  auto_retry_time:
  folder: Shop
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({text:"🔧 */Shipping Calculator* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /shipping_calculator | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
