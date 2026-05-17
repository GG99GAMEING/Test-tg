/*CMD
  command: /_validate_phone
  help: Validate phone number
  need_reply: false
  auto_retry_time:
  folder: Utils
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

var phone = options || message || "";
phone = phone.replace(/[^0-9]/g, "");
if(phone.length == 10 && phone.match(/^[6-9]/)){ return phone; }
return null;
