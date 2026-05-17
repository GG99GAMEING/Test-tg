/*CMD
  command: /_maintenance_check
  help: Check maintenance mode
  need_reply: false
  auto_retry_time:
  folder: Utils
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/

var maintenance = Bot.getProperty("maintenance_mode");
if(maintenance == "on" && user.telegramid != 6054420463){
  Api.sendMessage({text:"🔧 Bot abhi maintenance mode mein hai. Thodi der baad try karo!"});
  Bot.stop();
}
