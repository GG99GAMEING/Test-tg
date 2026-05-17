/*CMD
  command: /tracking_details
  help: Orders feature
  need_reply: false
  auto_retry_time:
  folder: Orders
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({text:"🔧 */Tracking Details* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /tracking_details | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
