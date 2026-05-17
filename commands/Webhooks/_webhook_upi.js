/*CMD
  command: /webhook_upi
  help: UPI webhook handler
  need_reply: false
  auto_retry_time:
  folder: Webhooks
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

if(!content){ return; }
Api.sendMessage({text:"📋 UPI WEBHOOK: Data received: " + content, chat_id:"@JACK_SHOP_LOGS"});
try {
  var data = JSON.parse(content);
  if(data.status == "success"){
    Api.sendMessage({text:"✅ UPI Payment verified! Amount: ₹" + (data.amount || "N/A"), chat_id: parseInt(data.user_id || user.telegramid)});
  }
} catch(e){
  Api.sendMessage({text:"📋 UPI WEBHOOK ERROR: " + e.message, chat_id:"@JACK_SHOP_LOGS"});
}
