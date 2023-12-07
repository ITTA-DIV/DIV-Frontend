"use client";
import { Motion,Spring } from "../index";
import React, { useRef, useState, useCallback, useLayoutEffect,forwardRef,useEffect } from "react"
import { vhToPx} from "../Util/Converter";

const ScrollContainer = forwardRef<HTMLElement>((props, ref) => {
  const scrollRef = useRef(null)
  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height - vhToPx(100));
    }
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    scrollRef && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  return (
    <>
      <Motion.div
        {...props}
        ref={scrollRef}
        className="fixed top-0 left-0 w-full overflow-hidden"
        limitTable = {{y:[-pageHeight,0]}}
        onWheel={(event, ref) => {
          if (event.detail.state > 0) {
            Spring.movingMotion(0, "-" + props.deltaScroll, 0, props.DMS, ref);
          } else if (event.detail.state < 0) {
            Spring.movingMotion(0, props.deltaScroll, 0, props.DMS, ref);
          }
          if (props.onWheel != null) {
            props.onWheel(event, ref);
          }
        }}
      >
        {props.children}
      </Motion.div>
      <div className={`h-[${pageHeight+"px"}]`} />
    </>
  );
});

export default ScrollContainer;
