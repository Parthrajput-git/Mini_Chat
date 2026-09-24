const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successfull");

}).catch((err) => {
    console.log(err);

});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
};


let allChats = [{
    from: "Kiya",
    to: "Preet",
    msg: "Let's go to my home and some eat food",
    created_at: new Date()
},
{
    from: "Neha",
    to: "Piya",
    msg: "Hii, How are you",
    created_at: new Date()
},
{
    from: "Shivam",
    to: "Rahan",
    msg: "Send me a JavaScript notes.",
    created_at: new Date()
},
{
    from: "Komal",
    to: "Goli",
    msg: "Are are tired my child.",
    created_at: new Date()
}];


Chat.insertMany(allChats);
