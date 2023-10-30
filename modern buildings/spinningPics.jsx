/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshBasicMaterial } from "three";
import { MeshStandardMaterial } from "three";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { useSpring, animated, config  } from '@react-spring/three'

export function SpinningPics({rotate}) {
  const { nodes, materials } = useGLTF("./modern buildings/spinningPics10.gltf");

  const mirrorMaterial = new MeshStandardMaterial({metalness: 1, roughness: 0 })
  const [active, setActive] = useState(false);

  const { rotation } = useSpring({
    rotation: [0, rotate, 0], // Ensure that the rotation is applied correctly
    config: {
      friction: 15,
      tension: 200,
    },
    

  });

  const { scale } = useSpring({ 
    scale: active ? 1.1 : 1 
  })

  

  return (
    <animated.group rotation={rotation} scale={scale} onClick={() => setActive(!active)} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={mirrorMaterial}
        position={[0, 0, 5]}
        scale={[0.91, 0.54, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={mirrorMaterial}
        position={[0, 0, -5]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.91, 0.54, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={mirrorMaterial}
        position={[5, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.91, 0.54, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={mirrorMaterial}
        position={[-5, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.91, 0.54, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={mirrorMaterial}
        position={[3.536, 0, -3.536]}
        rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
        scale={[0.91, 0.54, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={mirrorMaterial}
        position={[-3.536, 0, 3.536]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[0.91, 0.54, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={mirrorMaterial}
        position={[-3.536, 0, -3.536]}
        rotation={[Math.PI, -Math.PI / 4, Math.PI]}
        scale={[0.91, 0.54, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={mirrorMaterial}
        position={[3.536, 0, 3.536]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[0.91, 0.54, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.002"]}
        position={[3.536, 0, -3.536]}
        rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
        scale={[0.91, 0.54, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Material.008"]}
        position={[5, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.91, 0.54, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials["Material.009"]}
        position={[3.536, 0, 3.536]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[0.91, 0.54, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials["Material.004"]}
        position={[0, 0, 5]}
        scale={[0.91, 0.54, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials["Material.005"]}
        position={[-3.536, 0, 3.536]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[0.91, 0.54, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials["Material.006"]}
        position={[-5, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.91, 0.54, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials["Material.007"]}
        position={[-3.536, 0, -3.536]}
        rotation={[Math.PI, -Math.PI / 4, Math.PI]}
        scale={[0.91, 0.54, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials["Material.010"]}
        position={[0, 0, -5]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.91, 0.54, 0.025]}
      />
    </animated.group>
  );
}

useGLTF.preload("./modern buildings/spinningPics10.gltf");

