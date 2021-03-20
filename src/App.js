import './App.scss';
import Header from './components/Header'
import { Canvas, useResource } from "react-three-fiber";
import {OrbitControls} from "@react-three/drei"
import { PerspectiveCamera,  ContactShadows  } from '@react-three/drei'
import React, { Suspense  } from 'react'
import Model from './Scene'




function App() {
  const myCamera = useResource()
  return (
        <div className="app">
          <Header/>
          <div>
            <h2>CENTENARIO</h2>
          <h1>BASED ON<br></br>A TRUE STORY</h1>
          </div>
          <Canvas
          colorManagement> 


            <PerspectiveCamera 
                ref={myCamera}
                makeDefault
                position={[8,5,22]}
                fov={5.5}
                aspect={1}
                >
                <mesh />
              </PerspectiveCamera>
              <Suspense fallback={null}>
                <Model 
                position={[0,-0.6,-1]} />
      <ContactShadows position={[-0.01, -0.57, 0]} width={8} height={10} far={3} rotation={[Math.PI / 2, 0, 0]} />
              </Suspense>
              <ambientLight color={0xFFF200}intensity={0.3} />
              <pointLight intensity={0.1}color={0xFFF200} position={[1, 1, 1]} />
       
              <pointLight color={0xECECEC} position={[2, 5, 1]} />
              <pointLight  color={0xECECEC}position={[-15, 1, 1]} />
              <pointLight color={0xECECEC} position={[0, 12, 1]} />


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
