/*CMD
  command: /voice_search
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

Api.sendMessage({text:"🔧 */Voice Search* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /voice_search | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
