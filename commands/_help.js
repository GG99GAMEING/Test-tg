/*CMD
  command: /help
  help: Help & commands list
  need_reply: false
  auto_retry_time: 
  folder: 
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var helpText = '📖 *JACK SHOP — Help Guide*\n\n' +
'🛍️ *Shop Commands:*\n' +
'/shop — Browse shop categories\n' +
'/browse — All categories list\n' +
'/categories — View categories\n' +
'/featured — Featured products\n' +
'/new_arrivals — New products\n' +
'/best_sellers — Best selling items\n' +
'/deals — Current deals\n' +
'/flash_sale — Flash sale items\n' +
'/under_price — Filter by max price\n' +
'/price_range — Filter by price range\n' +
'/search — Search products\n\n' +
'🛒 *Cart Commands:*\n' +
'/cart — View cart\n' +
'/addtocart — Add item to cart\n' +
'/removecart — Remove item\n' +
'/clearcart — Clear cart\n' +
'/buynow — Buy instantly\n\n' +
'💳 *Checkout & Payment:*\n' +
'/checkout — Start checkout\n' +
'/payment — Choose payment method\n\n' +
'📦 *Orders:*\n' +
'/myorders — My orders\n' +
'/orderdetails — Order details\n' +
'/track_order — Track order\n' +
'/cancel_order — Cancel order\n' +
'/reorder — Reorder items\n\n' +
'👛 *Wallet:*\n' +
'/wallet — Wallet menu\n' +
'/addfunds — Add funds\n' +
'/wallet_history — Transaction history\n\n' +
'👤 *Account:*\n' +
'/account — Account menu\n' +
'/profile — View profile\n' +
'/myaddress — Saved addresses\n' +
'/myvip — VIP level\n' +
'/loyalty_points — Loyalty points\n\n' +
'🎁 *Referral:*\n' +
'/referral — Referral hub\n' +
'/reflink — Get referral link\n\n' +
'🎰 *Rewards:*\n' +
'/daily_reward — Daily bonus\n' +
'/spin_wheel — Spin & win\n' +
'/checkin — Daily check-in\n' +
'/leaderboard — Top spenders\n\n' +
'🆘 *Support:*\n' +
'/support — Support menu\n' +
'/createticket — Create ticket\n' +
'/mytickets — My tickets\n' +
'/faq — FAQ\n\n' +
'Hamesha /mainmenu se main menu par aa sakte hain!';
Bot.sendMessage(helpText, {parse_mode:'Markdown'});
