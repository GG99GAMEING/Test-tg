/*CMD
  command: /discount_zone
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

Api.sendMessage({text:"🔧 */Discount Zone* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /discount_zone | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
