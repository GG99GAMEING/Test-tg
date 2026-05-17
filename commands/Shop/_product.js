/*CMD
  command: /product
  help: Show product details
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
var prodId = message.trim();
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var p = prods[prodId];
if(!p){ Bot.sendMessage('❌ Product nahi mila! ID check karein.'); return; }
if(p.is_active === false){ Bot.sendMessage('❌ Ye product ab available nahi hai.'); return; }

var discPct = p.mrp > p.price ? Math.round((p.mrp - p.price) / p.mrp * 100) : 0;
var text = '🛍️ *' + p.name + '*\n\n' +
  (p.description ? '📝 ' + p.description + '\n\n' : '') +
  '💰 *Price:* ₹' + p.price;
if(p.mrp > p.price){ text += '  ~~MRP: ₹' + p.mrp + '~~  (' + discPct + '% OFF!)'; }
text += '\n📦 *Stock:* ' + (p.stock || 0) + ' available';
if(p.brand){ text += '\n🏷️ *Brand:* ' + p.brand; }
if(p.sku){ text += '\n🔢 *SKU:* ' + p.sku; }
if(p.weight){ text += '\n⚖️ *Weight:* ' + p.weight; }
if(p.rating){ text += '\n⭐ *Rating:* ' + p.rating + '/5 (' + (p.review_count || 0) + ' reviews)'; }
if(p.free_shipping){ text += '\n🚚 Free Shipping!'; }
if(p.cod_available !== false){ text += '\n📦 COD Available'; }

var buttons = [
  [{title:'🛒 Add to Cart',command:'/addtocart ' + prodId},{title:'⚡ Buy Now',command:'/buynow ' + prodId}],
  [{title:'❤️ Wishlist',command:'/addwishlist ' + prodId},{title:'⭐ Reviews',command:'/reviews ' + prodId}]
];
if(p.variants && Object.keys(p.variants).length > 0){ buttons.unshift([{title:'📋 Variants',command:'/product_variants ' + prodId}]); }
if(p.sizes && p.sizes.length > 0){ buttons[buttons.length] = [{title:'📏 Sizes',command:'/product_sizes ' + prodId}]; }
if(p.colors && p.colors.length > 0){ buttons[buttons.length] = [{title:'🎨 Colors',command:'/product_colors ' + prodId}]; }
buttons.push([{title:'🔙 Back',command:'/shop'}]);

if(p.images && p.images.length > 0){
  Bot.sendPhoto(p.images[0]);
}
Bot.sendInlineKeyboard(buttons, text);
