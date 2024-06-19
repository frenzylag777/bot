const mineflayer = require("mineflayer")

const bot = mineflayer.createBot({
  nickname: "TpsBot1",
  host: "topserver1337228.aternos.me",
  port: 48855,
  version: "1.12.2"
})

bot.on("message", jsonMsg => {
  if(`${jsonMsg}`.includes("register") ===  true)
    bot.chat("/register 123qwe 123qwe")
  if(`${jsonMsg}`.includes("login") ===  true)
    bot.chat("/login 123qwe")
  if(`${jsonMsg}`.includes("In order to use this command you must be authenticated!") ===  true)
    bot.chat("/login 123qwe")
})

bot.on("message", jsonMsg => {
  console.log(`${jsonMsg}`);
  if (`${jsonMsg}`.includes("TPS") === true)
    setTimeout(() => bot.chat("/tps"), 10000);
})

bot.on("message", jsonMsg => {
  if (`${jsonMsg}`.includes("НАШ АЙПИ:") === true)
    setTimeout(() => bot.chat("/bc НАШ АЙПИ: topserver1337228.aternos.me"), 120000);
})

bot.on("message", jsonMsg => {
  if (`${jsonMsg}`.includes("НАШ САЙТ:") === true)
    setTimeout(() => bot.chat("/bc НАШ САЙТ: https://tinyurl.com/topserversite"), 60000);
})
while (condition) {
  setTimeout(() => bot.chat("/tp ~ ~10 ~"), 10000);
}
