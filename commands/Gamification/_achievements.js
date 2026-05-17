/*CMD
  command: /achievements
  help: Achievements
  need_reply: false
  auto_retry_time: 
  folder: Gamification
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
var uid = String(user.telegramid);
var LOG = Bot.getProperty('log_channel') || '@JACK_SHOP_LOGS';

var spent = parseFloat(Bot.getProperty('user_total_spent_' + uid)||0);
var orders = 0;
var ordersData = Bot.getProperty('orders');
try { ordersData = JSON.parse(ordersData); } catch(e){ ordersData = {}; }
Object.values(ordersData).forEach(function(o){ if(String(o.user_id)==uid) orders++; });
var reviews = 0;
var reviewsData = Bot.getProperty('reviews');
try { reviewsData = JSON.parse(reviewsData); } catch(e){ reviewsData = {}; }
Object.values(reviewsData).forEach(function(r){ if(String(r.user_id)==uid && r.status=='approved') reviews++; });
var refs = Bot.getProperty('ref_users_' + uid); try { refs = JSON.parse(refs); } catch(e){ refs = []; }

var text = '🏆 *Achievements*\n\n';
text += (orders>=1?'✅':'🔒') + ' First Order\n';
text += (orders>=10?'✅':'🔒') + ' 10 Orders Placed\n';
text += (orders>=50?'✅':'🔒') + ' 50 Orders Placed\n';
text += (spent>=1000?'✅':'🔒') + ' Spent ₹1,000\n';
text += (spent>=10000?'✅':'🔒') + ' Spent ₹10,000\n';
text += (spent>=50000?'✅':'🔒') + ' Spent ₹50,000\n';
text += (reviews>=1?'✅':'🔒') + ' First Review\n';
text += (reviews>=5?'✅':'🔒') + ' 5 Reviews Written\n';
text += ((refs||[]).length>=5?'✅':'🔒') + ' 5 Referrals\n';
text += ((refs||[]).length>=20?'✅':'🔒') + ' 20 Referrals\n';
Bot.sendMessage(text, {parse_mode:'Markdown'});
