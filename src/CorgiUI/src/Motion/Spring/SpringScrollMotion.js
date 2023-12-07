import { calcPx } from "../../Util/Converter";
  
export default function SpringScrollMotion(deltaScrollLeft, deltaScrollTop,delay,DMS,ref,operation = "add",repeat = 0) {
  const motion = {
    operation : operation,
    values: {scrollLeft: calcPx(deltaScrollLeft), scrollTop: calcPx(deltaScrollTop)},
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


