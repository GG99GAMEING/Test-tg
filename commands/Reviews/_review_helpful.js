/*CMD
  command: /review_helpful
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

Api.sendMessage({text:"🔧 */Review Helpful* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /review_helpful | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
