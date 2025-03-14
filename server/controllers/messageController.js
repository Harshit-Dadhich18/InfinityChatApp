const MessageModels = require("../models/MessageModels");

module.exports.addMessage = async (req, res, next) => {
    try{
        const {from, to,message} = req.body;
        const data = await MessageModels.create({
            message: {text : message },
            users:  [from, to],
            sender: from,
        });
        if(data) return res.json({ msg: "Message added Successfully"});
        return res.json({ msg: "Fialed to add Message to the database"});
    }
    catch(e){
        next(e)
    }
}

module.exports.getAllMessage = async (req, res, next) => {
    try{
        const { from, to} =req.body;
        const messages = await MessageModels.find({
            users:{
                $all:[from, to],
            },
        })
        .sort({ updatedAt: 1 });
        const projectMessages = messages.map((msg)=> {
            return {
                fromSelf: msg.sender.toString() === from,
                message: msg.message.text,
            };
        });
        res.json(projectMessages);
    }catch(e){
        next(e)
    }
}