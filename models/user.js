const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name :{
        type : String,
        required:true
    },
    phone : {
        type : String,
        required : true,
        unique : true
    }
});

module.exports = mongoose.model("user",userSchema);