'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Generate heart surface points using parametric form
// Maps (u, v) → 3D heart surface point
function heartSurface(u: number, v: number): THREE.Vector3 {
  // u: 0..2π (longitude around the heart outline)
  // v: 0..2π (rotation around the heart's own axis — makes it 3D)
  const x = 16 * Math.pow(Math.sin(u), 3)
  const y = 13 * Math.cos(u) - 5 * Math.cos(2 * u) - 2 * Math.cos(3 * u) - Math.cos(4 * u)
  // Revolve around Y axis to give 3D volume
  const r = Math.sqrt(x * x) * 0.5 // radius at this u
  const sx = (x * Math.cos(v)) * 0.08
  const sy = y * 0.08
  const sz = (r * Math.sin(v)) * 0.8
  return new THREE.Vector3(sx, sy, sz)
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
    camera.position.z = 5.5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const uSegs = 80  // longitude lines
    const vSegs = 40  // latitude lines

    // Build grid of surface points
    const pts: THREE.Vector3[][] = []
    for (let i = 0; i <= uSegs; i++) {
      pts[i] = []
      for (let j = 0; j <= vSegs; j++) {
        const u = (i / uSegs) * Math.PI * 2
        const v = (j / vSegs) * Math.PI * 2
        pts[i][j] = heartSurface(u, v)
      }
    }

    // Latitude lines (constant u, vary v) — maroon
    for (let i = 0; i < uSegs; i += 4) {
      const row: THREE.Vector3[] = []
      for (let j = 0; j <= vSegs; j++) row.push(pts[i][j].clone())
      const geo = new THREE.BufferGeometry().setFromPoints(row)
      const t = i / uSegs
      const col = new THREE.Color().lerpColors(
        new THREE.Color(0x8B1A1A),
        new THREE.Color(0xC9A84C),
        t
      )
      group.add(new THREE.Line(geo, new THREE.LineBasicMaterial({
        color: col, transparent: true, opacity: 0.55,
      })))
    }

    // Longitude lines (constant v, vary u) — gold
    for (let j = 0; j < vSegs; j += 3) {
      const col: THREE.Vector3[] = []
      for (let i = 0; i <= uSegs; i++) col.push(pts[i][j].clone())
      const geo = new THREE.BufferGeometry().setFromPoints(col)
      group.add(new THREE.Line(geo, new THREE.LineBasicMaterial({
        color: 0xC9A84C, transparent: true, opacity: 0.3,
      })))
    }

    // Bright front outline (v = 0 slice)
    const outlinePts: THREE.Vector3[] = []
    for (let i = 0; i <= uSegs; i++) outlinePts.push(pts[i][0].clone())
    group.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(outlinePts),
      new THREE.LineBasicMaterial({ color: 0xFF2020, transparent: true, opacity: 0.9 })
    ))
    // Glow layer
    const glowPts = outlinePts.map(p => new THREE.Vector3(p.x * 1.02, p.y * 1.02, p.z))
    group.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(glowPts),
      new THREE.LineBasicMaterial({ color: 0xFF6666, transparent: true, opacity: 0.25 })
    ))

    // Surface vertex dots
    const dotPositions: number[] = []
    for (let i = 0; i <= uSegs; i += 4) {
      for (let j = 0; j <= vSegs; j += 4) {
        dotPositions.push(pts[i][j].x, pts[i][j].y, pts[i][j].z)
      }
    }
    const dotGeo = new THREE.BufferGeometry()
    dotGeo.setAttribute('position', new THREE.Float32BufferAttribute(dotPositions, 3))
    group.add(new THREE.Points(dotGeo, new THREE.PointsMaterial({
      color: 0xC9A84C, size: 0.028, transparent: true, opacity: 0.9,
    })))

    // Fragment triangles dissolving off upper-right
    type Frag = { line: THREE.Line; vx: number; vy: number; vr: number; ox: number; oy: number }
    const frags: Frag[] = []
    for (let f = 0; f < 22; f++) {
      const cx = 0.5 + Math.random() * 1.4
      const cy = 0.2 + Math.random() * 1.2
      const sz = 0.07 + Math.random() * 0.22
      const a = Math.random() * Math.PI * 2
      const fPts = [
        new THREE.Vector3(cx + Math.cos(a) * sz,        cy + Math.sin(a) * sz,        0.05),
        new THREE.Vector3(cx + Math.cos(a + 2.09) * sz, cy + Math.sin(a + 2.09) * sz, 0.05),
        new THREE.Vector3(cx + Math.cos(a + 4.19) * sz, cy + Math.sin(a + 4.19) * sz, 0.05),
        new THREE.Vector3(cx + Math.cos(a) * sz,        cy + Math.sin(a) * sz,        0.05),
      ]
      const fLine = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(fPts),
        new THREE.LineBasicMaterial({
          color: f % 3 === 0 ? 0xC9A84C : 0x8B1A1A,
          transparent: true,
          opacity: 0.2 + Math.random() * 0.5,
        })
      )
      group.add(fLine)
      frags.push({ line: fLine, vx: 0.0004 + Math.random() * 0.0009, vy: (Math.random() - 0.3) * 0.0005, vr: (Math.random() - 0.5) * 0.009, ox: cx, oy: cy })
    }

    // ── Animation ──────────────────────────────────────────────
    group.position.y = -0.15
    let t = 0
    let frame: number

    // Heartbeat: scale keyframes (quick double-pump)
    const beatCycle = 140 // frames per beat
    let beatFrame = 0

    const animate = () => {
      frame = requestAnimationFrame(animate)
      t += 0.005
      beatFrame++

      // Globe-style rotation (Y + slight wobble)
      group.rotation.y += 0.007
      group.rotation.x = Math.sin(t * 0.4) * 0.18 + 0.1

      // Heartbeat pulse — double thump every beatCycle frames
      const bf = beatFrame % beatCycle
      let scale = 1.0
      if (bf < 8)       scale = 1.0 + (bf / 8) * 0.06          // beat 1 up
      else if (bf < 14) scale = 1.06 - ((bf - 8) / 6) * 0.04   // beat 1 down
      else if (bf < 20) scale = 1.02 + ((bf - 14) / 6) * 0.045 // beat 2 up
      else if (bf < 28) scale = 1.065 - ((bf - 20) / 8) * 0.065 // beat 2 down
      group.scale.setScalar(scale)

      // Fragment drift
      frags.forEach(f => {
        f.line.position.x += f.vx
        f.line.position.y += f.vy
        f.line.rotation.z += f.vr
        if (f.line.position.x > 1.6 || Math.abs(f.line.position.y) > 1.4) {
          f.line.position.set(0, 0, 0)
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
