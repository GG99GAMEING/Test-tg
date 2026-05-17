/*CMD
  command: /addtocart
  help: Add to cart
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
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';
var parts = message.trim().split(' ');
var prodId = parts[0];
var qty = parseInt(parts[1]) || 1;
var variant = parts[2] || '';
var size = parts[3] || '';
var color = parts[4] || '';

var prods = Bot.getProperty('products');
try { prods = JSON.parse(prods); } catch(e){ prods = {}; }
var p = prods[prodId];
if(!p || p.is_active === false){ Bot.sendMessage('❌ Product nahi mila ya unavailable hai.'); return; }

// Determine price
var price = p.price;
if(variant && p.variants && p.variants[variant]){
  price = p.variants[variant].price || p.price;
  var varStock = p.variants[variant].stock || 0;
  if(varStock < qty){ Bot.sendMessage('⚠️ *' + p.name + '* (' + variant + ') ka stock kam hai. Available: ' + varStock); return; }
} else {
  if((p.stock || 0) < qty){ Bot.sendMessage('⚠️ *' + p.name + '* ka stock nahi hai. Available: ' + (p.stock || 0)); return; }
}

var cartKey = (Bot.getProperty('cart_prefix') || 'cart_') + uid;
var cart = Bot.getProperty(cartKey);
try { cart = JSON.parse(cart); } catch(e){ cart = {items:[], discount:0, coupon_code:''}; }
if(!cart || !cart.items){ cart = {items:[], discount:0, coupon_code:''}; }

// Check if product already in cart
var found = false;
cart.items.forEach(function(item){
  if(item.product_id == prodId && item.variant == variant && item.size == size && item.color == color){
    item.qty = (item.qty || 1) + qty;
    found = true;
  }
});
if(!found){
  cart.items.push({product_id: prodId, qty: qty, price: price, variant: variant, size: size, color: color});
}

Bot.setProperty(cartKey, JSON.stringify(cart), 'string');
var totalItems = cart.items.reduce(function(s,i){ return s + (i.qty || 1); }, 0);
Bot.sendMessage('✅ *' + p.name + '* cart mein add ho gaya!\n\n🛒 Cart mein ' + totalItems + ' items hain.\n\nView: /cart', {parse_mode:'Markdown'});
Bot.sendMessage('🛒 *Cart Add*\n👤 ' + (user.first_name || 'User') + ' (' + uid + ')\n📦 ' + p.name + '\n🔢 Qty: ' + qty + '\n💰 Price: ₹' + price + '\n📊 Cart Items: ' + totalItems, {chat_id: LOG, parse_mode:'Markdown'});
