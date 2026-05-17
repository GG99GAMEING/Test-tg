/*CMD
  command: /reply_ticket
  help: Reply to ticket
  need_reply: true
  auto_retry_time:
  folder: Admin Support
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"💬 *Reply Ticket*\n\nSupport system active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: reply_ticket accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
