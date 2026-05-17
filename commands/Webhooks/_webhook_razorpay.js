/*CMD
  command: /webhook_razorpay
  help: Razorpay webhook handler
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
try {
  var data = JSON.parse(content);
  var event = data.event || "";
  var payload = data.payload || {};
  var paymentEntity = payload.payment ? payload.payment.entity : {};
  var amount = paymentEntity.amount ? paymentEntity.amount / 100 : 0;
  var orderId = paymentEntity.notes ? (paymentEntity.notes.order_id || "Unknown") : "Unknown";
  var userId = paymentEntity.notes ? (paymentEntity.notes.user_id || "Unknown") : "Unknown";
  
  Api.sendMessage({text:"📋 RAZORPAY WEBHOOK: Event: " + event + " | Amount: ₹" + amount + " | Order: " + orderId, chat_id:"@JACK_SHOP_LOGS"});
  
  if(event == "payment.captured"){
    var orders = Bot.getProperty("orders") ? JSON.parse(Bot.getProperty("orders")) : [];
    for(var i=0; i<orders.length; i++){
      if(orders[i].id == orderId){
        orders[i].status = "confirmed";
        orders[i].payment_status = "paid";
        orders[i].payment_id = paymentEntity.id;
        break;
      }
    }
    Bot.setProperty("orders", JSON.stringify(orders), "json");
    if(userId != "Unknown") {
      Api.sendMessage({text:"✅ Payment confirmed! ₹" + amount + " received for Order #" + orderId + ".\nAapka order process ho raha hai!", chat_id: parseInt(userId)});
    }
  }
} catch(e){
  Api.sendMessage({text:"📋 RAZORPAY WEBHOOK ERROR: " + e.message, chat_id:"@JACK_SHOP_LOGS"});
}
