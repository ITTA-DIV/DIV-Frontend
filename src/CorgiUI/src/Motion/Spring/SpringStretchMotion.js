import { calcPx } from "../../Util/Converter";
  
export default function SpringStretchMotion(deltaW, deltaH,delay,DMS,ref,operation = "add",repeat = 0) {

  const motion = {
    operation : operation,
    values : {width: calcPx(deltaW),height:  calcPx(deltaH)},
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
