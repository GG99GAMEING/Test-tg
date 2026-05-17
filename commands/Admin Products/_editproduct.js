/*CMD
  command: /editproduct
  help: Edit product
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

Bot.sendMessage("✏️ *Edit Product*\n\nEnter: ProductID | Field | NewValue\nFields: name, price, category, stock, description\n\nExample: PROD-123 | price | 89999");
Bot.run({command:"/editproduct_save"});
