/*CMD
  command: /shop_by_occasion
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

Api.sendMessage({text:"🔧 *Shop By Occasion* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /shop_by_occasion | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
