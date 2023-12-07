
  export default function TweenOpacityMotion(deltaOpacity,delay,duration,easetype,ref,operation = "add",repeat = 0) {

    const motion = {
      operation : operation,
      values:{opacity: deltaOpacity},
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


