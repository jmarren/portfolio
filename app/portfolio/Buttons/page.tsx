'use client'
import React from 'react';
import ButtonOne from '@/components/ButtonOne';
import ButtonTwo from '@/components/ButtonTwo';
import SpotlightButton from '@/components/SpotlightButton';
import SpinningButton from '@/components/SpinningButton';
import ColorButton from '@/components/ColorButton';
import CursorButton from '@/components/CursorButton';
import SliderButton from '@/components/SliderButton'
import BallBounceButton from '@/components/BallBounceButton';

const Page = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <main >
    <section className="button-container">
      <section className="button-section">
               <ButtonOne text="Click Me!" onClick={handleClick} /> 
               <SliderButton text=''  onClick={handleClick} />
               <BallBounceButton />
      </section>


      <section className="button-section">
        <ButtonTwo text="Click Me!" onClick={handleClick} />
        <ColorButton />        

      </section>

      <section className="button-section">        
       <CursorButton text="Click Me!" />
        <SpotlightButton text="Click Me!" onClick={handleClick} />
        <SpinningButton />
      </section>
      </section> 
    </main>
  );
};

export default Page;



/* 
import React from 'react';
import ButtonOne from '@/components/ButtonOne';
import ButtonTwo from '@/components/ButtonTwo';
import SpotlightButton from '@/components/SpotlightButton';
import SpinningButton from '@/components/SpinningButton';
import ColorButton from '@/components/ColorButton';
import CursorButton from '@/components/CursorButton';
import SliderButton from '@/components/SliderButton'
import BallBounceButton from '@/components/BallBounceButton';

const Page = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <div >        
        <SliderButton text=''  onClick={handleClick} />
        <ButtonOne  text="Click Me!" onClick={handleClick} />
        <BallBounceButton />
      </div>
      <div >
        <ButtonTwo text="Click Me!" onClick={handleClick} />
        <ColorButton />        
        <CursorButton text="Click Me!" />
      </div>
      <div style={{display: 'inline'}}>
        <SpotlightButton text="Click Me!" onClick={handleClick} />
        <SpinningButton />

      </div>
    </div>
  );
};

export default Page;
*/