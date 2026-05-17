/*CMD
  command: /_generate_orderid
  help: Generate unique order ID
  need_reply: false
  auto_retry_time:
  folder: Utils
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

var prefix = options || "ORD";
var timestamp = Date.now().toString(36).toUpperCase();
var random = Math.floor(Math.random() * 10000).toString().padStart(4,'0');
return prefix + "-" + timestamp + "-" + random;
