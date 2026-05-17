/*CMD
  command: /editproduct_save
  help: Save product edit
  need_reply: false
  auto_retry_time:
  folder: Admin Products
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

if(!message){ return; }
var parts = message.split("|");
if(parts.length < 3){ Api.sendMessage({text:"❌ Format: ID | Field | NewValue"}); return; }
var products = Bot.getProperty("products") ? JSON.parse(Bot.getProperty("products")) : [];
var found = false;
for(var i=0; i<products.length; i++){
  if(products[i].id == parts[0].trim()){
    var field = parts[1].trim();
    var val = parts[2].trim();
    if(field=="price"||field=="stock") val = parseInt(val);
    products[i][field] = val;
    found = true;
    break;
  }
}
if(found){
  Bot.setProperty("products", JSON.stringify(products), "json");
  Api.sendMessage({text:"✅ Product updated successfully!"});
  Api.sendMessage({text:"📋 LOG: Product edited - " + parts[0].trim() + " | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
} else {
  Api.sendMessage({text:"❌ Product not found!"});
}
