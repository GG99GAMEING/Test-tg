/*CMD
  command: /exchange_policy
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

Api.sendMessage({text:"🔧 */Exchange Policy* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /exchange_policy | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
