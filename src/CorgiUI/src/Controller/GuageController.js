import { GlobalControllerInstance } from "../index";

export default function GuageController(event,eventName,minValue = -Infinity , maxValue = Infinity, cycle = false) {
    if(GlobalControllerInstance.eventList[eventName] == null){
        GlobalControllerInstance.eventList[eventName] = {
            event : new CustomEvent(eventName, {
                detail : {
                  state : 0,
                  value : 0
                }}),
            eventName : eventName,
            minValue : minValue,
            maxValue : maxValue,
            cycle : cycle,
            handleMotion : (event) =>{
                const currentOrigin = GlobalControllerInstance.eventList[eventName];
                const currentEvent = currentOrigin.event;
                const currentValue = currentEvent.detail.value;
                    if(event.detail.state > 0){
                        currentEvent.detail.state = 1;
                        currentEvent.detail.value =  
                        (currentValue +1 > currentOrigin.maxValue ? 
                        (currentOrigin.cycle ?  (currentOrigin.minValue) : (currentValue))
                        : (currentValue + 1))
                    }
                    else{
                        currentEvent.detail.state = -1;
                        currentEvent.detail.value =  
                        (currentValue -1 < currentOrigin.minValue ? 
                        (currentOrigin.cycle ?  (currentOrigin.maxValue) : (currentValue))
                        : (currentValue - 1))
                    }
                
                GlobalControllerInstance.eventList[eventName].event = currentEvent;
                GlobalControllerInstance.eventTarget.dispatchEvent(currentEvent);
              }
            }
        }
        GlobalControllerInstance.eventList[eventName].handleMotion(event);
  };
  