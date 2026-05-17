/*CMD
  command: /deduct_wallet
  help: Deduct from wallet
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

Api.sendMessage({text:"👥 *Deduct Wallet*\n\nAdmin user management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: deduct_wallet accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
