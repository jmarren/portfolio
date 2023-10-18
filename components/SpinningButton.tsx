import React, { useState, useEffect } from 'react';

const SpinningButton: React.FC = () => {
    const [isSpinning, setIsSpinning] = useState(false);
    const [isRunning, setIsRunning] = useState(false);


    const toggleSpin = () => {
        setIsRunning(!isSpinning);
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isRunning) {
          timer = setTimeout(() => {
            console.log("Half a second has passed!");
            setIsRunning(false);
          }, 500);
        }
    
        return () => {
          if (timer) {
            clearTimeout(timer);
          }
        };
      }, [isRunning]);



    return (
        <div className='m-3 w-32 h-64'> 
        <button
            className='bg-orange-500 rounded-xl text-white ring-4 ring-inset ring-orange-400 w-full h-full  hover:scale-75'
            onClick={toggleSpin}
            style={{
                transition: 'transform 0.5s',
                transform: `${isRunning ? 'rotate(360deg)' : 'rotate(0deg)'} translate(${isRunning ? '0, 300px' : '0 , 0'})`

            }}
        >
            Click Me!
        </button>
        </div>
    );
};

export default SpinningButton;
