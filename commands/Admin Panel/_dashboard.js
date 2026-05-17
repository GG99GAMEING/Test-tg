/*CMD
  command: /dashboard
  help: Admin dashboard with stats
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

var products = Bot.getProperty("products") ? JSON.parse(Bot.getProperty("products")) : [];
var orders = Bot.getProperty("orders") ? JSON.parse(Bot.getProperty("orders")) : [];
var users = Bot.getProperty("users") ? JSON.parse(Bot.getProperty("users")) : [];
var coupons = Bot.getProperty("coupons") ? JSON.parse(Bot.getProperty("coupons")) : [];
var totalRevenue = 0;
orders.forEach(function(o){ if(o.status!="cancelled") totalRevenue += o.total || 0; });
var pendingOrders = orders.filter(function(o){ return o.status=="pending"; });
var todayOrders = orders.filter(function(o){ return o.date && o.date.includes(new Date().toISOString().slice(0,10)); });

var msg = "📊 *ADMIN DASHBOARD*\n\n";
msg += "💰 Total Revenue: ₹" + totalRevenue.toLocaleString() + "\n";
msg += "📦 Total Products: " + products.length + "\n";
msg += "📋 Total Orders: " + orders.length + "\n";
msg += "⏳ Pending Orders: " + pendingOrders.length + "\n";
msg += "📅 Today Orders: " + todayOrders.length + "\n";
msg += "👥 Total Users: " + users.length + "\n";
msg += "🎫 Active Coupons: " + coupons.filter(function(c){ return c.active; }).length + "\n";

var ik = [[{text:"🔄 Refresh", callback_data:"/cb_admin_dashboard"},{text:"🔙 Back", callback_data:"/cb_adminpanel"}]];
Api.sendMessage({text: msg, parse_mode:"Markdown", reply_markup:{inline_keyboard:ik}});
Api.sendMessage({text:"📋 LOG: Dashboard viewed | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
