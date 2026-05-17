/*CMD
  command: /size_guide
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

Api.sendMessage({text:"🔧 *Size Guide* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /size_guide | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
