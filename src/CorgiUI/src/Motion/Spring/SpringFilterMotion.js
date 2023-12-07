  
export default function SpringFilterMotion(deltaFilter,delay,DMS,ref,operation ="change",repeat = 0) {
  const motion = {
    operation : operation,
    values: {filter: deltaFilter},
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


