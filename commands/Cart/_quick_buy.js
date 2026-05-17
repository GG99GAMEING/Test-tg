/*CMD
  command: /quick_buy
  help: Cart feature
  need_reply: false
  auto_retry_time:
  folder: Cart
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({text:"🔧 */Quick Buy* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /quick_buy | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
