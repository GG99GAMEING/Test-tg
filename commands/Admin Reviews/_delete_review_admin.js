/*CMD
  command: /delete_review_admin
  help: Delete review admin
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

Api.sendMessage({text:"⭐ *Delete Review Admin*\n\nReview management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: delete_review_admin accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
