export default function SpringBackgroundColorMotion(deltaColor,delay,DMS,ref,repeat = 0) {

    const motion = {
      operation : "change",
      values: {backgroundColor: deltaColor},
      transition: {
        type: "spring",
        delay: delay,
        damping: DMS[0],
        mass: DMS[1],
        stiffness: DMS[2],
        repeat: repeat
    },
  };
  
  ref.handleMotion(motion);
  };
  
  