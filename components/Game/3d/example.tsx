import React, {Suspense, useRef, useEffect} from 'react';
import * as THREE from 'three';
import {Canvas, useFrame, useThree} from '@react-three/fiber';
import {OrbitControls} from 'three-stdlib';
import {Sky} from '@react-three/drei';

const CameraController = () => {
  const {camera, gl} = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 1;
    controls.maxDistance = 20;

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

function Floor({args}) {
  const floor = useRef();

  useFrame(() => {
    floor.current.position.z += 0;
  });
  return (
    <mesh visible position={[0, -200, 0]} rotation={[-Math.PI / 2, 0, 0]} ref={floor}>
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
    <group position={[-5, -5, 1]}>
      <line geometry={lineGeometry}>
        <lineBasicMaterial attach="material" color="black" linewidth={1} linecap={'round'} linejoin={'round'} />
      </line>
    </group>
  );
}

function SkyBox() {}

const Scene = () => {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <Canvas camera={{position: [0, 0, 10]}} style={{backgroundColor: '#cce0ff'}}>
        <CameraController />
        <Sky sunPosition={[100, 10, 10, 100]} />
        <Suspense fallback={null}></Suspense>

        <Square />

        {/* <Floor args={[5000, 3000, 10, 100]} /> */}
      </Canvas>
    </div>
  );
};
export default Scene;
