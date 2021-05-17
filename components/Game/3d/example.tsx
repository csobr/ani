import React, {Suspense, useRef} from 'react';

import {Canvas, useFrame} from '@react-three/fiber';

function Floor({args}) {
  const floor = useRef();

  useFrame(() => {
    floor.current.position.z += 0.4;
  });
  return (
    <mesh visible position={[0, -30, 0]} rotation={[-Math.PI / 2, 0, 0]} ref={floor}>
      return (
      <planeBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial material="material" color="hotpink" wireframe />
    </mesh>
  );
}

const Scene = () => {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <Canvas camera={{position: [0, 0, 40], fov: 30}} style={{backgroundColor: 'black'}}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} />
        <pointLight position={[10, -10, 10]} />

        <Suspense fallback={null}></Suspense>
        <Floor args={[50, 3000, 10, 100]} />
      </Canvas>
    </div>
  );
};
export default Scene;
