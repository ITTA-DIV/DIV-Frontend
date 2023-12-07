export default function SpringMotion(key,deltaValue,delay,DMS,ref,operation,repeat = 0) {

    const motion = {
      operation : operation,
      values: {[key]: deltaValue},
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
        ease: easetype,
        repeat: repeat
      }
    }
  
  ref.handleMotion(motion);
  };
  
  