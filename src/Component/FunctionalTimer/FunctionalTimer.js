import { useState, useEffect } from "react";
const FunctionalTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
      console.log("hi");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>classInterval</div>;
};

export default FunctionalTimer;
