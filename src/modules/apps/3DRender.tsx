import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useMemo } from 'react'

export type Type = 'cube' | 'sphere' | 'triangle' | 'cone'

export const Render = (props: { image: string; type: Type }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const map = useLoader(TextureLoader, props.image)

  const geo = useMemo(() => {
    switch (props.type) {
      case 'cube':
        return <boxGeometry args={[1, 1, 1]} />
      case 'sphere':
        return <sphereGeometry args={[0.8, 32, 32]} />
      case 'triangle':
        return <coneGeometry args={[1, 1, 3]} />
      case 'cone':
        return <coneGeometry args={[1, 1, 999]} />
    }
  }, [props.type])

  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 15 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <mesh>
        {geo}
        <meshStandardMaterial map={map} />{' '}
      </mesh>
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
    </Canvas>
  )
}
