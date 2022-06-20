class Events {
  constructor() {
    this.events = {};
  }
  on(eventName, callBack) {
    if (this.events[eventName]) {
      this.events[eventName].push(callBack);
    } else {
      this.events[eventName] = [callBack];
    }
  }

  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }

  off(eventName) {
    delete this.events[eventName];
  }
}

const newEventsController = new Events();

const printer1 = () => console.log("I am printer1");
const printer2 = () => console.log("I am printer2");

newEventsController.on("printer", printer1);
newEventsController.on("printer", printer2);
newEventsController.on("printer", printer2);
newEventsController.on("printer", printer1);

newEventsController.off("printer");

newEventsController.trigger("printer");
