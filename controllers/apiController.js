const User = require('../models/user');
const read = async (req,res)=>{
    let users;
    try{
        users = await User.find({});
        }catch(err){
            console.log(err);
        }

        return res.status(200).json({
            users
        });
}

const create = async (req,res)=>{
    let user = new User();
    user.name = req.body.name;
    user.phone = "+91" + req.body.phone;

    try{
        await user.save();
    }catch(err){
        console.log(err);
    }

    return res.status(201).json({
        user
    });

}

const del = async (req,res)=>{
    const phone = "+91" + req.body.phone;
    try{
        await User.findOneAndDelete({phone : phone});
    }catch(err){
        console.log(err);
    }

    return res.status(204).json({
        message : "deleted succesfully !!!"
    })
}

module.exports = {
    read,
    create,
    del
}