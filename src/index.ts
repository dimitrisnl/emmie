export type EventHandler = (param?: any) => void;
type EventHandlerList = EventHandler[];

interface EventHandlerMap {
  [event: string]: EventHandlerList;
}

const emmie = (events: EventHandlerMap = {}) => {
  return {
    on: (event: string, handler: EventHandler) => {
      if (!events[event]) {
        events[event] = [];
      }
      events[event].push(handler);
    },

    off: (event: string, handler: EventHandler) => {
      if (events[event]) {
        const handlerIndex = events[event].indexOf(handler);

        if (handlerIndex !== -1) {
          events[event].splice(handlerIndex, 1);
        }
      }
    },

    emit: (event: string, param?: any) => {
      if (events[event]) {
        events[event].forEach(handler => handler(param));
      }
    },
  };
};

export default emmie;
