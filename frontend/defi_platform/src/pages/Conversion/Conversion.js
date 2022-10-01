import React, { useEffect } from 'react'
import useScript from '../../hooks/useScript';

function Conversion() {

    useEffect(()=>{
      // eslint-disable-next-line
      let createWidget = new onMetaWidget({
        elementId: "Widget",
        apiKey: "05da3473-82c9-46e4-90a7-a6c1e0a6b433",
      });
      createWidget.init();
			createWidget.on("ALL_EVENTS", (status) => console.log(status))
    },[])
    
  return (<div id="Widget"></div>)
}

export default Conversion