
  export default function SpringScaleMotion(deltaScaleX,deltaScaleY,delay,DMS,ref,operation = "multifly",repeat = 0) {

    const motion = {
      operation : operation,
      values : {scaleX : deltaScaleX, scaleY : deltaScaleY},
      transition: {
        type: "spring",
        delay: delay,
        damping: DMS[0],
        mass: DMS[1],
        stiffness: DMS[2],
        repeat: repeat
    },
  }
 
 ref.handleMotion(motion);
 };