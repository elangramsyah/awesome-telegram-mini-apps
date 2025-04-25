const TelegramBot = require('node-telegram-bot-api');

// Replace with your token from BotFather
const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  try {
    // Intentionally causing an error for demonstration
    if (!msg.text) {
      throw new Error('Message text is missing!');
    }

    bot.sendMessage(chatId, `You said: ${msg.text}`);
  } catch (error) {
    console.error('An error occurred while processing the message:');
    console.error(error.message);
    
    // Inform the user about the error
    bot.sendMessage(chatId, 'Sorry, there was an error processing your message.');
  }
});