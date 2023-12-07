  
export default function TweenFilterMotion(deltaFilter,delay,duration,easetype,ref,operation ="change",repeat = 0) {
    const motion = {
      operation : operation,
      values: {filter: deltaFilter},
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
  
  
  