

export var GlobalController = (function () {
  var instance;

  function createInstance() {
    var globalController = {};
    globalController.eventTarget = new EventTarget();
    globalController.eventList = {}
    globalController.handleMotion = function (event,eventName,state = 0,value = 0) {
      const newevent = new CustomEvent(eventName, {
        detail:{
          state:  state ?? event.detail.state,
          value : value ?? event.detail.value
        }
      });

      globalController.eventTarget.dispatchEvent(newevent);
    };

    return globalController;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

  