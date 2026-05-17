/*CMD
  command: /_notify_welcome
  help: Welcome notification
  need_reply: false
  auto_retry_time:
  folder: Notifications
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

var msg = options || "👋 Welcome to JACK SHOP!";
Api.sendMessage({text: msg});
Api.sendMessage({text:"🔔 NOTIFY_WELCOME: User " + user.telegramid + " ko notification bheja gaya.", chat_id:"@JACK_SHOP_LOGS"});
