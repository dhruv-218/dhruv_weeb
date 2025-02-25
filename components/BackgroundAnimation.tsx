"use client"

import { useEffect, useRef } from "react"

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const folkPatterns = [
      // Define simple Indian folk patterns as arrays of points
      [
        [0, 0],
        [10, 10],
        [20, 0],
        [30, 10],
        [40, 0],
      ],
      [
        [0, 0],
        [10, 20],
        [20, 0],
        [30, 20],
        [40, 0],
      ],
      [
        [0, 10],
        [20, 0],
        [40, 10],
        [20, 20],
        [0, 10],
      ],
    ]

    const particles: Particle[] = []

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      pattern: number[][]

      constructor() {
        this.x = Math.random() * (canvas?.width || 0)
        this.y = Math.random() * (canvas?.height || 0)
        this.size = Math.random() * 20 + 10
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.pattern = folkPatterns[Math.floor(Math.random() * folkPatterns.length)]
      }

      update(mouseX: number, mouseY: number) {
        if (canvas) {
          this.x += this.speedX + (mouseX - canvas.width / 2) * 0.01
        }
        if (canvas) {
          this.y += this.speedY + (mouseY - canvas.height / 2) * 0.01
        }

        if (canvas && (this.x < 0 || this.x > canvas.width)) this.speedX *= -1
        if (canvas && (this.y < 0 || this.y > canvas.height)) this.speedY *= -1
      }

      draw() {
        if (!ctx) return
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
        ctx.beginPath()
        this.pattern.forEach((point, index) => {
          const [x, y] = point
          if (index === 0) {
            ctx.moveTo(this.x + x, this.y + y)
          } else {
            ctx.lineTo(this.x + x, this.y + y)
          }
        })
        ctx.closePath()
        ctx.stroke()
      }
    }

    for (let i = 0; i < 50; i++) {
      particles.push(new Particle())
    }

    let mouseX = 0
    let mouseY = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((particle) => {
        particle.update(mouseX, mouseY)
        particle.draw()
      })
      requestAnimationFrame(animate)
    }

    animate()

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />
}

export default BackgroundAnimation

