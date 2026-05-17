/*CMD
  command: /support_stats
  help: Support statistics
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

Api.sendMessage({text:"💬 *Support Stats*\n\nSupport system active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: support_stats accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
