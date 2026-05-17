/*CMD
  command: /browse
  help: Browse all categories
  need_reply: false
  auto_retry_time: 
  folder: Shop
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var cats = Bot.getProperty('categories');
try { cats = JSON.parse(cats); } catch(e){ cats = {}; }
if(Object.keys(cats).length == 0){
  Bot.sendMessage('😔 Abhi tak koi category nahi hai.');
  return;
}
var buttons = [];
var entries = Object.entries(cats).filter(function(e){ return e[1].is_active !== false; });
for(var i=0; i<entries.length; i+=2){
  var row = [{title: (entries[i][1].emoji || '📂') + ' ' + entries[i][1].name, command: '/category_products ' + entries[i][0]}];
  if(entries[i+1]) row.push({title: (entries[i+1][1].emoji || '📂') + ' ' + entries[i+1][1].name, command: '/category_products ' + entries[i+1][0]});
  buttons.push(row);
}
buttons.push([{title:'🏠 Main Menu',command:'/mainmenu'}]);
Bot.sendInlineKeyboard(buttons, '📂 *All Categories*\n\nTotal: ' + entries.length + ' categories');
