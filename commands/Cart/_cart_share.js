/*CMD
  command: /cart_share
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

Api.sendMessage({text:"🔧 */Cart Share* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /cart_share | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
