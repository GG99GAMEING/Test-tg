/*CMD
  command: /schedule_broadcast
  help: Schedule broadcast
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

Api.sendMessage({text:"📢 *Schedule Broadcast*\n\nBroadcast system active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: schedule_broadcast accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
