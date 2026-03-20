'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function WireframeHeart() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // Scene
    const scene = new THREE.Scene()
    const w = mount.clientWidth
    const h = mount.clientHeight
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Build heart shape using parametric points
    const heartPoints: THREE.Vector3[] = []
    const segments = 200
    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * Math.PI * 2
      // Classic heart parametric equations
      const x = 16 * Math.pow(Math.sin(t), 3)
      const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
      heartPoints.push(new THREE.Vector3(x / 10, y / 10, 0))
    }

    // Create a 3D heart by extruding the 2D heart shape with depth layers
    const group = new THREE.Group()

    // Maroon and gold palette
    const maroon = new THREE.Color(0x8B1A1A)
    const gold = new THREE.Color(0xC9A84C)
    const white = new THREE.Color(0xE8E6E1)

    // Draw multiple heart layers at different depths and scales (wireframe effect)
    const layers = 18
    for (let l = 0; l < layers; l++) {
      const t = l / (layers - 1) // 0 to 1
      const scale = 0.5 + t * 0.5 // 0.5 to 1.0
      const z = (t - 0.5) * 3 // -1.5 to 1.5

      const pts: THREE.Vector3[] = []
      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2
        const x = 16 * Math.pow(Math.sin(angle), 3)
        const y = 13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle)
        pts.push(new THREE.Vector3((x / 10) * scale, (y / 10) * scale, z))
      }

      const geo = new THREE.BufferGeometry().setFromPoints(pts)
      // Blend color: maroon at front, gold at back, white at middle
      const color = t < 0.5
        ? maroon.clone().lerp(white, t * 2)
        : white.clone().lerp(gold, (t - 0.5) * 2)

      const mat = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity: 0.4 + t * 0.5,
      })
      const line = new THREE.Line(geo, mat)
      group.add(line)
    }

    // Vertical connecting lines (longitude-style) for 3D structure
    const meridians = 24
    for (let m = 0; m < meridians; m++) {
      const angle = (m / meridians) * Math.PI * 2
      const idx = Math.floor((angle / (Math.PI * 2)) * segments)
      const baseX = 16 * Math.pow(Math.sin(angle), 3)
      const baseY = 13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle)

      const linePts: THREE.Vector3[] = []
      for (let l = 0; l < layers; l++) {
        const t = l / (layers - 1)
        const scale = 0.5 + t * 0.5
        const z = (t - 0.5) * 3
        linePts.push(new THREE.Vector3((baseX / 10) * scale, (baseY / 10) * scale, z))
      }

      const geo = new THREE.BufferGeometry().setFromPoints(linePts)
      const mat = new THREE.LineBasicMaterial({
        color: gold,
        transparent: true,
        opacity: 0.15,
      })
      group.add(new THREE.Line(geo, mat))
    }

    // Glowing particles along the heart outline
    const particleCount = 120
    const particlePositions: number[] = []
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2
      const x = 16 * Math.pow(Math.sin(angle), 3)
      const y = 13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle)
      const z = (Math.random() - 0.5) * 3
      const scale = 0.5 + ((z + 1.5) / 3) * 0.5
      particlePositions.push((x / 10) * scale, (y / 10) * scale, z)
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0xC9A84C,
      size: 0.04,
      transparent: true,
      opacity: 0.8,
    })
    group.add(new THREE.Points(particleGeo, particleMat))

    // Tilt slightly for dramatic angle
    group.rotation.x = 0.3
    scene.add(group)

    // Animation
    let frame: number
    let mouseX = 0, mouseY = 0
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.4
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.2
    }
    window.addEventListener('mousemove', onMouseMove)

    const animate = () => {
      frame = requestAnimationFrame(animate)
      group.rotation.y += 0.006
      group.rotation.x += (0.3 + mouseY * 0.5 - group.rotation.x) * 0.05
      group.rotation.y += (mouseX * 0.5 - group.rotation.y % (Math.PI * 2)) * 0.01
      renderer.render(scene, camera)
    }
    animate()

    // Resize
    const onResize = () => {
      if (!mount) return
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      style={{ minHeight: '500px' }}
    />
  )
}
