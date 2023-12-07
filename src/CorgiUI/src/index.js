import React, { forwardRef } from 'react';
import { motion } from "framer-motion";

import CorgiLoader from "./CorgiLoader";

//Components
import MotionComponent from './Components/MotionComponent';
import ScrollContainer from './Components/ScrollContainer';
import HtmlImage from './Components/HtmlImage';

//Controllers
import { GlobalController as globalController} from './Controller/GlobalController';
import GuageController from './Controller/GuageController';

//TweenMotions
import TweenMovingMotion from './Motion/Tween/TweenMovingMotion';
import TweenColorMotion from "./Motion/Tween/TweenColorMotion";
import TweenOpacityMotion from "./Motion/Tween/TweenOpacityMotion";
import TweenScaleMotion from "./Motion/Tween/TweenScaleMotion";
import TweenStretchMotion from "./Motion/Tween/TweenStretchMotion";
import TweenRotationMotion from "./Motion/Tween/TweenRotationMotion";
import TweenFilterMotion from './Motion/Tween/TweenFilterMotion';
import TweenBackgroundColorMotion from './Motion/Tween/TweenBackgroundColorMotion';

//SpringMotions
import SpringColorMotion from "./Motion/Spring/SpringColorMotion";
import SpringMovingMotion from "./Motion/Spring/SpringMovingMotion";
import SpringOpacityMotion from "./Motion/Spring/SpringOpacityMotion";
import SpringScaleMotion from "./Motion/Spring/SpringScaleMotion";
import SpringStretchMotion from "./Motion/Spring/SpringStretchMotion";
import SpringRotationMotion from "./Motion/Spring/SpringRotationMotion";
import SpringFilterMotion from './Motion/Spring/SpringFilterMotion';
import SpringBackgroundColorMotion from './Motion/Spring/SpringBackgroundColorMotion';
import SpringScrollMotion from './Motion/Spring/SpringScrollMotion';

//EaseType
import { Easetype } from './EaseType/EaseType';
import { SpringType } from './EaseType/SpringType';

//Conditions
import IsElementVisible from './Conditions/IsElementVisible';

const htmlElements = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "webview"];


const GlobalControllerInstance = globalController.getInstance();
const GlobalController = GlobalControllerInstance.handleMotion;

const Motion = {};

htmlElements.forEach((element) => {
  Motion[element] = forwardRef((props, ref) => {
    return (
      <MotionComponent {...props} ref={ref} tag={motion[element]}/>
    );
  });

  Motion[element].displayName = "Motion"+element;
  MotionComponent.displayName = "MotionComponent"
});

//Define Spring

const Spring = {
  colorMotion : (deltaColor,delay,DMS,ref,operation,repeat) => {SpringColorMotion(deltaColor,delay,DMS,ref,operation,repeat)},
  movingMotion : (deltaX,deltaY,delay,DMS,ref,operation,repeat) => {SpringMovingMotion(deltaX,deltaY,delay,DMS,ref,operation,repeat)},
  opacityMotion : (deltaOpacity,delay,DMS,ref,operation,repeat) => {SpringOpacityMotion(deltaOpacity,delay,DMS,ref,operation,repeat)},
  scaleMotion : (deltaScaleX,deltaScaleY,delay,DMS,ref,operation,repeat) => {SpringScaleMotion(deltaScaleX,deltaScaleY,delay,DMS,ref,operation,repeat)},
  stretchMotion : (deltaW,deltaH,delay,DMS,ref,operation,repeat) => { SpringStretchMotion(deltaW,deltaH,delay,DMS,ref,operation,repeat)},
  rotationMotion : (deltaRotation,delay,DMS,ref,operation,repeat) => {SpringRotationMotion(deltaRotation,delay,DMS,ref,operation,repeat)},
  filterMotion : (deltaFilter,delay,DMS,ref,operation,repeat) => {SpringFilterMotion(deltaFilter,delay,DMS,ref,operation,repeat)},
  backgroundColorMotion : (deltaColor,delay,DMS,ref,operation,repeat) => {SpringBackgroundColorMotion(deltaColor,delay,DMS,ref,operation,repeat)},
  scrollMotion : (deltaScrollX,deltaScrollY,delay,DMS,ref,operation,repeat) => {SpringScrollMotion(deltaScrollX,deltaScrollY,delay,DMS,ref,operation,repeat)}
  };
  

//Define Tween

const Tween = {
  colorMotion : (deltaColor,delay,duration,easetype,ref,operation,repeat) => {TweenColorMotion(deltaColor,delay,duration,easetype,ref,operation,repeat)},
 movingMotion : (deltaX,deltaY,delay,duration,easetype,ref,operation,repeat) => {TweenMovingMotion(deltaX, deltaY,delay,duration,easetype,ref,operation,repeat)},
  opacityMotion : (deltaOpacity,delay,duration,easetype,ref,operation,repeat) => {TweenOpacityMotion(deltaOpacity,delay,duration,easetype,ref,operation,repeat)},
  scaleMotion : (deltaScaleX,deltaScaleY,delay,duration,easetype,ref,operation,repeat) => {TweenScaleMotion(deltaScaleX,deltaScaleY,delay,duration,easetype,ref,operation,repeat)},
  stretchMotion : (deltaW,deltaH,delay,duration,easetype,ref,operation,repeat) => {TweenStretchMotion(deltaW,deltaH,delay,duration,easetype,ref,operation,repeat)},
  rotationMotion : (deltaRotation,delay,duration,easetype,ref,operation,repeat) => {TweenRotationMotion(deltaRotation,delay,duration,easetype,ref,operation,repeat)},
  filterMotion : (deltaFilter,delay,duration,easetype,ref,operation,repeat) => {TweenFilterMotion(deltaFilter,delay,duration,easetype,ref,operation,repeat)},
  backgroundColorMotion : (deltaColor,delay,duration,easetype,ref,operation,repeat) => {TweenBackgroundColorMotion(deltaColor,delay,duration,easetype,ref,operation,repeat)}
  };

export {GlobalController,GlobalControllerInstance,GuageController}
export {Easetype,SpringType}
export {Motion,ScrollContainer,HtmlImage}
export {CorgiLoader}
export {Spring,Tween}
export{IsElementVisible}


