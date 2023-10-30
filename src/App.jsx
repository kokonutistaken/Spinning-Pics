import * as THREE from 'three'; // Import the necessary modules
import React, { useState } from 'react';
import { Environment, OrbitControls, Sphere, useEnvironment } from "@react-three/drei";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TextureLoader } from 'three';
import { SpinningPics } from '../modern buildings/spinningPics';
import { RightArrow } from '../modern buildings/rightArrow';
import { LeftArrow } from '../modern buildings/leftArrow';
import { useEffect } from 'react';
import bgMusic from "../modern buildings/bgMusic3.mp3"


import "./App.css";




// function ReflectiveSphere() {
//   const tweakableProperties = useControls({
//     roughness: { value: 0.1, min: 0, max: 1 },
//     metalness: { value: 1, min: 0, max: 1 }
//   });

//   const envMap = useEnvironment({ files: './modern buildings/moonless_golf_4k.hdr' });

//   return (
//     <Sphere args={[1, 265, 265]}>
//       <meshStandardMaterial {...tweakableProperties} envMap={envMap} />
//     </Sphere>
//   );
// }

function ThreeScene() {
  const envMap = useEnvironment({ files: './modern buildings/moonless_golf_4k.hdr' });

  return (
    <>
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <pointLight position={[-3, -3, 2]} />
      <pointLight position={[-5, 5, 5]} />
      <OrbitControls />
      <Environment map={envMap} background />
    </>
  );
}

function App() {

  const [spinningPicsRotate, setSpinningPicsRotate] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audio = new Audio(bgMusic);
  const circleClass = isAudioPlaying ? 'circle filled' : 'circle';
  const textClassNone1 = isAudioPlaying ? 'txt1 none' : 'txt1';
  const textClassNone2 = isAudioPlaying ? 'txt2 none' : 'txt2';
  const volume = isAudioPlaying ? 'volume ' : 'volume none';
  

  const handleRightArrowClick = () => {
    setSpinningPicsRotate(spinningPicsRotate + Math.PI/4); 
    console.log("RightArrow clicked");
  }

  const handleLeftArrowClick = () => {
    setSpinningPicsRotate(spinningPicsRotate - Math.PI/4);
    console.log("LeftArrow clicked");
  }



  const handleAudioToggle = () => {
    
    setIsAudioPlaying(!isAudioPlaying);
    if (isAudioPlaying) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
    }
    
  };
  console.log(isAudioPlaying)

  const handleKeyPress = (event) => {
    if (event.key === 'a' || event.key === 'A') {
      handleAudioToggle();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);


  return (
    
    <div className="App h-screen">

      <Canvas camera={{ position: [0, 0, 6.5] }}>
        <ThreeScene />
        <SpinningPics rotate={spinningPicsRotate}/>
        <RightArrow onClick={handleRightArrowClick}/>
        <LeftArrow onClick={handleLeftArrowClick}/>
      </Canvas>
      <div className="audioBox">
        <p className={textClassNone1}>Press</p>
        <svg className='svgCircle' height="120" width="120">
          <circle className={circleClass} cx="60" cy="60" r="30" stroke="black" strokeWidth="3" fill="none" />
        </svg> 
        <span>A</span>
        <img src='./modern buildings/volume.png' className={volume}></img>
        <p className={textClassNone2}>for ambient music</p>
      </div>
      
    </div>
    
  );






  
}



export default App;





















// function GLBModel({ rotationAngle }) {
//   // Load the .glb model (update the path)
//   const gltf = useLoader(GLTFLoader, './modern buildings/spinningPics9.glb');

//   const modelPosition = [0, 0, 0];
//   const modelRotation = [0, 0, 0];
//   const modelScale = [1, 1, 1];

//   const textureLoader = new THREE.TextureLoader();
//   const texture1 = textureLoader.load('./modern buildings/txt7.jpg'); // Correct the file extension
//   texture1.flipY = false;
  
  // const texture2 = textureLoader.load('./modern buildings/txt2.jpg'); // Correct the file extension
  // const texture3 = textureLoader.load('./modern buildings/txt3.jpg'); 
  // const texture4 = textureLoader.load('./modern buildings/txt4.jpg'); 
  // const texture5 = textureLoader.load('./modern buildings/txt5.jpg'); 
  // const texture6 = textureLoader.load('./modern buildings/txt6.jpg'); 
  // const texture7 = textureLoader.load('./modern buildings/txt7.jpg'); 
  // const texture8 = textureLoader.load('./modern buildings/txt8.jpg'); 



//   useFrame(() => {
//     gltf.scene.rotation.set(0, modelRotation[1] + rotationAngle, 0);
//   });


//   gltf.scene.traverse((node) => {
//     if (node.isMesh) {
//       const material = new THREE.MeshBasicMaterial({
//         map: texture1,
        
//       });
//       node.material = material;
//     }
//   });



//   return (
//     <primitive
//       object={gltf.scene}
//       position={modelPosition}
//       rotation={modelRotation}
//       scale={modelScale}
//     />
//   );
// }








// function GLBModel2() {
  //   // Load the .glb model for the second model (update the path)
  //   const gltf = useLoader(GLTFLoader, './modern buildings/arrowRight.glb');
  
  //   const modelPosition = [-1.3, 0, 5];
  //   const modelRotation = [0, 1.7, 0];
  //   const modelScale = [0.1, 0.1, 0.1];
  
  //   // Apply the material directly to the loaded model's mesh
  //   gltf.scene.traverse((node) => {
  //     if (node.isMesh) {
  //       // Apply the material
  //       const material = new THREE.MeshStandardMaterial({
  //         metalness: 1,
  //         roughness: 0.1,
  //       });
  //       node.material = material;
  //     }
  //   });
  
  //   return (
  //     <group>
  //       <primitive
  //         object={gltf.scene}
  //         position={modelPosition}
  //         rotation={modelRotation}
  //         scale={modelScale}
  //       />
  //     </group>
  //   );
  // }
  
  
  
  