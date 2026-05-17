/*CMD
  command: /trending
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

Api.sendMessage({text:"🔧 */Trending* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /trending | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
