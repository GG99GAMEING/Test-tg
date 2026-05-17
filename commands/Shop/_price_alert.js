/*CMD
  command: /price_alert
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

Api.sendMessage({text:"🔧 *Price Alert* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /price_alert | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
