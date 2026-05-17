/*CMD
  command: /categories
  help: List categories
  need_reply: false
  auto_retry_time: 
  folder: Shop
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var cats = Bot.getProperty('categories');
try { cats = JSON.parse(cats); } catch(e){ cats = {}; }
if(Object.keys(cats).length == 0){ Bot.sendMessage('😔 No categories yet.'); return; }
var text = '📂 *All Categories*\n\n';
var entries = Object.entries(cats).filter(function(e){ return e[1].is_active !== false; });
entries.forEach(function(e, i){
  text += (i+1) + '. ' + (e[1].emoji || '📂') + ' *' + e[1].name + '*\n';
  var subs = e[1].subcategories;
  if(subs && Object.keys(subs).length > 0){
    var subArr = Object.values(subs).filter(function(s){ return s.is_active !== false; });
    subArr.forEach(function(s){ text += '   └ ' + (s.emoji || '') + ' ' + s.name + '\n'; });
  }
});
text += '\nKisi category ke products dekhne ke liye /shop use karein.';
Bot.sendMessage(text, {parse_mode:'Markdown'});
