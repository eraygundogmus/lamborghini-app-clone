import './App.scss';
import Header from './components/Header'
import { Canvas, useResource, useThree } from "react-three-fiber";
import {OrbitControls} from "@react-three/drei"
import { PerspectiveCamera, Html} from '@react-three/drei'
import React, { Suspense, extend  } from 'react'
import Model from './Scene'



function App() {
  const myCamera = useResource()
  return (
        <div className="app">
          <Header/>
          <Canvas 
          colorManagement
          > 
{/*           <Html

            center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
            fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
            distanceFactor={8} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
            transform
            sprite // Renders as sprite, but only in transform mode (default=false)

          >
            <h1>BASED <br></br> ON A <br></br> TRUE STORY</h1>
          </Html> */}
              <PerspectiveCamera 
              ref={myCamera}
              makeDefault
              position={[-12,5,5]}
              fov={5}
              >
              <mesh />
              </PerspectiveCamera>

            <Suspense fallback={null}>
            <Model 
            position={[0,-0.6,-1]} />
            </Suspense>
            <OrbitControls 
            maxAzimuthAngle={Math.PI }
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 2}
            minPolarAngle={Math.PI / 2.6}/> 
            <ambientLight intensity={1.5} />
            <pointLight position={[1, 1, 1]} />
          </Canvas>
        </div>
  );
}

export default App;
