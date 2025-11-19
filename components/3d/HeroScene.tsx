'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, Sparkles } from '@react-three/drei'
import { Suspense } from 'react'

function FloatingShape({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
    return (
        <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
            <mesh position={position}>
                <sphereGeometry args={[1, 32, 32]} />
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0}
                />
            </mesh>
        </Float>
    )
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />

                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <Sparkles count={100} scale={12} size={4} speed={0.4} opacity={0.5} color="#4F46E5" />

                    <FloatingShape position={[-4, 2, -5]} color="#4F46E5" speed={1.5} />
                    <FloatingShape position={[4, -2, -5]} color="#ec4899" speed={2} />
                    <FloatingShape position={[0, 0, -10]} color="#8b5cf6" speed={1} />

                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                </Suspense>
            </Canvas>
        </div>
    )
}
