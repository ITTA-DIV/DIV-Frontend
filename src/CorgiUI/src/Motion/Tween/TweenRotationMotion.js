  export default function TweenRotationMotion(deltaDeg,delay,duration,easetype,ref,operation = "add",repeat = 0) {

      
     const motion = {
      operation : operation,
      values:{rotate: deltaDeg},
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
 
 
 

