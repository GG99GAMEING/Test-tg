/*CMD
  command: /broadcast_vip
  help: Broadcast to VIP users
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

Api.sendMessage({text:"📢 *Broadcast Vip*\n\nBroadcast system active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: broadcast_vip accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
