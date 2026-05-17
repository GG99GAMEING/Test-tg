/*CMD
  command: /subscription
  help: Account feature
  need_reply: false
  auto_retry_time:
  folder: Account
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases:
CMD*/

Api.sendMessage({text:"🔧 *Subscription* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /subscription | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
