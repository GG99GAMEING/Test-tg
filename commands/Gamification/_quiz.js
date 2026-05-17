/*CMD
  command: /quiz
  help: Game feature
  need_reply: false
  auto_retry_time:
  folder: Gamification
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({text:"🔧 */Quiz* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /quiz | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
