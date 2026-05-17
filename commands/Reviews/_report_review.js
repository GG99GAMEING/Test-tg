/*CMD
  command: /report_review
  help: Review feature
  need_reply: false
  auto_retry_time:
  folder: Reviews
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({text:"🔧 */Report Review* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /report_review | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
