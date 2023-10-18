import {useState, useRef } from 'react';


function BallBounceButton() {
    const [clicked, setClicked] = useState(false); 


    const buttonRef = useRef<HTMLButtonElement | null>(null);


    const unclickedClass='w-48 h-48 rounded-full bg-indigo-500 m-3'
    const clickedClass='w-48 h-48 rounded-full bg-indigo-500 fallDown fixed transition-all left-3 z-100'



    const handleClick = () => {
        if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const distanceToBottom = window.innerHeight - rect.top- rect.height; // Calculate distance to bottom
        document.documentElement.style.setProperty('--distance-to-bottom', `${distanceToBottom}px`); // Set CSS variable
        buttonRef.current.style.position = 'fixed';
        buttonRef.current.style.top = `${rect.top }px`;
        setClicked(!clicked)
        }
      };
    return ( 
        <button 
        className={clicked ? clickedClass : unclickedClass} 
        ref={buttonRef} 
        onClick={handleClick}>
            Click Me!
        </button>

     );
}

export default BallBounceButton;