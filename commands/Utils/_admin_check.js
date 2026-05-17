/*CMD
  command: /_admin_check
  help: Check admin access
  need_reply: false
  auto_retry_time:
  folder: Utils
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

var isAdmin = user.telegramid == 6054420463;
if(!isAdmin){ Api.sendMessage({text:"❌ Access Denied!"}); Bot.stop(); }
