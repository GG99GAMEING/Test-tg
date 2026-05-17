/*CMD
  command: /bulk_order
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

Api.sendMessage({text:"🔧 */Bulk Order* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /bulk_order | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
