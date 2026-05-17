/*CMD
  command: /manage_reviews
  help: Manage reviews
  need_reply: false
  auto_retry_time:
  folder: Admin Reviews
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"⭐ *Manage Reviews*\n\nReview management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: manage_reviews accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
