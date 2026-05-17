/*CMD
  command: /search_filter
  help: Search feature
  need_reply: false
  auto_retry_time:
  folder: Search
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({text:"🔧 */Search Filter* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /search_filter | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
