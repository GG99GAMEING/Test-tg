/*CMD
  command: /review_photos
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

Api.sendMessage({text:"🔧 */Review Photos* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /review_photos | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
