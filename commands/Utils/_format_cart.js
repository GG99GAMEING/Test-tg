/*CMD
  command: /_format_cart
  help: Format cart for display
  need_reply: false
  auto_retry_time:
  folder: Utils
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

var cart = options ? JSON.parse(options) : [];
if(!cart || cart.length==0){ return "🛒 Cart khali hai!"; }
var text = "*Your Cart*\n\n";
var total = 0;
for(var i=0; i<cart.length; i++){
  var item = cart[i];
  text += (i+1) + ". *" + item.name + "*\n   ₹" + item.price + " x " + item.qty + " = ₹" + (item.price*item.qty) + "\n";
  total += item.price * item.qty;
}
text += "\n*Total: ₹" + total + "*";
return text;
