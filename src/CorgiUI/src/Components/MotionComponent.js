"use client";
import React, { useEffect, useState, forwardRef, useRef } from "react";
import { motion } from "framer-motion";
import { GlobalControllerInstance} from "../index";
import { calcRotation,rgbToHex} from "../Util/Converter";

let elementName = "";

const MotionComponent = forwardRef((props, ref) => {
  elementName = props.elementName;

  const [transformRecord, setTransformRecord] = useState({});
  const corgiref = useRef(null); // 조건부로 useRef를 사용
  const Tag = props.tag || motion.div;

  const limitTable = {
    x:[-Infinity,Infinity],
    y:[-Infinity,Infinity],
    opacity:[0,1],
    rotate:[-Infinity,Infinity],
    scaleX:[-Infinity,Infinity],
    scaleY:[-Infinity,Infinity],
    scrollLeft:[-Infinity,Infinity],
    scrollTop:[-Infinity,Infinity],
    width:[0,Infinity],
    height:[0,Infinity],
  };  

  useEffect(() => {

    if(ref != null){
    ref.current = corgiref.current
    }

    const style = window.getComputedStyle(corgiref.current)
    const Matrix = new DOMMatrix(style.transform)

    if(props.limitTable != null){
      Object.keys(props.limitTable).forEach((key) =>{
        limitTable[key] = props.limitTable[key];
      });
    }

    if(props.onGlobal != null){
      Object.keys(props.onGlobal).forEach(key => {
        GlobalControllerInstance.eventTarget.addEventListener(key,(event) => props.onGlobal[key](event,corgiref))
      });
    }

    corgiref.handleMotion = (motion) => {


      Object.keys(motion.values).forEach((key) =>{

        switch(motion.operation){
          case "add":
            setTransformRecord((prev) => ({...prev,
              [key]: 
              limitTable[key][1] >= prev[key] + motion.values[key] &&
              limitTable[key][0] <= prev[key] + motion.values[key] ?
              prev[key] + motion.values[key] : prev[key]
            }));
            break;

          case "multifly":
            setTransformRecord((prev) => ({...prev,
              [key]:
              limitTable[key][1] >= prev[key] * motion.values[key] &&
              limitTable[key][0] <= prev[key] * motion.values[key] ?
              prev[key] * motion.values[key] : prev[key]
              }));
            break;

          case "change":
            setTransformRecord((prev) => ({...prev,[key]: motion.values[key]}));
            break;
        }
        
        setTransformRecord((prev) => ({
          ...prev,
          transition: {
            ...prev.transition,
            [key]: motion.transition
          }
        }));
      })

      
    };

    setTransformRecord((prev) => ({...prev,
    ["x"]:  0,
    ["y"] : 0,
    ["opacity"] :parseFloat(style.opacity),
    ["rotate"] : calcRotation(Matrix),
    ["scaleX"] : Matrix.a,
    ["scaleY"] : Matrix.d,
    ["scrollLeft"] : 0,
    ["scrollTop"] : 0,
    ["width"] : corgiref.current.offsetWidth,
    ["height"] : corgiref.current.offsetHeight,
    ["color"] : rgbToHex(style.color),

    transition:{
      x: {duration:0},
      y : {duration:0},
      opacity : {duration:0},
      rotate : {duration:0},
      scaleX : {duration:0},
      scaleY : {duration:0},
      scrollLeft : {duration:0},
      scrollTop : {duration:0},
      width : {duration:0},
      height : {duration:0},
      color: {duration:0},
    }
  }));

  }, [props.limitTable]);

  //CustomListeners
  useEffect(() => {

    if(props.onGlobalMouseMove != null){

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = corgiref.current;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;

      const globalPointerMoveEvent = new CustomEvent("globalPointerMove", {
        detail:{
          state:  0,
          value : {x : x , y : y}
        }
      });

      props.onGlobalMouseMove(globalPointerMoveEvent,corgiref);

    };

    window.addEventListener("pointermove", handlePointerMove);

    // return () => window.removeEventListener("pointermove", handlePointerMove);
  }

  if(props.onGlobalScroll!= null){
    const handleScroll = ({ deltaY}) => {
      const state = deltaY > 0 ? 1 : -1;

      const globalScrollEvent = new CustomEvent("globalScroll", {
        detail:{
          state:  state,
          value : 0
        }
      });

      props.onGlobalScroll(globalScrollEvent,corgiref);

    };

    window.addEventListener("wheel", handleScroll);

    // return () => window.removeEventListener("onwheel", handleScroll);
  }

  if(props.onStart != null){

    const startEvent = new CustomEvent("start", {
      detail:{
        state:  0,
        value : 0
      }
    });

    props.onStart(startEvent,corgiref)
  }


  }, []);


  return (
    <Tag
      {...props}
      ref={corgiref}
      animate={transformRecord}
      onClick = {props.onClick == null ? null : (event) => {props.onClick(event,corgiref)} }
      onWheel = {props.onWheel == null ? null :(event) => {event.detail = {}; event.detail["state"] = event.deltaY > 0 ? 1 : -1; props.onWheel(event,corgiref)}}
      onMouseOver = {props.onMouseOver == null ? null :(event) => {props.onMouseOver(event,corgiref)}}
      onMouseLeave = {props.onMouseLeave == null ? null :(event) => {props.onMouseLeave(event,corgiref)}}
      onMouseDown = {props.onMouseDown == null ? null :(event) => {props.onMouseDown(event,corgiref)}}
      onMouseUp = {props.onMouseUp == null ? null :(event) => {props.onMouseUp(event,corgiref)}}
      onMouseMove = {props.onMouseMove == null ? null :(event) => {props.onMouseMove(event,corgiref)}}
    >
    </Tag>
  );
});

MotionComponent.displayName = "Tween." + elementName; // displayName 설정

export default MotionComponent;
