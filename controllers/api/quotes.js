const Quote = require('../../models/quote')

async function indexQuotes(req, res) {
    const quotes = await Quote.find({});
    res.json(quotes);
}

module.exports = {
    indexQuotes
}