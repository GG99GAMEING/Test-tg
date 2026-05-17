/*CMD
  command: /start
  help: Start the bot
  need_reply: false
  auto_retry_time: 
  folder: 
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var ADMIN_ID = '6054420463';
var LOG_CHANNEL = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';
var uid = String(user.telegramid);
var isAdmin = (uid == ADMIN_ID);

// Ban check
var banned = Bot.getProperty('banned_' + uid);
if(banned){ Bot.sendMessage('⛔ Aapka account ban kar diya gaya hai. Support se contact karein: /support'); return; }

// Maintenance check
var maint = Bot.getProperty('maintenance');
if(maint == 'true' && !isAdmin){ Bot.sendMessage('🔧 Bot abhi maintenance mode mein hai. Thodi der baad try karein.'); return; }

// First-time admin initialization
if(isAdmin){
  var inited = Bot.getProperty('bot_initialized');
  if(!inited){
    Bot.setProperty('bot_initialized', true, 'boolean');
    Bot.setProperty('maintenance', 'false', 'string');
    Bot.setProperty('currency', 'INR', 'string');
    Bot.setProperty('razorpay_key_id', '', 'string');
    Bot.setProperty('razorpay_key_secret', '', 'string');
    Bot.setProperty('upi_id', '', 'string');
    Bot.setProperty('upi_name', 'JACK SHOP', 'string');
    Bot.setProperty('log_channel', '@JACK_SHOP_LOGS', 'string');
    Bot.setProperty('shipping_charge', 50, 'integer');
    Bot.setProperty('free_shipping_above', 500, 'integer');
    Bot.setProperty('cod_available', 'true', 'string');
    Bot.setProperty('wallet_enabled', 'true', 'string');
    Bot.setProperty('referral_bonus', 25, 'integer');
    Bot.setProperty('daily_reward_min', 5, 'integer');
    Bot.setProperty('daily_reward_max', 20, 'integer');
    Bot.setProperty('spin_prizes', '[0,5,10,25,50]', 'string');
    Bot.setProperty('spin_weights', '[40,25,20,10,5]', 'string');
    Bot.setProperty('loyalty_rate', 100, 'integer');
    Bot.setProperty('points_to_wallet', 10, 'integer');
    Bot.setProperty('vip_levels', '[1000,5000,10000,25000,50000]', 'string');
    Bot.setProperty('total_users', 0, 'integer');
    Bot.setProperty('total_orders', 0, 'integer');
    Bot.setProperty('total_revenue', 0, 'integer');
    Bot.setProperty('categories', '{}', 'string');
    Bot.setProperty('products', '{}', 'string');
    Bot.setProperty('orders', '{}', 'string');
    Bot.setProperty('users', '{}', 'string');
    Bot.setProperty('coupons', '{}', 'string');
    Bot.setProperty('tickets', '{}', 'string');
    Bot.setProperty('reviews', '{}', 'string');
    Bot.setProperty('wishlist_prefix', 'wishlist_', 'string');
    Bot.setProperty('cart_prefix', 'cart_', 'string');
    Bot.setProperty('wallet_prefix', 'wallet_', 'string');
    Bot.setProperty('ref_prefix', 'ref_', 'string');
    Bot.setProperty('shop_name', 'JACK SHOP', 'string');
    Bot.sendMessage('✅ *Bot Initialized Successfully!*\n\nWelcome Admin JACK! Sab settings default set ho gayi hain.', {parse_mode:'Markdown'});
    Bot.sendMessage('🟢 *Bot Initialized*\n👤 Admin: JACK (' + uid + ')\n📅 ' + new Date().toLocaleString('en-IN'), {chat_id: LOG_CHANNEL, parse_mode:'Markdown'});
  }
}

// Check if new user
var isNew = !Bot.getProperty('user_registered_' + uid);
if(isNew){
  Bot.setProperty('user_registered_' + uid, true, 'boolean');
  Bot.setProperty('user_name_' + uid, user.first_name || 'User', 'string');
  Bot.setProperty('user_username_' + uid, user.username || 'N/A', 'string');
  Bot.setProperty('user_joined_' + uid, new Date().toISOString(), 'string');
  Bot.setProperty('user_phone_' + uid, '', 'string');
  Bot.setProperty('user_email_' + uid, '', 'string');
  Bot.setProperty('user_vip_' + uid, 0, 'integer');
  Bot.setProperty('user_total_spent_' + uid, 0, 'integer');
  Bot.setProperty('user_loyalty_points_' + uid, 0, 'integer');
  Bot.setProperty('user_lang_' + uid, 'hinglish', 'string');
  Bot.setProperty('user_notifications_' + uid, 'true', 'string');

  var totalUsers = Bot.getProperty('total_users') || 0;
  Bot.setProperty('total_users', parseInt(totalUsers) + 1, 'integer');

  // Save to users JSON
  var users = Bot.getProperty('users');
  try { users = JSON.parse(users); } catch(e){ users = {}; }
  users[uid] = {
    name: user.first_name || 'User',
    username: user.username || 'N/A',
    joined_at: new Date().toISOString(),
    phone: '', email: '', vip_level: 0,
    total_spent: 0, loyalty_points: 0,
    notifications: true, lang: 'hinglish'
  };
  Bot.setProperty('users', JSON.stringify(users), 'string');

  var logMsg = '🆕 *New User Registered!*\n👤 Name: ' + (user.first_name || 'User') + '\n🆔 ID: ' + uid + '\n📛 @' + (user.username || 'N/A') + '\n📅 ' + new Date().toLocaleString('en-IN') + '\n👥 Total Users: ' + (parseInt(totalUsers) + 1);
  Bot.sendMessage(logMsg, {chat_id: LOG_CHANNEL, parse_mode:'Markdown'});

  // Referral handling
  var ref = params;
  if(ref && ref != '' && ref != uid){
    var refBonus = parseInt(Bot.getProperty('referral_bonus') || 25);
    Bot.setProperty('user_referred_by_' + uid, ref, 'string');
    var refUsers = Bot.getProperty('ref_users_' + ref);
    try { refUsers = JSON.parse(refUsers); } catch(e){ refUsers = []; }
    if(!refUsers){ refUsers = []; }
    refUsers.push(uid);
    Bot.setProperty('ref_users_' + ref, JSON.stringify(refUsers), 'string');
    Bot.setProperty('ref_pending_bonus_' + ref + '_' + uid, refBonus, 'integer');
    var refLog = '🔗 *Referral Link Used!*\n👤 New: ' + (user.first_name || 'User') + ' (' + uid + ')\n🎁 Referrer: ' + ref + '\n💰 Pending Bonus: ₹' + refBonus;
    Bot.sendMessage(refLog, {chat_id: LOG_CHANNEL, parse_mode:'Markdown'});
  }
}

// Welcome message
var shopName = Bot.getProperty('shop_name') || 'JACK SHOP';
var welcomeText = '🛍️ *' + shopName + ' mein aapka swagat hai!*\n\n🇮🇳 India ka Best Telegram E-Commerce Store!\n\n💎 *Features:*\n✅ 1000+ Products\n✅ Razorpay/UPI/COD Payment\n✅ Fast Delivery\n✅ 24/7 Support\n\nNeeche se option choose karein:';

var buttons = [
  [{title:'🛍️ Shop',command:'/shop'},{title:'🛒 Cart',command:'/cart'}],
  [{title:'📦 Orders',command:'/myorders'},{title:'👛 Wallet',command:'/wallet'}],
  [{title:'👤 Account',command:'/account'},{title:'🔍 Search',command:'/search'}],
  [{title:'❤️ Wishlist',command:'/wishlist'},{title:'🎁 Referral',command:'/referral'}],
  [{title:'🎰 Daily Reward',command:'/daily_reward'},{title:'🆘 Support',command:'/support'}]
];
if(isAdmin){ buttons.push([{title:'⚙️ Admin Panel',command:'/admin'}]); }
Bot.sendInlineKeyboard(buttons, welcomeText);
