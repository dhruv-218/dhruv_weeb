"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function ArtificialIntelligencePage() {
  const [doubt, setDoubt] = useState("")
  const [playbackRate, setPlaybackRate] = useState(1)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Assume this URL is provided by the backend or hardcoded
  const videoUrl = "adhru/1118494_4k_Telecommunications_3840x2160.mp4"

  const handleDoubtSubmission = async (e: React.FormEvent) => {
    e.preventDefault()
    if (doubt) {
      // Here you would typically send the doubt to your backend
      // For example:
      // await fetch('/api/submit-doubt', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ doubt })
      // })
      alert("Your doubt has been submitted successfully!")
      setDoubt("")
    }
  }

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }

  const handleSpeedChange = (value: number[]) => {
    const newSpeed = value[0]
    setPlaybackRate(newSpeed)
    if (videoRef.current) {
      videoRef.current.playbackRate = newSpeed
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Artificial Intelligence Projects</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">AI Project Video</h2>
        <div className="space-y-4">
          <video ref={videoRef} src={videoUrl} className="w-full max-w-2xl mx-auto">
            Your browser does not support the video tag.
          </video>
          <div className="flex justify-center space-x-4">
            <Button onClick={handlePlayPause}>Play/Pause</Button>
            <div className="flex items-center space-x-2">
              <span>Speed: {playbackRate.toFixed(1)}x</span>
              <Slider
                min={0.5}
                max={2}
                step={0.1}
                value={[playbackRate]}
                onValueChange={handleSpeedChange}
                className="w-32"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Submit a Doubt</h2>
        <form onSubmit={handleDoubtSubmission} className="space-y-4">
          <div>
            <Label htmlFor="doubt">Your Doubt</Label>
            <Textarea
              id="doubt"
              value={doubt}
              onChange={(e) => setDoubt(e.target.value)}
              placeholder="Enter your doubt here..."
              className="w-full"
            />
          </div>
          <Button type="submit">Submit Doubt</Button>
        </form>
      </section>
    </div>
  )
}

