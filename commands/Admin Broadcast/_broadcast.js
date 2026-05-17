/*CMD
  command: /broadcast
  help: Broadcast message
  need_reply: true
  auto_retry_time:
  folder: Admin Broadcast
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"📢 *Broadcast*\n\nBroadcast system active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: broadcast accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
