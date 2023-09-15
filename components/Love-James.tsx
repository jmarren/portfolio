"use client"

import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, Environment } from "@react-three/drei";
import Heart from './Heart'
import BubbleFont from "./Letters";
import React, {Suspense} from 'react'
import { DoubleSide } from "three";



function LoveJames() {
        return (  
        <a href="https://lovej-d62f6.web.app/" target="_blank" rel="noopener noreferrer">

<div className="h-full w-full" >
        <Canvas className="h-full w-full z-[50] rounded-xl ">
        <OrthographicCamera top={-10}/>
        <Environment
            files="./HDRIs/industrial_sunset_puresky_4k.hdr"
            background
          />
            <Suspense fallback={null} >
                <group>
                    <BubbleFont />
                    <Heart />
                    <mesh scale={30} position={[0, -8, 0]} rotation={[Math.PI / 2, 0, 0]} receiveShadow >
                        <planeGeometry />
                        <meshStandardMaterial side={DoubleSide} color={'yellow'}/>
                    </mesh>
                </group>
            </Suspense>
            <ambientLight intensity={1.3} />
        </Canvas></div>
        </a>
    );
}

export default LoveJames;
