/*CMD
  command: /_notify_cancel
  help: Cancel notification
  need_reply: false
  auto_retry_time:
  folder: Notifications
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

var msg = options || "❌ Your order has been cancelled";
Api.sendMessage({text: msg});
Api.sendMessage({text:"🔔 NOTIFY_CANCEL: User " + user.telegramid + " ko notification bheja gaya.", chat_id:"@JACK_SHOP_LOGS"});
