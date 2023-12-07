import { calcPx } from "../../Util/Converter";
  
export default function SpringMovingMotion(deltaX, deltaY,delay,DMS,ref,operation = "add",repeat = 0) {
  const motion = {
    operation : operation,
    values: {x: calcPx(deltaX), y: calcPx(deltaY)},
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


