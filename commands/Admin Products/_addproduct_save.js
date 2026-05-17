/*CMD
  command: /addproduct_save
  help: Save new product
  need_reply: false
  auto_retry_time:
  folder: Admin Products
<<ANSWER
ANSWER
<<KEYBOARD
KEYBOARD
  aliases: 
CMD*/
if(user.telegramid!=6054420463){ Api.sendMessage({text:"❌ Access Denied! Admin only."}); return; }

if(!message){ return; }
var parts = message.split("|");
if(parts.length < 5){ Api.sendMessage({text:"❌ Invalid format. Use: Name | Price | Category | Stock | Description"}); return; }
var products = Bot.getProperty("products") ? JSON.parse(Bot.getProperty("products")) : [];
var newProduct = {
  id: "PROD-" + Date.now(),
  name: parts[0].trim(),
  price: parseInt(parts[1].trim()),
  category: parts[2].trim(),
  stock: parseInt(parts[3].trim()),
  description: parts[4].trim(),
  featured: false,
  active: true,
  created: new Date().toISOString()
};
products.push(newProduct);
Bot.setProperty("products", JSON.stringify(products), "json");
Api.sendMessage({text:"✅ Product added!\n\n*" + newProduct.name + "*\n💰 ₹" + newProduct.price + "\n📦 Stock: " + newProduct.stock + "\n📂 Category: " + newProduct.category, parse_mode:"Markdown"});
Api.sendMessage({text:"📋 LOG: Product added - " + newProduct.name + " | User: " + user.telegramid, chat_id:"@JACK_SHOP_LOGS"});
