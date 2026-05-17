/*CMD
  command: /_notify_order
  help: Order notification
  need_reply: false
  auto_retry_time:
  folder: Notifications
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

var msg = options || "🛒 New order placed by user";
Api.sendMessage({text: msg});
Api.sendMessage({text:"🔔 NOTIFY_ORDER: User " + user.telegramid + " ko notification bheja gaya.", chat_id:"@JACK_SHOP_LOGS"});
