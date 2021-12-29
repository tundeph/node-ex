const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("resp", () => {
  console.log("The Event");
});

customEmitter.emit("resp");
