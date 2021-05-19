import React, {Suspense, useRef} from 'react';
import * as THREE from 'three';

import {Canvas, useFrame} from '@react-three/fiber';

function Floor({args}) {
  const floor = useRef();

  useFrame(() => {
    floor.current.position.z += 0;
  });
  return (
    <mesh visible position={[0, -100, 0]} rotation={[-Math.PI / 2, 0, 0]} ref={floor}>
      return (
      <planeBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial material="material" color="hotpink" />
    </mesh>
  );
}

function Triangel() {
  const points = [];
  points.push(new THREE.Vector3(0, 0, 0));
  points.push(new THREE.Vector3(10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 10));
  points.push(new THREE.Vector3(-10, 0, 0));
  points.push(new THREE.Vector3(0, 0, 0));

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <group position={[0, -2.5, -10]}>
      <line geometry={lineGeometry}>
        <lineBasicMaterial attach="material" color="red" linewidth={1} linecap={'round'} />
      </line>
    </group>
  );
}
function Square() {
  const points = [];
  points.push(new THREE.Vector3(10, 10, 0));
  points.push(new THREE.Vector3(10, 0, 0));
  points.push(new THREE.Vector3(0, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 10, 0));

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <group position={[-5, -5, 10]}>
      <line geometry={lineGeometry}>
        <lineBasicMaterial attach="material" color="red" linewidth={1} linecap={'round'} linejoin={'round'} />
      </line>
    </group>
  );
}

const Scene = () => {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <Canvas camera={{position: [0, 0, 20]}} style={{backgroundColor: 'black'}}>
        <pointLight position={[10, 10, 10]} />
        <ambientLight color="red" intensity={0.4} />
        <Suspense fallback={null}></Suspense>

        <Square />
        <Triangel />
        {/* <Floor args={[5000, 3000, 10, 100]} /> */}
      </Canvas>
    </div>
  );
};
export default Scene;
