import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls, Html} from '@react-three/drei'
import { Loader2 } from 'lucide-react';

interface ModelProps {
   url: string,
}

const Model = ({ url }: ModelProps) => {
   const obj = useLoader(GLTFLoader, url)
   return <primitive object={obj.scene} dispose={null} />
}

export const MuseumItemModel = ({ url }: ModelProps) => {
   return (
      <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 5, 1] }}>
         <directionalLight position={[10, 10, 5]} intensity={2} />
         <directionalLight position={[-10, -10, -5]} intensity={1} />
         <OrbitControls />
         <Suspense fallback={<Html><Loader2 size={30} className='stroke-primary animate-spin' /></Html>}>
            <Model url={url} />
         </Suspense>
      </Canvas>
   )
}