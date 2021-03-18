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
        <div>
          <Header/>
          <Canvas 
          colorManagement
          > 
          <Html
            prepend // Project content behind the canvas (default: false)
            center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
            fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
            distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
            zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])
            transform // If true, applies matrix3d transformations (default=false)
            sprite // Renders as sprite, but only in transform mode (default=false)

          >
            <h1>hello</h1>
            <p>world</p>
          </Html>
              <PerspectiveCamera 
              ref={myCamera}
              makeDefault
              position={[0,3,2]}
              >
              <mesh />
              </PerspectiveCamera>
              <OrbitControls camera={myCamera.current}/>
              <ambientLight intensity={1} />
              <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
            <Model />
            </Suspense>
          </Canvas>
        </div>
  );
}

export default App;
