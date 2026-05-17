/*CMD
  command: /lucky_draw
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

Api.sendMessage({text:"🔧 */Lucky Draw* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /lucky_draw | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
