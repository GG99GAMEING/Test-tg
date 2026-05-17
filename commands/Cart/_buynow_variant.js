/*CMD
  command: /buynow_variant
  help: Buy now with variant
  need_reply: true
  auto_retry_time: 
  folder: Cart
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var parts = message.trim().split(' ');
var prodId = parts[0];
var variant = parts[1] || '';
var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var p = prods[prodId];
if(!p){ Bot.sendMessage('❌ Product nahi mila.'); return; }
var price = p.price;
if(variant && p.variants && p.variants[variant]){ price = p.variants[variant].price; }
var cartKey = (Bot.getProperty('cart_prefix') || 'cart_') + uid;
Bot.setProperty(cartKey, JSON.stringify({items:[{product_id:prodId, qty:1, price:price, variant:variant, size:'', color:''}], discount:0, coupon_code:''}), 'string');
Bot.sendMessage('⚡ *' + p.name + '* (' + variant + ') — ₹' + price + '\nDirect checkout: /checkout', {parse_mode:'Markdown'});
