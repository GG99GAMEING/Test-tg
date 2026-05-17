/*CMD
  command: /wallet_cashback
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

Api.sendMessage({text:"🔧 *Wallet Cashback* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /wallet_cashback | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
