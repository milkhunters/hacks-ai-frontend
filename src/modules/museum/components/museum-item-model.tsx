import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from '@react-three/drei'
import { Loader2 } from 'lucide-react';
import { useCreateModel } from '../hooks/useCreateTask';

interface ModelProps {
   url: string,
}

interface MuseumItemModelProps {
   taskId: string
}

const Model = ({ url }: ModelProps) => {
   const obj = useLoader(GLTFLoader, url)
   return <primitive object={obj.scene} dispose={null} />
}

export const MuseumItemModel = ({ taskId }: MuseumItemModelProps) => {

   const { status, url } = useCreateModel(taskId)

   return (
      <div className='flex items-center justify-center w-full h-full' >
         {!(status === 'SUCCEEDED') && <Loader2 size={30} className='stroke-primary animate-spin' />}
         <Canvas style={{ width: status === 'SUCCEEDED' ? '100%' : 0, height: status === 'SUCCEEDED' ? '100%' : 0 }} camera={{ position: [0, 5, 1] }}>
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <directionalLight position={[-10, -10, -5]} intensity={1} />
            <OrbitControls />
            {status === 'SUCCEEDED' && <Model url={url} />}
         </Canvas>
      </div >
   )
}