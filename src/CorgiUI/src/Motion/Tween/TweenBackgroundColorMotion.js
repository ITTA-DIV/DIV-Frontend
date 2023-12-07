export default function TweenBackgroundColorMotion(deltaColor,delay,duration,easetype,ref,operation = "change",repeat = 0) {

    const motion = {
      operation : operation,
      values: {backgroundColor: deltaColor},
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
  
  