/*CMD
  command: /wallet_transfer_confirm
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

Api.sendMessage({text:"🔧 */Wallet Transfer Confirm* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /wallet_transfer_confirm | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
