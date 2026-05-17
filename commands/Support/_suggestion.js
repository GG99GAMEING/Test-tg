/*CMD
  command: /suggestion
  help: Support feature
  need_reply: false
  auto_retry_time:
  folder: Support
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({text:"🔧 */Suggestion* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /suggestion | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
