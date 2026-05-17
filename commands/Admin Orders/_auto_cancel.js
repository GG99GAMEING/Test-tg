/*CMD
  command: /auto_cancel
  help: Order admin
  need_reply: false
  auto_retry_time:
  folder: Admin Orders
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"🔧 */Auto Cancel* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /auto_cancel | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
