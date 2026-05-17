/*CMD
  command: /add_wallet
  help: Add to wallet
  need_reply: true
  auto_retry_time:
  folder: Admin Users
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"👥 *Add Wallet*\n\nAdmin user management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: add_wallet accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
