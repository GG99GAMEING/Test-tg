/*CMD
  command: /_format_order
  help: Format order for display
  need_reply: false
  auto_retry_time:
  folder: Utils
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

var order = options;
if(!order){ return "No order data"; }
var text = "*Order #" + order.id + "*\n";
text += "📅 " + (order.date || "N/A") + "\n";
text += "📊 Status: " + (order.status || "pending") + "\n";
text += "💰 Total: ₹" + (order.total || 0);
return text;
