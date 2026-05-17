/*CMD
  command: /ref_code
  help: Referral feature
  need_reply: false
  auto_retry_time:
  folder: Referral
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({text:"🔧 */Ref Code* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /ref_code | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
