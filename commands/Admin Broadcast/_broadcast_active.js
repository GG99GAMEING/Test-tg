/*CMD
  command: /broadcast_active
  help: Broadcast to active users
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

Api.sendMessage({text:"📢 *Broadcast Active*\n\nBroadcast system active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: broadcast_active accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
