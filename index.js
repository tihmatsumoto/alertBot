require('dotenv').config();

const telegram = require('node-telegram-bot-api');
const bot = new telegram(process.env.TELEGRAM_TOKEN);

const main = async () => {
    const message = "Scheduling is available.";
    bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message);
    console.log(message);
}

main();
