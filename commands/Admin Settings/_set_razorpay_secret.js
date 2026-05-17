/*CMD
  command: /set_razorpay_secret
  help: Set Razorpay secret
  need_reply: true
  auto_retry_time:
  folder: Admin Settings
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"⚙️ *Set Razorpay Secret*\n\nSettings management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: set_razorpay_secret accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
