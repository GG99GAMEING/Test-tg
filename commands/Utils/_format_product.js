/*CMD
  command: /_format_product
  help: Format product for display
  need_reply: false
  auto_retry_time:
  folder: Utils
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

var product = options;
if(!product){ return "No product data"; }
var text = "*" + product.name + "*\n";
text += "💰 ₹" + product.price + "\n";
text += "📦 Stock: " + product.stock + "\n";
text += "📂 " + product.category + "\n";
text += "_" + (product.description || "No description") + "_";
return text;
