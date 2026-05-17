/*CMD
  command: /_notify_refund
  help: Refund notification
  need_reply: false
  auto_retry_time:
  folder: Notifications
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

var msg = options || "💰 Refund processed for your order";
Api.sendMessage({text: msg});
Api.sendMessage({text:"🔔 NOTIFY_REFUND: User " + user.telegramid + " ko notification bheja gaya.", chat_id:"@JACK_SHOP_LOGS"});
