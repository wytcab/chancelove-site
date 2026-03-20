'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Build a flat geometric heart outline as Vector2 points
function buildHeartShape(scale: number): THREE.Vector2[] {
  const pts: THREE.Vector2[] = []
  const steps = 200
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2
    const x = 16 * Math.pow(Math.sin(t), 3)
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
    pts.push(new THREE.Vector2(x * scale, y * scale))
  }
  return pts
}

// Build a 3D heart ring at a given Z depth and XY scale
function buildHeartRing(xyScale: number, z: number, steps = 200): THREE.Vector3[] {
  const pts: THREE.Vector3[] = []
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2
    const x = 16 * Math.pow(Math.sin(t), 3)
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
    pts.push(new THREE.Vector3(x * xyScale, y * xyScale, z))
  }
  return pts
}

export function WireframeHeart() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const w = mount.clientWidth || 480
    const h = mount.clientHeight || 520

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100)
    camera.position.z = 6.5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    // ── Concentric heart rings (like the reference image) ─────
    // 5 rings: outermost is brightest, inner ones dimmer
    const ringCount = 6
    const baseScale = 0.082
    const rings: THREE.Line[] = []

    for (let r = 0; r < ringCount; r++) {
      const t = r / (ringCount - 1) // 0 = outermost, 1 = innermost
      const xyScale = baseScale * (1.0 - t * 0.32)
      const z = (r - ringCount / 2) * 0.22 // spread in Z for 3D depth

      const pts = buildHeartRing(xyScale, z)
      const geo = new THREE.BufferGeometry().setFromPoints(pts)

      // Outer rings: bright red/maroon. Inner: dimmer
      const brightness = r === 0 ? 1.0 : r === 1 ? 0.75 : 0.45 - t * 0.2
      const col = r <= 1
        ? new THREE.Color(1.0 * brightness, 0.05 * brightness, 0.05 * brightness)
        : new THREE.Color(0.55 * brightness, 0.05, 0.05)

      const mat = new THREE.LineBasicMaterial({
        color: col,
        transparent: true,
        opacity: r === 0 ? 1.0 : r === 1 ? 0.85 : 0.5 - t * 0.15,
      })
      const line = new THREE.Line(geo, mat)
      group.add(line)
      rings.push(line)
    }

    // ── Glow passes on outermost ring ──────────────────────────
    for (let g = 1; g <= 3; g++) {
      const glowScale = baseScale * (1.0 + g * 0.025)
      const pts = buildHeartRing(glowScale, (0 - ringCount / 2) * 0.22)
      const geo = new THREE.BufferGeometry().setFromPoints(pts)
      group.add(new THREE.Line(geo, new THREE.LineBasicMaterial({
        color: new THREE.Color(1.0, 0.1, 0.1),
        transparent: true,
        opacity: 0.12 / g,
      })))
    }

    // ── Circuit board traces along the outermost ring ──────────
    const tracePts = buildHeartRing(baseScale, (0 - ringCount / 2) * 0.22, 200)
    const traceCount = 55
    const traceGeo = new THREE.BufferGeometry()
    const tracePos: number[] = []

    for (let tc = 0; tc < traceCount; tc++) {
      const idx = Math.floor((tc / traceCount) * (tracePts.length - 1))
      const pt = tracePts[idx]
      const next = tracePts[Math.min(idx + 1, tracePts.length - 1)]

      // Direction along the ring
      const dir = new THREE.Vector3().subVectors(next, pt).normalize()
      // Perpendicular (outward)
      const perp = new THREE.Vector3(-dir.y, dir.x, 0).normalize()
      const len = 0.04 + Math.random() * 0.10

      // Short perpendicular tick mark
      const start = pt.clone()
      const end = pt.clone().addScaledVector(perp, len * (Math.random() > 0.5 ? 1 : -1))

      tracePos.push(start.x, start.y, start.z, end.x, end.y, end.z)

      // Dot at end of trace
      if (Math.random() > 0.4) {
        tracePos.push(end.x, end.y, end.z)
        const dot = end.clone().addScaledVector(perp, 0.015)
        tracePos.push(dot.x, dot.y, dot.z)
      }
    }
    traceGeo.setAttribute('position', new THREE.Float32BufferAttribute(tracePos, 3))
    group.add(new THREE.LineSegments(traceGeo, new THREE.LineBasicMaterial({
      color: 0xFF2222,
      transparent: true,
      opacity: 0.55,
    })))

    // ── Vertical connectors between rings (depth lines) ────────
    const connectSteps = 24
    for (let cs = 0; cs < connectSteps; cs++) {
      const idx = Math.floor((cs / connectSteps) * 199)
      const connectPts: THREE.Vector3[] = []
      for (let r = 0; r < ringCount; r++) {
        const xyScale = baseScale * (1.0 - (r / (ringCount - 1)) * 0.32)
        const z = (r - ringCount / 2) * 0.22
        const t = (idx / 200) * Math.PI * 2
        const x = 16 * Math.pow(Math.sin(t), 3) * xyScale
        const y = (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * xyScale
        connectPts.push(new THREE.Vector3(x, y, z))
      }
      const cGeo = new THREE.BufferGeometry().setFromPoints(connectPts)
      group.add(new THREE.Line(cGeo, new THREE.LineBasicMaterial({
        color: 0x8B1A1A,
        transparent: true,
        opacity: 0.25,
      })))
    }

    // ── Floating circuit dots ──────────────────────────────────
    const dotCount = 80
    const dotPos: number[] = []
    for (let d = 0; d < dotCount; d++) {
      const idx = Math.floor(Math.random() * 199)
      const r = Math.floor(Math.random() * ringCount)
      const xyScale = baseScale * (1.0 - (r / (ringCount - 1)) * 0.32)
      const z = (r - ringCount / 2) * 0.22
      const t = (idx / 200) * Math.PI * 2
      const x = 16 * Math.pow(Math.sin(t), 3) * xyScale
      const y = (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * xyScale
      dotPos.push(x, y, z)
    }
    const dotGeo = new THREE.BufferGeometry()
    dotGeo.setAttribute('position', new THREE.Float32BufferAttribute(dotPos, 3))
    group.add(new THREE.Points(dotGeo, new THREE.PointsMaterial({
      color: 0xFF3333,
      size: 0.032,
      transparent: true,
      opacity: 0.9,
    })))

    // ── Gold accent dots ───────────────────────────────────────
    const goldPos: number[] = []
    for (let g = 0; g < 25; g++) {
      const idx = Math.floor(Math.random() * 199)
      const xyScale = baseScale * 0.95
      const t = (idx / 200) * Math.PI * 2
      const x = 16 * Math.pow(Math.sin(t), 3) * xyScale
      const y = (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * xyScale
      goldPos.push(x, y, (0 - ringCount / 2) * 0.22)
    }
    const goldGeo = new THREE.BufferGeometry()
    goldGeo.setAttribute('position', new THREE.Float32BufferAttribute(goldPos, 3))
    group.add(new THREE.Points(goldGeo, new THREE.PointsMaterial({
      color: 0xC9A84C,
      size: 0.04,
      transparent: true,
      opacity: 0.85,
    })))

    // ── Center Y symbol ────────────────────────────────────────
    const yStem = [
      new THREE.Vector3(-0.08, 0.2, 0), new THREE.Vector3(0, 0.05, 0),
      new THREE.Vector3(0.08, 0.2, 0),  new THREE.Vector3(0, 0.05, 0),
      new THREE.Vector3(0, 0.05, 0),    new THREE.Vector3(0, -0.15, 0),
    ]
    const yGeo = new THREE.BufferGeometry().setFromPoints(yStem)
    group.add(new THREE.LineSegments(yGeo, new THREE.LineBasicMaterial({
      color: 0xFF4444, transparent: true, opacity: 0.7,
    })))

    // ── Animation ──────────────────────────────────────────────
    group.position.y = -0.1
    let t = 0
    let frame: number
    let beatFrame = 0
    const beatCycle = 130

    const animate = () => {
      frame = requestAnimationFrame(animate)
      t += 0.006
      beatFrame++

      // Globe-style Y rotation + gentle X wobble
      group.rotation.y += 0.009
      group.rotation.x = Math.sin(t * 0.3) * 0.15 + 0.08

      // Heartbeat: double-pump
      const bf = beatFrame % beatCycle
      let scale = 1.0
      if (bf < 7)       scale = 1.0 + (bf / 7) * 0.055
      else if (bf < 13) scale = 1.055 - ((bf - 7) / 6) * 0.035
      else if (bf < 19) scale = 1.02 + ((bf - 13) / 6) * 0.05
      else if (bf < 27) scale = 1.07 - ((bf - 19) / 8) * 0.07
      group.scale.setScalar(scale)

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
