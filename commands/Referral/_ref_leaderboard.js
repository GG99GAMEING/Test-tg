/*CMD
  command: /ref_leaderboard
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

Api.sendMessage({text:"🔧 */Ref Leaderboard* - JACK SHOP active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: /ref_leaderboard | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
