"use client"
import {gsap} from 'gsap';


import React, { useEffect } from 'react';
import Matter from 'matter-js';

const TextPhysics: React.FC = () => {



  useEffect(() => {

    let groundWidth: number = 0.9 * window.innerWidth;
    let screenWidth: number = window.innerWidth;
    const engine = Matter.Engine.create();
    const Composite = Matter.Composite;
    const { world } = engine;
    


    const render = Matter.Render.create({
      element: document.getElementById('textPhysicsContainer') as HTMLElement,
      engine,
      options: {
        width: window.innerWidth * 0.95,
        height: 220,
        wireframes: false,
        background: 'white'
      },
    });


    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.style.width = '100%';  // Ensure the canvas takes up the full window width
      groundWidth = 0.9 * window.innerWidth;
      
      Matter.Body.setPosition(ground, {
        x: groundWidth / 1.8,
        y: 200
      });
    };

    window.addEventListener('resize', handleResize);
  
    const ground = Matter.Bodies.rectangle(
      groundWidth / 1.8, 
      200, 
      groundWidth + 10, 
      10, 
      { isStatic: true, render: { fillStyle: '#44aacf' } }
    );

   Composite.add(world, [ground]);

    const text = "John Marren".split('');
    let x = 100;
    let y = -50;
    const boxes: any[] = [];

    for (const letter of text) {
      const box = Matter.Bodies.rectangle(x + Math.random() * window.innerWidth / 3, y , 28, 28, {render: { fillStyle: "rgba(255, 255, 255, 0)"}});
      boxes.push(box);
    //   x += 60;
    y += 10;
    }

    const tl = gsap.timeline({paused: true, delay: 2, startTime: 2});

let targetX: number = 100; // Starting X-coordinate for the first letter
let spacing = 60;  // Default spacing between boxes
let targetY = 50;// Y-coordinate for all letters


// Update spacing based on screen width
if (screenWidth < 250) {
  spacing = 50;  // Closer together
  targetX = 50;
} else if (screenWidth < 400) {
  spacing = Math.floor(screenWidth / 10);  // Adaptive spacing based on screen width
} else if (screenWidth < 600) {
  spacing = 60;  // Default spacing
}


boxes.forEach((box, i) => {


  if (screenWidth > 600) {
    // Keep it as originally intended
    // No changes to spacing or positioning
  } else if (screenWidth <= 600) {
    if (text[i] === 'M') {
      targetY += 40;  // Move to the next line (+20 in Y)
      targetX = 100;  // Reset the X position to the start of line
    }
  } else if (screenWidth <= 100 && screenWidth > 150) {
    // The spacing is already adaptive in this case based on screenWidth
  } // No else clause needed for screenWidth < 250 as it's handled during initialization



  tl.to(box.position, {
    duration: 1, // 1 second for each letter
    x: targetX,
    y: targetY + Math.random() * 10,
    ease: "power3.inOut", // ease type can be changed
    onStart: () => {
      box.collisionFilter.mask = 0x0000;
    },
    onUpdate: () => {
      // Sync with Matter.js body if needed
    },
    onComplete: () => {
        // Stop the box by setting its velocity to zero
        Matter.Body.setVelocity(box, { x: 0, y: 0 });
  
        // Optional: Disable gravity for this box
        box.isStatic = true;
      }
  }, "-=0.5"); // Overlap of 0.5 seconds

  // Increment the target X-coordinate for the next letter
  targetX += spacing;
  tl.play();
});
    Composite.add(world, boxes);

   Matter.Runner.run(engine);
    Matter.Render.run(render);

    Matter.Events.on(render, 'afterRender', () => {
        const context = render.context;
        context.fillStyle = "#3d9c22"


        
  
        for (let i = 0; i < boxes.length; i++) {
          const box = boxes[i];
          const letter = text[i];
  
          context.font = '30px sniglet';
          context.strokeStyle = '#1c6b06';  
          context.lineWidth = 0.7; 

          context.fillText(letter, box.position.x - 25, box.position.y + 25);
          context.strokeText(letter, box.position.x - 25, box.position.y + 25);
        }
      });

    
      return () => {
        tl.kill();  // Destroy the GSAP timeline
        window.removeEventListener('resize', handleResize);

      };
  }, []);

  return <div id="textPhysicsContainer" className="relative h-[250px]" style={{ width: '100%' }}></div>;
};

export default TextPhysics;
