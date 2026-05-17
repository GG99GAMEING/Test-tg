/*CMD
  command: /subcategory
  help: Show subcategories
  need_reply: true
  auto_retry_time: 
  folder: Shop
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var catId = message.trim();
var cats = Bot.getProperty('categories');
try { cats = JSON.parse(cats); } catch(e){ cats = {}; }
var cat = cats[catId];
if(!cat){ Bot.sendMessage('❌ Invalid category ID.'); return; }

var subs = cat.subcategories;
if(!subs || Object.keys(subs).length == 0){
  Bot.sendMessage('📂 Is category mein koi subcategory nahi hai. Products dekhne ke liye /category_products ' + catId + ' use karein.');
  return;
}

var buttons = [];
var entries = Object.entries(subs).filter(function(e){ return e[1].is_active !== false; });
for(var i=0; i<entries.length; i+=2){
  var row = [{title: (entries[i][1].emoji || '📁') + ' ' + entries[i][1].name, command: '/category_products ' + entries[i][0]}];
  if(entries[i+1]) row.push({title: (entries[i+1][1].emoji || '📁') + ' ' + entries[i+1][1].name, command: '/category_products ' + entries[i+1][0]});
  buttons.push(row);
}
buttons.push([{title:'🔙 Back to Categories',command:'/shop'}]);
Bot.sendInlineKeyboard(buttons, '📂 *' + cat.name + ' — Subcategories*');
