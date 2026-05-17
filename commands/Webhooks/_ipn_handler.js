/*CMD
  command: /ipn_handler
  help: IPN handler for payment gateway
  need_reply: false
  auto_retry_time:
  folder: Webhooks
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

if(!content && !params){ return; }
var raw = content || JSON.stringify(params || {});
Api.sendMessage({text:"📋 IPN RECEIVED: " + raw, chat_id:"@JACK_SHOP_LOGS"});
try {
  var data = content ? JSON.parse(content) : params;
  if(data && data.status == "COMPLETED"){
    Api.sendMessage({text:"✅ IPN Payment Completed: " + JSON.stringify(data), chat_id:"@JACK_SHOP_LOGS"});
  }
} catch(e){
  Api.sendMessage({text:"📋 IPN ERROR: " + e.message, chat_id:"@JACK_SHOP_LOGS"});
}
