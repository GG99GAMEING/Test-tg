/*CMD
  command: /_notify_wallet
  help: Wallet notification
  need_reply: false
  auto_retry_time:
  folder: Notifications
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

var msg = options || "💳 Wallet transaction completed";
Api.sendMessage({text: msg});
Api.sendMessage({text:"🔔 NOTIFY_WALLET: User " + user.telegramid + " ko notification bheja gaya.", chat_id:"@JACK_SHOP_LOGS"});
