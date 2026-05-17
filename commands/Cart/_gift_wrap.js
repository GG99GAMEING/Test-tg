/*CMD
  command: /gift_wrap
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

Api.sendMessage({text:"🔧 */Gift Wrap* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /gift_wrap | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
