/*CMD
  command: /withdraw_details
  help: Wallet operation
  need_reply: false
  auto_retry_time:
  folder: Wallet
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({text:"🔧 */Withdraw Details* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /withdraw_details | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
