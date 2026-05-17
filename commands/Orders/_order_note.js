/*CMD
  command: /order_note
  help: Orders feature
  need_reply: false
  auto_retry_time:
  folder: Orders
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({text:"🔧 */Order Note* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /order_note | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
