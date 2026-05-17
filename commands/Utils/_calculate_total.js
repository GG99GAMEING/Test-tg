/*CMD
  command: /_calculate_total
  help: Calculate cart total
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
var total = 0;
for(var i=0; i<cart.length; i++){ total += cart[i].price * cart[i].qty; }
return total;
