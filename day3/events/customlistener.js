const events = require('events');
class myCustomListener extends events.EventEmitter {
    constructor() {
        super();
        this.greeting="hello";
    }
    greet(name) {
        this.emit('greeting',`${this.greeting} ${name}`);
    }
}
const myfirstEventEmitter = new myCustomListener();
myfirstEventEmitter.on('greeting', (message) => {
    console.log(message);
});
myfirstEventEmitter.greet('harsh');