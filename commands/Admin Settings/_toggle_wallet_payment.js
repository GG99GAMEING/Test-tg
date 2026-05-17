/*CMD
  command: /toggle_wallet_payment
  help: Toggle wallet payment
  need_reply: false
  auto_retry_time:
  folder: Admin Settings
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"⚙️ *Toggle Wallet Payment*\n\nSettings management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: toggle_wallet_payment accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
