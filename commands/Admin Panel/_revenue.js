/*CMD
  command: /revenue
  help: Revenue overview
  need_reply: false
  auto_retry_time:
  folder: Admin Panel
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"📊 *Revenue*\n\nAdmin feature active. Use /adminpanel for full menu.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: revenue accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
