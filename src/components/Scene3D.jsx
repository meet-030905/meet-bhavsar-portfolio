import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Torus, MeshDistortMaterial, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

/**
 * The main 3D scene rendered in the hero.
 * On low-powered devices the <Suspense> fallback (CSS gradient blob) shows instead.
 */

function GlassSphere() {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.12
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08
    }
  })
  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <Sphere args={[1.4, 64, 64]}>
          <MeshDistortMaterial
            color="#7c3aed"
            attach="material"
            distort={0.38}
            speed={2.2}
            roughness={0}
            metalness={0.9}
            transmission={0.6}
            thickness={1.5}
          />
        </Sphere>
      </mesh>
    </Float>
  )
}

function OrbitRing({ radius = 2.2, color = '#3b82f6', tiltX = 0, tiltZ = 0 }) {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z += 0.004
    }
  })
  return (
    <mesh ref={ref} rotation={[tiltX, 0, tiltZ]}>
      <Torus args={[radius, 0.018, 16, 100]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.6}
          roughness={0.1}
          metalness={0.8}
        />
      </Torus>
    </mesh>
  )
}

function Particles({ count = 80 }) {
  const ref = useRef()
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 8
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8
    positions[i * 3 + 2] = (Math.random() - 0.5) * 5
  }

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.05
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#a78bfa" size={0.04} transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

function SceneContents({ mouseX = 0, mouseY = 0 }) {
  const groupRef = useRef()
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (mouseX * 0.3 - groupRef.current.rotation.y) * 0.05
      groupRef.current.rotation.x += (-mouseY * 0.15 - groupRef.current.rotation.x) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <GlassSphere />
      <OrbitRing radius={2.2} color="#8b5cf6" tiltX={Math.PI / 5} tiltZ={Math.PI / 8} />
      <OrbitRing radius={2.8} color="#3b82f6" tiltX={-Math.PI / 6} tiltZ={Math.PI / 4} />
      <Particles count={100} />
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 4, 4]}  intensity={2}   color="#a78bfa" />
      <pointLight position={[-4, -2, 2]} intensity={1.5} color="#60a5fa" />
      <Environment preset="night" />
    </group>
  )
}

/**
 * CSS fallback — shown when WebGL unavailable or reduced-motion
 */
function FallbackBlob() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/60 to-blue-600/60 blur-3xl animate-float" />
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-500/40 to-blue-500/40 blur-xl animate-float-slow" />
        <div className="absolute inset-16 rounded-full glass border border-purple-500/30" />
      </div>
    </div>
  )
}

export default function Scene3D({ mouseX = 0, mouseY = 0, prefersReducedMotion = false }) {
  if (prefersReducedMotion) return <FallbackBlob />

  return (
    <Suspense fallback={<FallbackBlob />}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        aria-hidden="true"
      >
        <SceneContents mouseX={mouseX} mouseY={mouseY} />
      </Canvas>
    </Suspense>
  )
}
