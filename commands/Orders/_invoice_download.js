/*CMD
  command: /invoice_download
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

Api.sendMessage({text:"🔧 */Invoice Download* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /invoice_download | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
