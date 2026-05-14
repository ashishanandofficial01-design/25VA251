import React, { useEffect, useState } from 'react';

function UseEffect() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //fetch data api
  const[data,setApiData]=useState(null);
  useEffect(()=>{
    // fetch data here
  },[])



  return (
    <>
    <div>{timer}</div>
    </>
  );
}

export default UseEffect;