const { Telegraf } = require("telegraf");
const crypto = require("crypto-js");
const web_link = "https://tg.covey.baboons.tech/";
const TOKEN = "8158652234:AAEtFM3Q3gNZv5vsNrltxPN9Wx2uSGNEIUY";

const bot = new Telegraf(TOKEN);
var secretKey =
  "02PhgD8F4bgtA0T8WB2/y0dvrtHKXXMwtht3HZgyHSzAUrJwXRYjUV9z0lLB3siu";

function random16String() {
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return String(result);
}

function encrypt(text) {
  var derived_key = crypto.enc.Base64.parse(secretKey);

  let randomInt16 = random16String();
  // Generating a random 16-digit string to be used as the initialization vector (IV)
  var iv = crypto.enc.Utf8.parse(randomInt16);

  // Encrypting
  var payload = crypto.AES.encrypt(text, derived_key, {
    iv: iv,
    mode: crypto.mode.CBC,
  }).toString();
  return randomInt16 + payload;
}

bot.command("start", async (ctx) => {
  let userId = ctx.update.message.from.id;
  let encrypted = "+";
  do {
    encrypted = encrypt(userId.toString());
  } while (encrypted.includes("+"));
  if (userId && encrypted) {
    ctx.setChatMenuButton({
      text: "Game",
      type: "web_app",
      web_app: {
        url: web_link + "?tgId=" + encodeURIComponent(encrypted),
      },
    });
  } else {
    ctx.reply("Failed to encrypt. Please type start again");
  }
  // sets Web App as the menu button for current chat
});

bot.launch();
