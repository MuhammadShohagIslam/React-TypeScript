import { useState, useEffect } from 'react';
import { useRef } from 'react';

const MutableRef = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef<number | null>(null)
  
    const stopTimer = () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    }

    useEffect(() => {
      intervalRef.current = window.setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
      return () =>{
        stopTimer()
      }
    }, [])
  
  
    return (
      <div>
        <h1>HookTimer --- {count}</h1>
        <button onClick={() => stopTimer()}>
            Stop Timer
        </button>
      </div>
    );
}

export default MutableRef;