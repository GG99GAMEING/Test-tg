/*CMD
  command: /addfunds_amount
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

Api.sendMessage({text:"🔧 */Addfunds Amount* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /addfunds_amount | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
