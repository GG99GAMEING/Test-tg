/*CMD
  command: /addproduct
  help: Add new product
  need_reply: true
  auto_retry_time:
  folder: Admin Products
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

Bot.sendMessage("📦 *Add New Product*\n\nFormat:\nName | Price | Category | Stock | Description\n\nExample: iPhone 15 | 79999 | Electronics | 50 | Latest Apple iPhone");
Bot.run({command:"/addproduct_save"});
