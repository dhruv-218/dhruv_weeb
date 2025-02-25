// "use client"

// import { useState } from "react"
// import Image from "next/image"

// type Photo = {
//   id: number
//   url: string
//   description: string
// }

// export default function MyPhotos() {
//   const [photos, setPhotos] = useState<Photo[]>([])

//   const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onload = (e) => {
//         const newPhoto: Photo = {
//           id: Date.now(),
//           url: e.target?.result as string,
//           description: "Enter a description for this photo",
//         }
//         setPhotos([...photos, newPhoto])
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const handleDescriptionChange = (id: number, description: string) => {
//     setPhotos(photos.map((photo) => (photo.id === id ? { ...photo, description } : photo)))
//   }

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">My Photos</h1>
//       <input type="file" accept="image/*" onChange={handlePhotoUpload} className="mb-4" />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {photos.map((photo) => (
//           <div key={photo.id} className="relative group">
//             <Image
//               src={photo.url || "/placeholder.svg"}
//               alt="Uploaded photo"
//               width={300}
//               height={300}
//               className="w-full h-auto"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//               <textarea
//                 value={photo.description}
//                 onChange={(e) => handleDescriptionChange(photo.id, e.target.value)}
//                 className="bg-transparent text-white text-center w-full h-full p-2 resize-none"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }































// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"

// type Photo = {
//   id: number
//   url: string
//   description: string
//   isPublic?: boolean
// }

// export default function MyPhotos() {
//   const [photos, setPhotos] = useState<Photo[]>([])

//   // Add public images when component mounts
//   useEffect(() => {
//     const publicPhotos: Photo[] = [
//       {
//         id: 1,
//         url: "/jdt_logo_reebg.png",
//         description: "Public photo 1",
//         isPublic: true
//       },
//       {
//         id: 2,
//         url: "/images/photo2.jpg",
//         description: "Public photo 2",
//         isPublic: true
//       },
//       // Add more public photos as needed
//     ]
//     setPhotos(publicPhotos)
//   }, [])

//   const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onload = (e) => {
//         const newPhoto: Photo = {
//           id: Date.now(),
//           url: e.target?.result as string,
//           description: "Enter a description for this photo",
//           isPublic: false
//         }
//         setPhotos(prevPhotos => [...prevPhotos, newPhoto])
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const handleDescriptionChange = (id: number, description: string) => {
//     setPhotos(photos.map((photo) => (photo.id === id ? { ...photo, description } : photo)))
//   }

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">My Photos</h1>
//       <input type="file" accept="image/*" onChange={handlePhotoUpload} className="mb-4" />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {photos.map((photo) => (
//           <div key={photo.id} className="relative group">
//             <Image
//               src={photo.url}
//               alt={photo.description}
//               width={300}
//               height={300}
//               className="w-full h-auto"
//               // Remove size restriction for public images
//               {...(photo.isPublic ? { unoptimized: true } : {})}
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//               <textarea
//                 value={photo.description}
//                 onChange={(e) => handleDescriptionChange(photo.id, e.target.value)}
//                 className="bg-transparent text-white text-center w-full h-full p-2 resize-none"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }





















"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"

type MediaItem = {
  id: number
  url: string
  type: 'photo' | 'video'
}

export default function MyMediaGallery() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [videoStates, setVideoStates] = useState<{[key: number]: boolean}>({})
  const [volumeStates, setVolumeStates] = useState<{[key: number]: boolean}>({})
  const videoRefs = useRef<{[key: number]: HTMLVideoElement}>({})

  useEffect(() => {
    const publicMedia: MediaItem[] = [
      {
        id: 0,
        url: "/dhr_mnali.jpeg",
        type: 'photo'
      },
      {
        id: 1,
        url: "/IMG_9144.JPG",
        type: 'photo'
      },
      {
        id: 2,
        url: "/img_dhruv.jpg",
        type: 'photo'
      },
      {
        id: 3,
        url: "/meehfil_rehars.mp4",
        type: 'video'
      },
      // Add more media items as needed
    ]
    setMediaItems(publicMedia)
    
    // Initialize video states
    const initialVideoStates = publicMedia
      .filter(item => item.type === 'video')
      .reduce((acc, item) => ({...acc, [item.id]: false}), {})
    setVideoStates(initialVideoStates)
    
    // Initialize volume states (unmuted by default)
    const initialVolumeStates = publicMedia
      .filter(item => item.type === 'video')
      .reduce((acc, item) => ({...acc, [item.id]: true}), {})
    setVolumeStates(initialVolumeStates)
  }, [])

  const handlePlayPause = (id: number) => {
    const video = videoRefs.current[id]
    if (video) {
      if (video.paused) {
        video.play()
        setVideoStates(prev => ({...prev, [id]: true}))
      } else {
        video.pause()
        setVideoStates(prev => ({...prev, [id]: false}))
      }
    }
  }

  const handleVolume = (id: number) => {
    const video = videoRefs.current[id]
    if (video) {
      video.muted = !video.muted
      setVolumeStates(prev => ({...prev, [id]: !video.muted}))
    }
  }

  const handleVolumeChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRefs.current[id]
    if (video) {
      const volume = parseFloat(e.target.value)
      video.volume = volume
      if (volume === 0) {
        setVolumeStates(prev => ({...prev, [id]: false}))
      } else {
        setVolumeStates(prev => ({...prev, [id]: true}))
      }
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Media Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mediaItems.map((item) => (
          <div key={item.id} className="relative group">
            {item.type === 'photo' ? (
              <Image
                src={item.url}
                alt="Gallery photo"
                width={300}
                height={300}
                className="w-full h-auto"
                unoptimized={true}
              />
            ) : (
              <div className="relative">
                <video
                  ref={el => {
                    if (el) {
                      videoRefs.current[item.id] = el;
                    }
                  }}
                  src={item.url}
                  className="w-full h-auto"
                >
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                  <button
                    onClick={() => handlePlayPause(item.id)}
                    className="text-white hover:text-gray-200"
                  >
                    {videoStates[item.id] ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </button>
                  
                  <button
                    onClick={() => handleVolume(item.id)}
                    className="text-white hover:text-gray-200"
                  >
                    {volumeStates[item.id] ? (
                      <Volume2 className="w-6 h-6" />
                    ) : (
                      <VolumeX className="w-6 h-6" />
                    )}
                  </button>
                  
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    defaultValue="1"
                    onChange={(e) => handleVolumeChange(item.id, e)}
                    className="w-20"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}