# Required BB Libraries

## 1. ResourcesLib
Balances, wallets, counters, stock tracking
```javascript
var libs = Libs.ResourcesLib;
var userRes = libs.userRes("balance");
var amount = userRes.value(); // Get balance
userRes.add(100); // Add
userRes.remove(50); // Remove
```

## 2. ReferralLib
Referral system with bonus tracking
```javascript
var refLib = Libs.ReferralLib;
refLib.addReferral(user.telegramid);
var refs = refLib.getRefList();
```

## 3. commonLib
User mention links, utilities
```javascript
var mention = Libs.commonLib.getLinkFor(user);
```

## 4. DateTimeFormat
Date/time formatting for orders/invoices
```javascript
var dt = Libs.DateTimeFormat.format(new Date(), "dd/MM/yyyy HH:mm");
```

## 5. Random
Random code generation, lottery, giveaways
```javascript
var code = Libs.Random.randomString(8);
var num = Libs.Random.randomInt(1, 100);
```

## 6. Webhooks
HTTP request handling for Razorpay API
```javascript
Libs.Webhooks.sendRequest({
  url: "https://api.razorpay.com/v1/orders",
  method: "POST",
  body: data
});
```
