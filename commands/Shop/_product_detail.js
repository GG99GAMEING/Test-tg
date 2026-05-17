/*CMD
  command: /product_detail
  help: Detailed product view
  need_reply: true
  auto_retry_time: 
  folder: Shop
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var prodId = message.trim();
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var p = prods[prodId];
if(!p){ Bot.sendMessage('❌ Product nahi mila.'); return; }

var text = '🔍 *' + p.name + ' — Full Details*\n\n' +
  '📝 *Description:*\n' + (p.description || 'N/A') + '\n\n' +
  '💰 *Price:* ₹' + p.price + '\n' +
  (p.mrp > p.price ? '📛 *MRP:* ~~₹' + p.mrp + '~~\n' : '') +
  '📦 *Stock:* ' + (p.stock || 0) + '\n' +
  '🏷️ *Brand:* ' + (p.brand || 'N/A') + '\n' +
  '🔢 *SKU:* ' + (p.sku || 'N/A') + '\n' +
  '⚖️ *Weight:* ' + (p.weight || 'N/A') + '\n' +
  '⭐ *Rating:* ' + (p.rating || 0) + '/5 (' + (p.review_count || 0) + ' reviews)\n' +
  '🏷️ *Tags:* ' + (p.tags ? p.tags.join(', ') : 'N/A') + '\n' +
  '🚚 *Free Shipping:* ' + (p.free_shipping ? 'Yes' : 'No') + '\n' +
  '📦 *COD:* ' + (p.cod_available !== false ? 'Available' : 'Not Available');

var buttons = [
  [{title:'🛒 Add to Cart',command:'/addtocart ' + prodId},{title:'⚡ Buy Now',command:'/buynow ' + prodId}],
  [{title:'❤️ Wishlist',command:'/addwishlist ' + prodId}],
  [{title:'🔙 Back',command:'/shop'}]
];
Bot.sendInlineKeyboard(buttons, text);
