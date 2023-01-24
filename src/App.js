import React, { useState, useEffect} from 'react'
import axios from 'axios';
const App = () => {
  const [data,setData]= useState([]);
  const [currentVideo, setCurrentVideo] = useState(1);

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 200) {
      setCurrentVideo(2);
      setTimeout(() => {
        setCurrentVideo(3);
      }, 3000);
    }
  };

 
  function getData(e){
    console.log(e);
    axios.get("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1"
  
    ) 
    .then((res)=>{ 
    console.log(res)
    setData(res.data)
   
    }) 
    .catch((error)=>{
    
   }); 
    }
    useEffect(()=>{ 
    getData(); 
    },[]);

  return (
    <div>
      {data.texts?.map((texts) =>(
        <h2>{texts.description}</h2>
        ))}
       <h2 style={{ float: 'left' }} onScroll={handleScroll}> description</h2>
        
       <div   style ={{ position: 'fixed', right: 0,  }}>
       {currentVideo === 1 ? <video src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4" style={{ objectFit: 'fill', width: '100%', height: '100%' }}         controls={false}
        autoPlay
        loop /> : null}
        {currentVideo === 2 ? <video src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4" controls loop/> : null}
        {currentVideo === 3 ? <video src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4" controls loop/> : null}
       </div>
    </div>
  )
}

export default App