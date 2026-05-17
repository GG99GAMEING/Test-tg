/*CMD
  command: /finance_dashboard
  help: Finance dashboard
  need_reply: false
  auto_retry_time:
  folder: Admin Finance
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"💰 *Finance Dashboard*\n\nFinance & export active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: finance_dashboard accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
