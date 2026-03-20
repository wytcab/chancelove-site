'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Heart implicit equation: (x²+y²-1)³ - x²y³ ≤ 0
function insideHeart(x: number, y: number): boolean {
  const val = Math.pow(x * x + y * y - 1, 3) - x * x * Math.pow(y, 3)
  return val <= 0.015
}

export function WireframeHeart() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const w = mount.clientWidth || 480
    const h = mount.clientHeight || 520

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100)
    camera.position.z = 4.8

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    // ── Generate interior mesh points ──────────────────────────
    const res = 26
    const pts: THREE.Vector3[] = []

    for (let ix = -res; ix <= res; ix++) {
      for (let iy = -res; iy <= res; iy++) {
        const nx = (ix / res) * 1.25
        const ny = -(iy / res) * 1.1 - 0.1  // flip + center
        if (insideHeart(nx, ny)) {
          const jitter = 0.018
          pts.push(new THREE.Vector3(
            nx * 1.55 + (Math.random() - 0.5) * jitter,
            ny * 1.55 + (Math.random() - 0.5) * jitter,
            0
          ))
        }
      }
    }

    // ── Build triangulated edges ───────────────────────────────
    const maxDist = (1.25 / res) * 1.55 * 3.0
    const linePositions: number[] = []

    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const d = pts[i].distanceTo(pts[j])
        if (d < maxDist) {
          linePositions.push(
            pts[i].x, pts[i].y, 0,
            pts[j].x, pts[j].y, 0
          )
        }
      }
    }

    const meshGeo = new THREE.BufferGeometry()
    meshGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
    const meshMat = new THREE.LineBasicMaterial({
      color: 0x8B1A1A,
      transparent: true,
      opacity: 0.65,
    })
    group.add(new THREE.LineSegments(meshGeo, meshMat))

    // ── Bright glowing outline ─────────────────────────────────
    const outlinePts: THREE.Vector3[] = []
    for (let i = 0; i <= 300; i++) {
      const t = (i / 300) * Math.PI * 2
      const x = 16 * Math.pow(Math.sin(t), 3)
      const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
      outlinePts.push(new THREE.Vector3(x * 0.118, y * 0.118, 0.01))
    }
    const outlineGeo = new THREE.BufferGeometry().setFromPoints(outlinePts)
    group.add(new THREE.Line(outlineGeo, new THREE.LineBasicMaterial({
      color: 0xFF2020,
      transparent: true,
      opacity: 1.0,
    })))
    // Second pass slightly larger for glow illusion
    const glowGeo = new THREE.BufferGeometry().setFromPoints(
      outlinePts.map(p => new THREE.Vector3(p.x * 1.012, p.y * 1.012, 0))
    )
    group.add(new THREE.Line(glowGeo, new THREE.LineBasicMaterial({
      color: 0xFF5555,
      transparent: true,
      opacity: 0.3,
    })))

    // ── Vertex dots ────────────────────────────────────────────
    const dotPos = pts.flatMap(p => [p.x, p.y, 0.02])
    const dotGeo = new THREE.BufferGeometry()
    dotGeo.setAttribute('position', new THREE.Float32BufferAttribute(dotPos, 3))
    group.add(new THREE.Points(dotGeo, new THREE.PointsMaterial({
      color: 0xC9A84C,
      size: 0.035,
      transparent: true,
      opacity: 0.85,
    })))

    // ── Fragment triangles dissolving off upper-right ──────────
    type Fragment = { line: THREE.Line; vx: number; vy: number; vr: number }
    const frags: Fragment[] = []

    for (let f = 0; f < 28; f++) {
      // Scatter from right side of heart outward
      const cx = 0.8 + Math.random() * 1.8
      const cy = -0.3 + Math.random() * 1.8
      const sz = 0.06 + Math.random() * 0.28
      const a = Math.random() * Math.PI * 2

      const fPts = [
        new THREE.Vector3(cx + Math.cos(a) * sz,       cy + Math.sin(a) * sz,       0),
        new THREE.Vector3(cx + Math.cos(a + 2.09) * sz, cy + Math.sin(a + 2.09) * sz, 0),
        new THREE.Vector3(cx + Math.cos(a + 4.19) * sz, cy + Math.sin(a + 4.19) * sz, 0),
        new THREE.Vector3(cx + Math.cos(a) * sz,       cy + Math.sin(a) * sz,       0),
      ]

      const fGeo = new THREE.BufferGeometry().setFromPoints(fPts)
      const isGold = f % 3 === 0
      const fMat = new THREE.LineBasicMaterial({
        color: isGold ? 0xC9A84C : 0x8B1A1A,
        transparent: true,
        opacity: 0.25 + Math.random() * 0.55,
      })
      const fLine = new THREE.Line(fGeo, fMat)
      group.add(fLine)
      frags.push({
        line: fLine,
        vx: 0.0003 + Math.random() * 0.0008,
        vy: (Math.random() - 0.4) * 0.0006,
        vr: (Math.random() - 0.5) * 0.008,
      })
    }

    // ── Constellation dots (scattered outside heart) ───────────
    const constDots: number[] = []
    for (let d = 0; d < 35; d++) {
      constDots.push(
        0.8 + Math.random() * 2.2,
        -0.8 + Math.random() * 2.5,
        0
      )
    }
    const constGeo = new THREE.BufferGeometry()
    constGeo.setAttribute('position', new THREE.Float32BufferAttribute(constDots, 3))
    group.add(new THREE.Points(constGeo, new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.04,
      transparent: true,
      opacity: 0.5,
    })))

    // ── Animation ─────────────────────────────────────────────
    group.rotation.z = 0.05
    let t = 0
    let frame: number

    const fragOrigins = frags.map(f => ({
      x: f.line.position.x,
      y: f.line.position.y,
    }))

    const animate = () => {
      frame = requestAnimationFrame(animate)
      t += 0.008

      // Gentle float + micro-tilt
      group.rotation.y = Math.sin(t * 0.25) * 0.12
      group.rotation.x = Math.sin(t * 0.18) * 0.04 + 0.08
      group.position.y = Math.sin(t * 0.35) * 0.04

      // Drift fragments outward, loop back
      frags.forEach((f, i) => {
        f.line.position.x += f.vx
        f.line.position.y += f.vy
        f.line.rotation.z += f.vr
        // Reset when too far
        if (f.line.position.x > 1.8 || Math.abs(f.line.position.y) > 1.5) {
          f.line.position.x = fragOrigins[i].x
          f.line.position.y = fragOrigins[i].y
          f.line.rotation.z = 0
        }
      })

      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      if (!mount) return
      const nw = mount.clientWidth
      const nh = mount.clientHeight
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full" style={{ minHeight: '500px' }} />
}
