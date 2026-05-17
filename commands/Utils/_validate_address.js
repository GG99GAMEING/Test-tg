/*CMD
  command: /_validate_address
  help: Validate address
  need_reply: false
  auto_retry_time:
  folder: Utils
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

var addr = options || message || "";
if(!addr || addr.length < 10){ return null; }
return addr.trim();
