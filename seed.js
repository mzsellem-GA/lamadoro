require('dotenv').config();
require('./config/database');
const Quote = require('./models/quote')

async function seed() {
    await Quote.deleteMany({});
    const quotes = await Quote.create([
        {   id: "thich_nhat_hanh-8",
            text: "Life is available only in the present moment.",
            byId: "thich_nhat_hanh",
            byName: "Thich Nhat Hanh",
            byImage: "https://buddha-api.com/img/buddhist/thich_nhat_hanh.png"
        },
        {
            id: "dalai_lama-11",
            text: "I defeat my enemies when I make them my friends.",
            byId: "dalai_lama",
            byName: "Dalai Lama",
            byImage: "https://buddha-api.com/img/buddhist/dalai_lama.png"
        },
        {
            id: "dalai_lama-4",
            text: "This is my simple religion. There is no need for temples; no need for complicated philosophy. Our own brain, our own heart is our temple; the philosophy is kindness.",
            byId: "dalai_lama",
            byName: "Dalai Lama",
            byImage: "https://buddha-api.com/img/buddhist/dalai_lama.png"
        },
        {
            id: "dogen-12",
            text: "If he cannot stop the mind that seeks after fame and profit, he will spend his life without finding peace.",
            byId: "dogen",
            byName: "Dogen",
            byImage: "https://buddha-api.com/img/buddhist/dogen.png"
        },
        {
            id: "buddha-6",
            text: "Do not look for a sanctuary in anyone except your self.",
            byId: "buddha",
            byName: "Buddha",
            byImage: "https://buddha-api.com/img/buddhist/buddha.png"
        },
        {
            id: "dogen-7",
            text: "Each moment is all being, each moment is the entire world. Reflect now whether any being or any world is left out of the present moment.",
            byId: "dogen",
            byName: "Dogen",
            byImage: "https://buddha-api.com/img/buddhist/dogen.png"
        },
        {
            id: "dalai_lama-10",
            text: "Through violence, you may `solve` one problem, but you sow the seeds for another.",
            byId: "dalai_lama",
            byName: "Dalai Lama",
            byImage: "https://buddha-api.com/img/buddhist/dalai_lama.png"
        },
        {
            id: "buddha-1",
            text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
            byId: "buddha",
            byName: "Buddha",
            byImage: "https://buddha-api.com/img/buddhist/buddha.png"
        },
        {
            id: "dogen-10",
            text: "But do not ask me where I am going, As I travel in this limitless world, Where every step I take is my home.",
            byId: "dogen",
            byName: "Dogen",
            byImage: "https://buddha-api.com/img/buddhist/dogen.png"
        },
        {
            id: "dalai_lama-3",
            text: "The purpose of our lives is to be happy.",
            byId: "dalai_lama",
            byName: "Dalai Lama",
            byImage: "https://buddha-api.com/img/buddhist/dalai_lama.png"
        }
    ]);
    console.log(quotes)
  
    process.exit();
  
  } seed();