import './App.scss';
import Header from './components/Header'
import { Canvas, useResource, useThree } from "react-three-fiber";
import {OrbitControls} from "@react-three/drei"
import { PerspectiveCamera,  ContactShadows  } from '@react-three/drei'
import React, { Suspense  } from 'react'
import Model from './Scene'




function App() {
  const myCamera = useResource()
  return (
        <div className="app">
          <Header/>
          <h1>BASED <br></br>ON A <br></br>TRUE STORY</h1>
          <Canvas> 

            <PerspectiveCamera 
                ref={myCamera}
                makeDefault
                position={[8,3,22]}
                fov={5.7}
                aspect={1}
                >
                <mesh />
              </PerspectiveCamera>
              <Suspense fallback={null}>
                <Model 
                position={[0,-0.6,-1]} />
      <ContactShadows position={[0, -0.57, 0]} width={8} height={10} far={3} rotation={[Math.PI / 2, 0, 0]} />
              </Suspense>
              <ambientLight intensity={1} />
              <pointLight position={[12, 5, 1]} />
              <pointLight position={[2, 5, 1]} />
              <pointLight position={[-15, 1, 1]} />

              <pointLight position={[0, 0, 0]} />
              <OrbitControls 
                enableZoom={false}
                maxAzimuthAngle={Math.PI }
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={-Math.PI / 2}
              minPolarAngle={Math.PI / 2.6}/> 
          </Canvas>
          
        </div>
  );
}

export default App;
