/*CMD
  command: /addfunds_upi
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

Api.sendMessage({text:"🔧 */Addfunds Upi* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /addfunds_upi | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
