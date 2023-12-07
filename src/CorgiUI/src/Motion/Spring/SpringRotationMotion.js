export default function SpringRotationMotion(deltaDeg,delay,DMS,ref,operation = "add",repeat = 0) {

      
  const motion = {
   operation : operation,
   values:{rotate: deltaDeg},
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




