/*CMD
  command: /ticket_filter
  help: Filter tickets
  need_reply: false
  auto_retry_time:
  folder: Admin Support
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"💬 *Ticket Filter*\n\nSupport system active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: ticket_filter accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
