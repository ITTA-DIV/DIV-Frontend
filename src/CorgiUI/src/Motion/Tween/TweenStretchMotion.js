import { calcPx } from "../../Util/Converter";
  
export default function TweenStretchMotion(deltaW, deltaH,delay,duration,easetype,ref,operation ="add",repeat = 0) {

  const motion = {
    operation : operation,
    values : {width: calcPx(deltaW),height:  calcPx(deltaH)},
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
