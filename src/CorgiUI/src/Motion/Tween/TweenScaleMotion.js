
  export default function TweenScaleMotion(deltaScaleX,deltaScaleY,delay,duration,easetype,ref,operation = "multifly",repeat = 0) {

      const motion = {
        operation : operation,
        values : {scaleX : deltaScaleX, scaleY : deltaScaleY},
        transition: {
          type: "tween",
        duration: duration,
        delay: delay,
        ease:easetype,
        repeat: repeat
      },
    }
   
   ref.handleMotion(motion);
   };