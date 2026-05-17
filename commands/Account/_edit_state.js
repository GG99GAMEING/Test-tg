/*CMD
  command: /edit_state
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

Api.sendMessage({text:"🔧 */Edit State* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /edit_state | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
