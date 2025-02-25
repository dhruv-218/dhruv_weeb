// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }





// "use client"

// import Image from "next/image"
// import { motion } from "framer-motion"
// import { FaCamera, FaFilm, FaPen, FaRobot, FaChartBar } from "react-icons/fa"

// export default function Home() {
//   const skills = [
//     { icon: FaCamera, text: "Photographer" },
//     { icon: FaFilm, text: "Film Maker" },
//     { icon: FaPen, text: "Lyricist" },
//     { icon: FaRobot, text: "AI Developer" },
//     { icon: FaChartBar, text: "Data Analyst" },
//   ]

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center relative z-10">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-8"
//       >
//         <Image
//           src="public/20231229_090651.jpg"
//           alt="Dhruv"
//           width={200}
//           height={200}
//           className="rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
//         />
//         <h1 className="text-5xl font-bold mb-2 text-white">I'm Dhruv</h1>
//         <div className="flex flex-wrap justify-center gap-4 mb-4">
//           {skills.map((skill, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.1 }}
//           className="flex items-center bg-white text-black rounded-full px-4 py-2"
//         >
//           <skill.icon className="mr-2" />
//           <span>{skill.text}</span>
//         </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="max-w-2xl text-center"
//       >
//         <p className="text-lg leading-relaxed text-gray-300">
//           Welcome to my digital playground! I'm a multi-talented creative with a passion for visual storytelling,
//           wordsmithing, and cutting-edge technology. From capturing life's precious moments through my lens to crafting
//           compelling narratives, I blend art and science to create unique experiences. My journey spans from the poetic
//           world of lyrics to the logical realm of AI and data analysis. Join me as I explore the intersection of
//           creativity and innovation!
//         </p>
//       </motion.div>

//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
//       >
//         Explore My Work
//       </motion.button>
//     </div>
//   )
// }





















// "use client"

// import Image from "next/image"
// import { motion } from "framer-motion"
// import { FaCamera, FaFilm, FaPen, FaRobot, FaChartBar } from "react-icons/fa"

// export default function Home() {
//   const skills = [
//     { icon: FaCamera, text: "Photographer" },
//     { icon: FaFilm, text: "Film Maker" },
//     { icon: FaPen, text: "Lyricist" },
//     { icon: FaRobot, text: "AI Developer" },
//     { icon: FaChartBar, text: "Data Analyst" },
//   ]

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center relative z-10">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-8"
//       >
//         <Image
//           src="/20231229_090651.jpg"  // ✅ Fixed the image source
//           alt="Dhruv"
//           width={200}
//           height={200}
//           className="rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
//         />
//         <h1 className="text-5xl font-bold mb-2 text-white">I'm Dhruv</h1>
//         <div className="flex flex-wrap justify-center gap-4 mb-4">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="flex items-center bg-white text-black rounded-full px-4 py-2"
//             >
//               <skill.icon className="mr-2" size={20} />  {/* ✅ Fixed incorrect icon usage */}
//               <span>{skill.text}</span>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="max-w-2xl text-center"
//       >
//         <p className="text-lg leading-relaxed text-gray-300">
//           Welcome to my digital playground! I'm a multi-talented creative with a passion for visual storytelling,
//           wordsmithing, and cutting-edge technology. From capturing life's precious moments through my lens to crafting
//           compelling narratives, I blend art and science to create unique experiences. My journey spans from the poetic
//           world of lyrics to the logical realm of AI and data analysis. Join me as I explore the intersection of
//           creativity and innovation!
//         </p>
//       </motion.div>

//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
//       >
//         Explore My Work
//       </motion.button>
//     </div>
//   )
// }




























// "use client"

// import Image from "next/image"
// import { motion } from "framer-motion"
// import { FaCamera, FaFilm, FaPen, FaRobot, FaChartBar } from "react-icons/fa"

// export default function Home() {
//   const skills = [
//     { icon: FaCamera, text: "Photographer" },
//     { icon: FaFilm, text: "Film Maker" },
//     { icon: FaPen, text: "Lyricist" },
//     { icon: FaRobot, text: "AI Developer" },
//     { icon: FaChartBar, text: "Data Analyst" },
//   ]

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center relative z-10">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-8"
//       >
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//         >
//           <Image
//             src="/20231229_090651.jpg" // ✅ Fixed the image source
//             alt="Dhruv"
//             width={200}
//             height={200}
//             className="rounded-full mx-auto mb-4 shadow-lg" // ❌ Removed border, kept shadow for depth
//           />
//         </motion.div>
//         <h1 className="text-5xl font-bold mb-2 text-white">I'm Dhruv</h1>
//         <div className="flex flex-wrap justify-center gap-4 mb-4">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="flex items-center bg-white text-black rounded-full px-4 py-2"
//             >
//               <skill.icon className="mr-2" size={20} />
//               <span>{skill.text}</span>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="max-w-2xl text-center"
//       >
//         <p className="text-lg leading-relaxed text-gray-300">
//           Welcome to my digital playground! I'm a multi-talented creative with a passion for visual storytelling,
//           wordsmithing, and cutting-edge technology. From capturing life's precious moments through my lens to crafting
//           compelling narratives, I blend art and science to create unique experiences. My journey spans from the poetic
//           world of lyrics to the logical realm of AI and data analysis. Join me as I explore the intersection of
//           creativity and innovation!
//         </p>
//       </motion.div>

//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
//       >
//         Explore My Work
//       </motion.button>
//     </div>
//   )
// }























// "use client"

// import Image from "next/image"
// import { motion } from "framer-motion"
// import { FaCamera, FaFilm, FaPen, FaRobot, FaChartBar } from "react-icons/fa"

// export default function Home() {
//   const skills = [
//     { icon: FaCamera, text: "Photographer" },
//     { icon: FaFilm, text: "Film Maker" },
//     { icon: FaPen, text: "Lyricist" },
//     { icon: FaRobot, text: "AI Developer" },
//     { icon: FaChartBar, text: "Data Analyst" },
//   ]

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center relative z-10">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-8"
//       >
//         <motion.div
//           initial={{ opacity: 0, filter: "blur(10px)" }} // Start with blur
//           animate={{ opacity: 1, filter: "blur(0px)" }} // Fade in and remove blur
//           transition={{ duration: 1.5 }}
//         >
//           <Image
//             src="/20231229_090651.jpg"
//             alt="Dhruv"
//             width={500}
//             height={1100}
//             className="rounded-full mx-auto mb-4 shadow-lg"
//           />
//         </motion.div>
//         <h1 className="text-5xl font-bold mb-2 text-white">I'm Dhruv</h1>
//         <div className="flex flex-wrap justify-center gap-4 mb-4">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="flex items-center bg-white text-black rounded-full px-4 py-2"
//             >
//               <skill.icon className="mr-2" size={20} />
//               <span>{skill.text}</span>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="max-w-2xl text-center"
//       >
//         <p className="text-lg leading-relaxed text-gray-300">
//           Welcome to my digital playground! I'm a multi-talented creative with a passion for visual storytelling,
//           wordsmithing, and cutting-edge technology. From capturing life's precious moments through my lens to crafting
//           compelling narratives, I blend art and science to create unique experiences. My journey spans from the poetic
//           world of lyrics to the logical realm of AI and data analysis. Join me as I explore the intersection of
//           creativity and innovation!
//         </p>
//       </motion.div>

//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
//       >
//         Explore My Work
//       </motion.button>
//     </div>
//   )
// }





















// "use client"

// import Image from "next/image"
// import { motion } from "framer-motion"
// import { FaCamera, FaFilm, FaPen, FaRobot, FaChartBar } from "react-icons/fa"

// export default function Home() {
//   const skills = [
//     { icon: FaCamera, text: "Photographer" },
//     { icon: FaFilm, text: "Film Maker" },
//     { icon: FaPen, text: "Lyricist" },
//     { icon: FaRobot, text: "AI Developer" },
//     { icon: FaChartBar, text: "Data Analyst" },
//   ]

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/dhr_mnali.jpeg"
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//           className="opacity-30"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 backdrop-blur-sm"></div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-8 z-10"
//       >
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
//           className="relative w-48 h-48 mx-auto mb-6"
//         >
//           <Image
//             src="/dhr_mnali.jpeg"
//             alt="Dhruv"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-full shadow-lg shadow-white/10"
//           />
//           <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-pulse"></div>
//         </motion.div>
//         <h1 className="text-6xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
//           I'm Dhruv
//         </h1>
//         <div className="flex flex-wrap justify-center gap-4 mb-6">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="flex items-center bg-white/10 text-white rounded-full px-4 py-2 backdrop-blur-md hover:bg-white/20 transition-colors duration-300"
//             >
//               <skill.icon className="mr-2" size={20} />
//               <span>{skill.text}</span>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.1 }}
//         className="max-w-2xl text-center z-10"
//       >
//         <p className="text-lg leading-relaxed text-gray-200">
//           Welcome to my digital playground! I'm a multi-talented creative with a passion for visual storytelling,
//           wordsmithing, and cutting-edge technology. From capturing life's precious moments through my lens to crafting
//           compelling narratives, I blend art and science to create unique experiences. My journey spans from the poetic
//           world of lyrics to the logical realm of AI and data analysis. Join me as I explore the intersection of
//           creativity and innovation!
//         </p>
//       </motion.div>

//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 transition duration-300 z-10"
//       >
//         Explore My Work
//       </motion.button>
//     </div>
//   )
// }





































"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaCamera,  FaPen, FaRobot, FaChartBar, FaAtom, FaUserGraduate, FaBookOpen, FaPaintBrush } from "react-icons/fa"
import styles from "@/styles/ImageBlend.module.css"


export default function Home() {
  const skills = [
    { icon: FaRobot, text: "AI Developement" },
    { icon: FaChartBar, text: "Data Analysis" },
    { icon: FaAtom, text: "Qauntum Development" },
    { icon: FaUserGraduate, text: "Research" },
    { icon: FaBookOpen, text: "Author" },
    // { icon: FaFilm, text: "Film Making" },
    { icon: FaPaintBrush, text: "Graphic Designing" },
    { icon: FaCamera, text: "Photography" },
    { icon: FaPen, text: "Lyricist" },
    
    
  ]

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        
        <div className={styles.imageWrapper}>
          <Image
            src="/dhr_mnali.jpeg"
            alt="Dhruv"
            width={200}
            height={200}
            className={styles.image}
          />
          <div className="relative w-48 h-48">
            <Image
              src="/dhr_mnali.jpeg"
              alt="Dhruv"
              fill
              style={{ objectFit: "fill" }}
              className="rounded-full shadow-lg shadow-white/10"
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-2 text-white">I&apos;m Dhruv</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center bg-white text-black rounded-full px-4 py-2"
            >
              <skill.icon className="mr-2" />
              <span>{skill.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-2xl text-center"
      >
        <p className="text-lg leading-relaxed text-gray-300">
          Welcome to my digital playground! I’m Dhruv, an AI and Data Science enthusiast with a strong passion for exploring the quantum world and its intersection with AI. I’m actively involved in research in these fields, constantly pushing boundaries to uncover new possibilities. Recently, I secured copyrights for my content, marking an important milestone in my journey. Beyond tech, I have a creative side—I love capturing moments through photography, writing lyrics, and making rap music. Graphic design is another passion of mine, where I get to blend art with innovation. Whether it’s coding, researching, or creating, I thrive at the intersection of logic and imagination.
        </p>
      </motion.div>

      {/* <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-20 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
      >
        Explore My Work
      </motion.button> */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 transition duration-300 z-10"
      >
        Explore My Work
      </motion.button>
    </div>
  )
}

