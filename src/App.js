import './App.scss';
import Header from './components/Header'
import { Canvas, useResource, useThree } from "react-three-fiber";
import {OrbitControls} from "@react-three/drei"
import { PerspectiveCamera, Sky, Stars, ContactShadows, Shadow} from '@react-three/drei'
import React, { Suspense, extend  } from 'react'
import Model from './Scene'



function App() {
  const myCamera = useResource()
  return (<div>
    <Header/>
        <Canvas 
        colorManagement
      > 
      <PerspectiveCamera ref={myCamera}
  makeDefault // Registers it as the default camera system-wide (default=false)
    position={[4,5,-1]}
>
  <mesh />
</PerspectiveCamera>
          <OrbitControls camera={myCamera.current}/>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
          <Sky
  distance={4500} // Camera distance (default=450000)
  sunPosition={[22, 1, 3]} // Sun position normal (defaults to inclination and azimuth if not set)
  inclination={1} // Sun elevation angle from 0 to 1 (default=0)
  azimuth={0.25} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
/>
<Stars
  radius={100} // Radius of the inner sphere (default=100)
  depth={50} // Depth of area where stars should fit (default=50)
  count={5000} // Amount of stars (default=5000)
  factor={4} // Size factor (default=4)
  saturation={0} // Saturation 0-1 (default=0)
  fade // Faded dots (default=false)
/>
           <Model />
           <ContactShadows
  opacity={1}
  width={1}
  height={1}
  blur={1} // Amount of blur (default=1)
  far={10} // Focal distance (default=10)
  resolution={256} // Rendertarget resolution (default=256)
/>
<Shadow
  color="black" // Color (default:black)
  colorStop={0} // First gradient-stop (default:0)
  opacity={0.5} // Alpha (default:0.5)
  fog={false} // Reacts to fog (default=false)
/>
         </Suspense>
        </Canvas></div>
  );
}

export default App;
