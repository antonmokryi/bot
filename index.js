import TelegramApi from 'node-telegram-bot-api';


let token = '6487169859:AAF-eYBe_rcAfLhgFHuGiAmS1-_bj3Hy-pw'
let adminId = 440380344
// html, css, js simple 
// node js hard
// 1692109658 1970 1 September seconds
const bot = new TelegramApi(token, {polling: true})

bot.on('message', function (message) {
    console.log(message.text)
    if (message.text == '/start') {
        bot.sendMessage(message.chat.id, 'hello!')
    }
    else if (message.text == '/help') {
        bot.sendMessage(message.chat.id, 'can i help you??')
    }
})
