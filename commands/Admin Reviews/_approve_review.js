/*CMD
  command: /approve_review
  help: Approve review
  need_reply: true
  auto_retry_time:
  folder: Admin Reviews
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"⭐ *Approve Review*\n\nReview management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: approve_review accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
