const Telegraf = require("telegraf")

const bot = new Telegraf(process.env.BOT_TOKEN)

// /start
bot.start(ctx => {
  ctx.reply("You have entered the /start command")
})

// /help
bot.help(ctx => {
  ctx.reply("You have entered the /help command")
  console.log("from", ctx.from)
  console.log("message", ctx.message)
})

// /settings
bot.settings(ctx => {
  ctx.reply("You have entered the /settings command")
})

// bot.command("test", ctx => {
bot.command(["test", "Test", "t"], ctx => {
  ctx.reply("You have entered the /test command")
})

// if you add the bot to a group, set Group Privacy to off to allow the .hears() method to work in the group chat
bot.hears("cat", ctx => {
  ctx.reply("Meow")
})

bot.launch()
