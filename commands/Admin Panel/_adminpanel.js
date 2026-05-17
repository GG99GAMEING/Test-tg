/*CMD
  command: /adminpanel
  help: Admin panel main menu
  need_reply: false
  auto_retry_time:
  folder: Admin Panel
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

var msg = "🛡️ *JACK SHOP ADMIN PANEL*\n\n";
msg += "👋 Welcome Admin JACK!\n\n";
var pendingProducts = Bot.getProperty("products") ? JSON.parse(Bot.getProperty("products")) : [];
var orders = Bot.getProperty("orders") ? JSON.parse(Bot.getProperty("orders")) : [];
var users = Bot.getProperty("users") ? JSON.parse(Bot.getProperty("users")) : [];
var pendingOrders = orders.filter(function(o){ return o.status=="pending"; });
msg += "📊 *Quick Stats*\n";
msg += "📦 Products: " + pendingProducts.length + "\n";
msg += "📋 Orders: " + orders.length + "\n";
msg += "⏳ Pending: " + pendingOrders.length + "\n";
msg += "👥 Users: " + users.length + "\n";

var ik = [[
  {text:"📊 Dashboard", callback_data:"/cb_admin_dashboard"},
  {text:"📦 Products", callback_data:"/cb_admin_products"}
],[
  {text:"📋 Orders", callback_data:"/cb_admin_orders"},
  {text:"👥 Users", callback_data:"/cb_admin_users"}
],[
  {text:"🎫 Coupons", callback_data:"/cb_admin_coupons"},
  {text:"📢 Broadcast", callback_data:"/cb_admin_broadcast"}
],[
  {text:"💬 Support", callback_data:"/cb_admin_support"},
  {text:"⭐ Reviews", callback_data:"/cb_admin_reviews"}
],[
  {text:"⚙️ Settings", callback_data:"/cb_admin_settings"},
  {text:"💰 Finance", callback_data:"/cb_admin_finance"}
],[
  {text:"📤 Export Data", callback_data:"/cb_admin_export"}
]];

Api.sendMessage({text: msg, parse_mode:"Markdown", reply_markup:{inline_keyboard:ik}});
Api.sendMessage({text:"📋 LOG: Admin accessed panel | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
