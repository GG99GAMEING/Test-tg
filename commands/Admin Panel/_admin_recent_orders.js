/*CMD
  command: /admin_recent_orders
  help: Recent orders list
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

Api.sendMessage({text:"📊 *Admin Recent Orders*\n\nAdmin feature active. Use /adminpanel for full menu.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: admin_recent_orders accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
