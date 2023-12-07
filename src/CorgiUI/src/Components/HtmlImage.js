import React,{useRef,useEffect,forwardRef} from 'react';


  const HtmlImage = forwardRef<HTMLImageElement>((props, ref) => {
    const htmlref = useRef(null);

    useEffect(() => {
      if(props.element != null){
        // 이미지를 div 요소의 하위로 추가
         while (htmlref.current.firstChild) {
            htmlref.current.removeChild(htmlref.current.firstChild);
         }
         htmlref.current.appendChild(props.element);
        }
      }, [props.element])


  return (
    <div 
    {...props}
    ref = {htmlref}
    />
  );
})

export default HtmlImage;
