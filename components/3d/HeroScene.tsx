'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Animated Neon Grid
function NeonGrid() {
    const grid1 = useRef<THREE.Object3D>(null)
    const grid2 = useRef<THREE.Object3D>(null)

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()

        if (grid1.current) {
            grid1.current.position.z = (time * 2) % 20 - 10
        }

        if (grid2.current) {
            grid2.current.position.z = ((time * 2) % 20) - 10 + 20
        }
    })

    return (
        <group rotation={[Math.PI / 2.5, 0, 0]} position={[0, -5, 0]}>
            <primitive
                ref={grid1}
                object={new THREE.GridHelper(50, 50, new THREE.Color('#4F46E5'), new THREE.Color('#8b5cf6'))}
            />
            <primitive
                ref={grid2}
                object={new THREE.GridHelper(50, 50, new THREE.Color('#4F46E5'), new THREE.Color('#8b5cf6'))}
            />
        </group>
    )
}

// Glowing Particles
function GlowingParticles() {
    const particlesRef = useRef<THREE.Points>(null)
    const particleCount = 1000

    const particles = useRef<THREE.BufferGeometry>()

    if (!particles.current) {
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(particleCount * 3)
        const colors = new Float32Array(particleCount * 3)

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 50
            positions[i * 3 + 1] = (Math.random() - 0.5) * 30
            positions[i * 3 + 2] = (Math.random() - 0.5) * 30

            const colorChoice = Math.random()
            if (colorChoice < 0.25) {
                colors[i * 3] = 0.31
                colors[i * 3 + 1] = 0.27
                colors[i * 3 + 2] = 0.9
            } else if (colorChoice < 0.5) {
                colors[i * 3] = 0.93
                colors[i * 3 + 1] = 0.28
                colors[i * 3 + 2] = 0.59
            } else if (colorChoice < 0.75) {
                colors[i * 3] = 0.54
                colors[i * 3 + 1] = 0.36
                colors[i * 3 + 2] = 0.96
            } else {
                colors[i * 3] = 0.06
                colors[i * 3 + 1] = 0.71
                colors[i * 3 + 2] = 0.83
            }
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
        particles.current = geometry
    }

    useFrame(({ clock }) => {
        if (!particlesRef.current) return
        particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05
    })

    return (
        <points ref={particlesRef} geometry={particles.current}>
            <pointsMaterial
                size={0.3}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    )
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10">
            {/* Neon gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/50 to-slate-950" />

            {/* Radial neon glows */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Three.js Canvas */}
            <Canvas
                camera={{ position: [0, 5, 15], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.3} />
                <pointLight position={[0, 10, 0]} intensity={1} color="#4F46E5" />
                <pointLight position={[10, 0, 10]} intensity={0.8} color="#ec4899" />
                <pointLight position={[-10, 0, 10]} intensity={0.8} color="#06b6d4" />

                <NeonGrid />
                <GlowingParticles />
            </Canvas>
        </div>
    )
}
