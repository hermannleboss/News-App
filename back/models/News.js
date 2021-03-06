const mongoose=require('mongoose');
const newsSchema=mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    userId: { type: String, required: true },
});

module.exports=mongoose.model('News', newsSchema);