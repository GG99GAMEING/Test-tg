/*CMD
  command: /new_user_guide
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

Api.sendMessage({text:"🔧 */New User Guide* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /new_user_guide | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
