"use client"

import React, { useEffect } from 'react';
import Matter from 'matter-js';

const Physics: React.FC = () => {
  useEffect(() => {
    // Create an engine and world
    const engine = Matter.Engine.create();
    const { world } = engine;

    // Create a renderer
    const render = Matter.Render.create({
      element: document.getElementById('physicsContainer') as HTMLElement,
      engine,
      options: {
        width: window.innerWidth * 2,
        height: window.innerHeight * 2,
        wireframes: false, // set to false for colored shapes
      },
    });

    // Add ground and ceiling
    const ground = Matter.Bodies.rectangle(400, 600, 810, 60, { isStatic: true });
    const ceiling = Matter.Bodies.rectangle(400, 0, 810, 60, { isStatic: true });

    // Add random shapes
    const shapes = Array.from({ length: 20 }, () => {
      if (Math.random() > 0.5) {
        return Matter.Bodies.rectangle(
          Math.random() * 800,
          Math.random() * 600,
          50,
          50
        );
      } else {
        return Matter.Bodies.circle(
          Math.random() * 800,
          Math.random() * 600,
          25
        );
      }
    });

    // Add all bodies to world
    Matter.World.add(world, [ground, ceiling, ...shapes]);

    // Add mouse control
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    Matter.World.add(world, mouseConstraint);

    // Keep the mouse in sync with rendering
    render.mouse = mouse;

    // Run the engine and renderer
    Matter.Engine.run(engine);
    Matter.Render.run(render);
  }, []);

  return (
    <div id='physicsContainer' style={{ width: '100vw', height: '100vh' }}></div>
  );
};

export default Physics;
