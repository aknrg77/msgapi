require('dotenv').config();
const axios = require('axios');
const sendMsg = async(req,res) =>{
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
79.1015625

let lat = req.query.lat;
let long = req.query.long;

const apiCall = await axios.get(`http://api.positionstack.com/v1/reverse?access_key=${process.env.ACCESS_KEY}&query=${long},${lat}&limit=1`);
const data = apiCall.data.data[0];

client.messages
  .create({
     body: `Unfotunately there has been an accident occurred in ${data.name} ,${data.region} exact location : longitude ${data.longitude} , latitude ${data.latitude}`,
     from: '+12055461585',
     to: ['+917905172341','+919571356059','+918349695320']
   })
  .then(message => res.json({
      message : "Message sent succesfully"
  }));

}

module.exports = {
    sendMsg
}