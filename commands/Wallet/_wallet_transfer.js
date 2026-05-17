/*CMD
  command: /wallet_transfer
  help: Wallet operation
  need_reply: true
  auto_retry_time:
  folder: Wallet
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({text:"🔧 */Wallet Transfer* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /wallet_transfer | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
