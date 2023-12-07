export function vwToPx(vw) {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    
    const pxValue = (viewportWidth * vw) / 100;
    
    return pxValue;
  }

export  function vhToPx(vh) {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    
    const pxValue = (viewportHeight * vh) / 100;
    
    return pxValue;
  }

export  function calcDelta(delta,origin){

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const pattern = /(-?\d+(\.\d+)?)\D+/;
    const matches = delta.match(pattern);

    const value = parseFloat(matches[1]); // 숫자 부분 추출
    const unit = delta.substring(matches[1].length); // 문자 부분 추출

    switch (unit) {

      case "vw":
        delta = (origin / windowWidth) * 100 + value +"vw"
        break;

        case "vh":
          delta = (origin / windowHeight) * 100 + value +"vh"
          break;

          default :
          delta = origin +value +"px"
          break;
    }

    return delta

  };

  export  function calcPx(delta){
    delta =  delta == 0 ? "0px" : delta

    const pattern = /(-?\d+(\.\d+)?)\D+/;
    const matches = delta.match(pattern);

    const value = parseFloat(matches[1]); // 숫자 부분 추출
    const unit = delta.substring(matches[1].length); // 문자 부분 추출

    switch (unit) {

      case "vw":
        delta = vwToPx(value)
        break;

        case "vh":
          delta = vhToPx(value)
          break;

          default :
          delta = value
          break;
    }

    return delta

  };

  export function calcRotation(Matrix){
    
    const rotationRad = Math.atan2(Matrix.b, Matrix.a);
    var angle = (rotationRad * 180) / Math.PI;

    return angle

  }

  export function rgbToHex(rgb) {
    // RGB 값을 추출합니다.
    const rgbValues = rgb.match(/\d+/g);
  
    // RGB 값을 HEX로 변환합니다.
    const hex = rgbValues.map((value) => {
      const hexValue = parseInt(value, 10).toString(16); // 10진수를 16진수로 변환
      return hexValue.length === 1 ? `0${hexValue}` : hexValue; // 두 자리로 맞춤
    });
  
    return `#${hex.join('')}`;
  }