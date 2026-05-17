/*CMD
  command: /set_loyalty_redeem
  help: Set loyalty redeem rate
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

Api.sendMessage({text:"⚙️ *Set Loyalty Redeem*\n\nSettings management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: set_loyalty_redeem accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
