/*CMD
  command: /addcoupon
  help: Add coupon
  need_reply: true
  auto_retry_time:
  folder: Admin Coupons
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Api.sendMessage({text:"🎫 *Addcoupon*\n\nCoupon management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: addcoupon accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
