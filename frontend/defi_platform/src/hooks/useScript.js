import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
      if(url!=''){
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.getElementsByTagName('head')[0].appendChild(script);

    return () => {
        document.getElementsByTagName('head')[0].removeChild(script);
    }
}else{
    console.log("it worked");
    const script = document.createElement('script');
    script.async = true;
    script.innerHTML=`let createWidget = new onMetaWidget({
        elementId: "widget",
        apiKey: "{api_key}",
      });
      createWidget.init();
			createWidget.on("ALL_EVENTS", (status) => console.log(status))`
    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    }
}
  }, [url]);
};

export default useScript;
