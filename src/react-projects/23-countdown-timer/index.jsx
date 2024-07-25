import { useEffect, useRef, useState } from "react";

const CountdownTimer = ({ initialTime, onTimeFinish}) => {
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(true);
    const intervalRef = useRef();

    useEffect(() => {
        if (isRunning) {
          //internal
          intervalRef.current = setInterval(() => {
            setTime((prevTime) => {
              if (prevTime === 0) {
                clearInterval(intervalRef.current);
                setIsRunning(false);
    
                if (onTimeFinish) {
                  onTimeFinish();
                }
    
                return 0;
              }
    
              return prevTime - 1;
            });
          }, 1000);
        } else {
          clearInterval(intervalRef.current);
        }
    
        return () => {
          clearInterval(intervalRef.current);
        };
      }, [isRunning, onTimeFinish]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div className='timer'>
            <p>
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </p>
        </div>
    )
};

export default CountdownTimer;