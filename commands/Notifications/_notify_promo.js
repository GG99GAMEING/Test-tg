/*CMD
  command: /_notify_promo
  help: Promo notification
  need_reply: false
  auto_retry_time:
  folder: Notifications
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

var msg = options || "🎉 Special promo chal raha hai! Abhi shop karo.";
Api.sendMessage({text: msg});
Api.sendMessage({text:"🔔 NOTIFY_PROMO: User " + user.telegramid + " ko notification bheja gaya.", chat_id:"@JACK_SHOP_LOGS"});
