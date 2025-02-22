const models = require("../models/messageModels");

async function OnChat(io, socket, data){
    try{
        const {content, sender, group} = data;
        
        if(!await models.isUserInGroup(group, sender))
        await models.addToGroup(group, sender);
    
        await models.addMessage(content, sender, group);

        io.sockets.emit("new_chat", {content, sender, group});
    }
    catch(e){
        console.log(e);
    }
}

async function getMessages(req, res){
    try{
        const {group} = req.body;

        let chats = models.getMessages(group);
        res.status(200).json({
            chats,
            group
        });
    }
    catch(e){
        console.log(e);
        res.status(500).send("Internal Error");
    }
}

module.exports = {
    OnChat,
    getMessages
}