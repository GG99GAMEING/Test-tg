/*CMD
  command: /language
  help: Account setting
  need_reply: false
  auto_retry_time:
  folder: Account
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({text:"🔧 */Language* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /language | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
