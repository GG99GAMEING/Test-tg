/*CMD
  command: /_notify_vip
  help: VIP notification
  need_reply: false
  auto_retry_time:
  folder: Notifications
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

var msg = options || "⭐ VIP benefits unlocked!";
Api.sendMessage({text: msg});
Api.sendMessage({text:"🔔 NOTIFY_VIP: User " + user.telegramid + " ko notification bheja gaya.", chat_id:"@JACK_SHOP_LOGS"});
