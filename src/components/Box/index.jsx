import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export const Box = (props) => {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const [rotated, setRotated] = useState(false)

  // Anima o meu componente 60 fps
  useFrame((_, delta) => {
    if (rotated) {
      ref.current.rotation.x += 1 * delta
      ref.current.rotation.y += 0.5 * delta
    }
  })

  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? [1.1, 1.1, 1.1] : 1}
      onPointerDown={() => setRotated((prev) => !prev)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerUpdate={(e) => console.log(e)}>
      <boxGeometry />
      <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe />
    </mesh>
  )
}
