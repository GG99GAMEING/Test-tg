/*CMD
  command: /gift_card
  help: Wallet feature
  need_reply: false
  auto_retry_time:
  folder: Wallet
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases:
CMD*/

Api.sendMessage({text:"🔧 *Gift Card* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /gift_card | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
