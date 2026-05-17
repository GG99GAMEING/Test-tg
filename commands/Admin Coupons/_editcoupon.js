/*CMD
  command: /editcoupon
  help: Edit coupon
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

Api.sendMessage({text:"🎫 *Editcoupon*\n\nCoupon management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: editcoupon accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
