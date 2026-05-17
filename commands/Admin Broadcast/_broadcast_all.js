/*CMD
  command: /broadcast_all
  help: Broadcast to all users
  need_reply: false
  auto_retry_time:
  folder: Admin Broadcast
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"📢 *Broadcast All*\n\nBroadcast system active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: broadcast_all accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
