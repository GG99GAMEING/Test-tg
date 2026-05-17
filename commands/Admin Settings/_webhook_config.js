/*CMD
  command: /webhook_config
  help: Admin Settings admin
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

Api.sendMessage({text:"🛡️ *Webhook Config* - Admin active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /webhook_config | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
