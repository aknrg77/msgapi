require('dotenv').config();
const axios = require('axios');
const sendMsg = async(req,res) =>{
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const User = require('../models/user');

let lat = req.query.lat;
let long = req.query.long;

let apiCall;
try{
    apiCall = await axios.get(`http://api.positionstack.com/v1/reverse?access_key=${process.env.ACCESS_KEY}&query=${long},${lat}&limit=1`);
}catch(err){
    console.log(err);
}
const data = apiCall.data.data[0];
let users;
try{
users = await User.find({});
}catch(err){
    console.log(err);
}
const numbers = [];
    users.forEach(function(x){
        numbers.push(x.phone);
    });

try{
    numbers.forEach(async number => {
const create = await client.messages.create({
     body: `Unfotunately there has been an accident occurred in ${data.name} ,${data.region} exact location : longitude ${data.longitude} , latitude ${data.latitude}`,
     from: '+12055461585',
     to: number
   });  

   res.status(200).send({
    message : "Message sent succesfully"
    });
});

}catch(err){
    console.log(err);
}



}

module.exports = {
    sendMsg
}