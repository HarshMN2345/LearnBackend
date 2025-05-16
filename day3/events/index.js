const EventsEmitter=require("node:events");
const myfirstEventEmitter=new EventsEmitter();
myfirstEventEmitter.on("start",(name)=>{
    console.log("greet "+ name);
})

myfirstEventEmitter.emit("start","harsh");