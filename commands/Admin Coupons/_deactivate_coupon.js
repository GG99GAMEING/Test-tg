/*CMD
  command: /deactivate_coupon
  help: Deactivate coupon
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

Api.sendMessage({text:"🎫 *Deactivate Coupon*\n\nCoupon management active.", parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: deactivate_coupon accessed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
