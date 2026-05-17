/*CMD
  command: /_notify_ticket
  help: Ticket notification
  need_reply: false
  auto_retry_time:
  folder: Notifications
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

var msg = options || "🎫 Support ticket update";
Api.sendMessage({text: msg});
Api.sendMessage({text:"🔔 NOTIFY_TICKET: User " + user.telegramid + " ko notification bheja gaya.", chat_id:"@JACK_SHOP_LOGS"});
