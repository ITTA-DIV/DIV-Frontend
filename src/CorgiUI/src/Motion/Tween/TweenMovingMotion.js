    import { calcPx } from "../../Util/Converter";
  
    export default function TweenMovingMotion(deltaX, deltaY,delay,duration,easetype,ref,operation = "add",repeat = 0) {

      const motion = {
        operation : operation,
        values: {x: calcPx(deltaX), y: calcPx(deltaY)},
        transition: {
          type: "tween",
        duration: duration,
        delay: delay,
        ease: easetype,
        repeat: repeat
      },
    };
    
    ref.handleMotion(motion);
};

