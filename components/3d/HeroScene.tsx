'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, Box, Torus, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Simplified Wavy Particles Component
function WavyParticles() {
    const pointsRef = useRef<THREE.Points>(null)
    const particleCount = 1500

    // Create particles
    const particlesGeometry = useRef<THREE.BufferGeometry>()

    if (!particlesGeometry.current) {
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(particleCount * 3)
        const colors = new Float32Array(particleCount * 3)

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 40
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20
            positions[i * 3 + 2] = (Math.random() - 0.5) * 40

            // Gradient colors
            const colorIndex = i / particleCount
            if (colorIndex < 0.33) {
                colors[i * 3] = 0.31
                colors[i * 3 + 1] = 0.27
                colors[i * 3 + 2] = 0.9
            } else if (colorIndex < 0.66) {
                colors[i * 3] = 0.54
                colors[i * 3 + 1] = 0.36
                colors[i * 3 + 2] = 0.96
            } else {
                colors[i * 3] = 0.93
                colors[i * 3 + 1] = 0.28
                colors[i * 3 + 2] = 0.59
            }
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
        particlesGeometry.current = geometry
    }

    useFrame(({ clock }) => {
        if (!pointsRef.current) return

        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
        const time = clock.getElapsedTime() * 0.5

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3
            const x = positions[i3]
            const z = positions[i3 + 2]
            positions[i3 + 1] = Math.sin(x * 0.3 + time) * Math.cos(z * 0.3 + time) * 2
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true
    })

    return (
        <points ref={pointsRef} geometry={particlesGeometry.current}>
            <pointsMaterial
                size={0.2}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    )
}

// Floating 3D Shapes
function FloatingShapes() {
    return (
        <group>
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <Box args={[1.5, 1.5, 1.5]} position={[-6, 3, -8]}>
                    <meshStandardMaterial
                        color="#4F46E5"
                        wireframe
                        transparent
                        opacity={0.4}
                    />
                </Box>
            </Float>

            <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
                <Sphere args={[1, 32, 32]} position={[6, -2, -6]}>
                    <MeshDistortMaterial
                        color="#ec4899"
                        distort={0.3}
                        speed={2}
                        transparent
                        opacity={0.5}
                    />
                </Sphere>
            </Float>

            <Float speed={1.8} rotationIntensity={2} floatIntensity={2.5}>
                <Torus args={[1.2, 0.4, 16, 32]} position={[4, 4, -10]}>
                    <meshStandardMaterial
                        color="#8b5cf6"
                        wireframe
                        transparent
                        opacity={0.4}
                    />
                </Torus>
            </Float>

            <Float speed={1.3} rotationIntensity={1} floatIntensity={1.8}>
                <Box args={[1, 1, 1]} position={[-5, -3, -7]}>
                    <MeshDistortMaterial
                        color="#06b6d4"
                        distort={0.2}
                        speed={1.5}
                        transparent
                        opacity={0.4}
                    />
                </Box>
            </Float>
        </group>
    )
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10 opacity-70">
            <Canvas
                camera={{ position: [0, 0, 12], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={0.8} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />

                <WavyParticles />
                <FloatingShapes />
            </Canvas>
        </div>
    )
}
