"use client"
import {gsap} from 'gsap';


import React, { useEffect } from 'react';
import Matter from 'matter-js';

const TextPhysics: React.FC = () => {
  useEffect(() => {
    const engine = Matter.Engine.create();
    const Composite = Matter.Composite;
    const { world } = engine;

    const render = Matter.Render.create({
      element: document.getElementById('textPhysicsContainer') as HTMLElement,
      engine,
      options: {
        width: window.innerWidth * 0.8,
        height: 220,
        wireframes: false,
        background: 'white'
      },
    });

    const ground = Matter.Bodies.rectangle(-350 + window.innerWidth / 2, 200, window.innerWidth, 10, { isStatic: true, render: {fillStyle: '#44aacf'} });
   Composite.add(world, [ground]);

    const text = "John Marren".split('');
    let x = 100;
    let y = -50;
    const boxes: any[] = [];

    for (const letter of text) {
      const box = Matter.Bodies.rectangle(x + Math.random() * 600, y , 30, 30, {render: {fillStyle: 'white'}});
      boxes.push(box);
    //   x += 60;
    y += 10;
    }

    const tl = gsap.timeline({paused: true, delay: 2, startTime: 2});

let targetX = 100; // Starting X-coordinate for the first letter


let targetY = 100;// Y-coordinate for all letters

// Loop through all boxes (letters)
boxes.forEach((box, i) => {
  // Add a tween to the timeline for each box
  tl.to(box.position, {
    duration: 1, // 1 second for each letter
    x: targetX,
    y: targetY + Math.random() * 10,
    ease: "power3.inOut", // ease type can be changed
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
  targetX += 60;
tl.play();
});
    Composite.add(world, boxes);

    Matter.Runner.run(engine, world);
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
  }, []);

  return <div id="textPhysicsContainer" style={{ width: '800px', height: '600px' }}></div>;
};

export default TextPhysics;
/*
import React, { useEffect } from 'react';
import Matter from 'matter-js';


const TextPhysics: React.FC = () => {
  useEffect(() => {
     var Runner = Matter.Runner;   
     var Composite = Matter.Composite;
     const engine = Matter.Engine.create();

     const { world } = engine;

    const render = Matter.Render.create({
      element: document.getElementById('textPhysicsContainer') as HTMLElement,
      engine,
      options: {
        width:  800,
        height: 600,
        wireframes: false,
      },
    });
    
   
    var runner = Runner.create();


    const ground = Matter.Bodies.rectangle(400, 550, 810, 60, { isStatic: true });
    Composite.add(world, [ground]);

    const text = "J";
    let y = 300;
    let x = 200
    const boxes: any = [];


    const noCollisionFilter = { category: 0x0002 };

    for (const letter of text.split('')) {
        const box = Matter.Bodies.rectangle(x, 400, 50, 50);
        boxes.push(box);
        x += 60;
      }
  
    //   Matter.World.add(world, boxes);
  

    
Composite.add(world, boxes);
   // Matter.World.add(world, boxes);
    boxes.forEach((box) => {
        console.log(`Box at x: ${box.position.x}, y: ${box.position.y}`);
      });

    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);



    // Sync the text with the boxes
    Matter.Events.on(render, 'afterRender', () => {
      const context = render.context;
      context.fillStyle = 'green';

      for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        const letter = text[i];

        context.font = '50px sniglet';
        
        context.fillText(
          letter,
          box.position.x - 25,
          box.position.y + 25
        );
      }
    });


    const tl = gsap.timeline({paused: true});

let targetX = 200; // Starting X-coordinate for the first letter
let targetY = 300; // Y-coordinate for all letters

// Loop through all boxes (letters)
boxes.forEach((box, i: Number) => {
  // Add a tween to the timeline for each box
  tl.to(box.position, {
    duration: 1, // 1 second for each letter
    x: targetX,
    y: targetY,
    ease: "power3.inOut", // ease type can be changed
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
  targetX += 60;
});

// setTimeout(() => {
//     // Enable collisions again
//     boxes.forEach((box) => {
//       box.collisionFilter = {};
//     });
//   }, 50);


Matter.Events.on(engine, 'afterUpdate', function() {
    console.log('Velocity:', boxes[0].velocity, ' Position: ', boxes[0].position);
  });



  const box = Matter.Bodies.rectangle(x, y, 50, 50, {
    isStatic: true,
  });
  setTimeout(() => { Matter.Body.setStatic(box, false); }, 10);

  
setTimeout(() => {
tl.play();
}, 5000);


  }, []);

  return <div id="textPhysicsContainer" style={{ width: '800px', height: '600px' }}></div>;
};

export default TextPhysics;
*/
