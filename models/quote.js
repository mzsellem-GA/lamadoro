const mongoose = require('mongoose')

const quoteSchema = new mongoose.Schema({
    id: {
        type:String
    },
    text: {
        type:String
    },
    byId: {
        type: String
    },
    byName: {
        type: String
    },
    byImage: {
        type: String
    },
  });
  
module.exports = mongoose.model('Quote', quoteSchema);
  