// import Link from "next/link"
// import { FaDiscord, FaGithub, FaInstagram, FaLinkedinIn, FaSnapchat } from "react-icons/fa"
// import Image from "next/image"

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-8 relative z-10">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
            
//             <Image src="/jdt_logo_reebg.png" alt="Dhruv" width={120} height={80} className="object-fill" />
//             <Image src="/jdt_logo_reebg.png" alt="Dhruv" width={120} height={80} className="h-20 w-30 object-fill" />

//             <h3 className="text-2xl font-bold">Dhruv</h3>
//           </div>
//           <div className="flex flex-col items-center md:items-end">
//             <p className="mb-2">Follow me on social media:</p>
//             <div className="flex space-x-4">
//               <Link
//                 href="https://www.instagram.com/ursdhruvly/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-400 transition duration-300"
//               >
//                 <FaInstagram size={24} />
//               </Link>
//               <Link
//                 href="https://www.snapchat.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-400 transition duration-300"
//               >
//                 <FaSnapchat size={24} />
//               </Link>
//               <Link
//                 href="https://github.com/dhruv-218"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-400 transition duration-300"
//               >
//                 <FaGithub size={24} />
//               </Link>
//               <Link
//                 href="https://www.linkedin.com/in/dhruvsolanki16/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-400 transition duration-300"
//               >
//                 <FaLinkedinIn size={24} />
//               </Link>
//               <Link
//                 href="https://discord.gg/UFEXxGHUyR"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-400 transition duration-300"
//               >
//                 <FaDiscord size={24} />
//               </Link>
//             </div>
//           </div>
//           <p>&copy; {new Date().getFullYear()} Dhruv&apos;s Portfolio. All rights reserved.</p>
//           <p>&copy; {new Date().getFullYear()} Dhruv&apos;s Portfolio. All rights reserved.</p>
//           <p>Made with ❤️ using Next.js and Tailwind CSS</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer








// import Link from "next/link"
// import { FaDiscord, FaGithub, FaInstagram, FaLinkedinIn, FaSnapchat } from "react-icons/fa"
// import Image from "next/image"

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-8 relative z-10">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
            
//             <Image src="/jdt_logo_reebg.png" alt="Dhruv" width={120} height={80} className="object-fill" />
//             <Image src="/jdt_logo_reebg.png" alt="Dhruv" width={120} height={80} className="h-20 w-30 object-fill" />

//             <h3 className="text-2xl font-bold">Dhruv</h3>
//           </div>
//           <div className="flex flex-col items-center md:items-end">
//             <p className="mb-2">Follow me on social media:</p>
//             <div className="flex space-x-4">
//               <Link
//                 href="https://www.instagram.com/ursdhruvly/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-400 transition duration-300"
//               >
//                 <FaInstagram size={24} />
//               </Link>
//               <Link
//                 href="https://www.snapchat.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-400 transition duration-300"
//               >
//                 <FaSnapchat size={24} />
//               </Link>
//               <Link
//                 href="https://github.com/dhruv-218"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-400 transition duration-300"
//               >
//                 <FaGithub size={24} />
//               </Link>
//               <Link
//                 href="https://www.linkedin.com/in/dhruvsolanki16/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-400 transition duration-300"
//               >
//                 <FaLinkedinIn size={24} />
//               </Link>
//               <Link
//                 href="https://discord.gg/UFEXxGHUyR"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-400 transition duration-300"
//               >
//                 <FaDiscord size={24} />
//               </Link>
//             </div>
//           </div>
//           <p>&copy; {new Date().getFullYear()} Dhruv&apos;s Portfolio. All rights reserved.</p>
//           <p>&copy; {new Date().getFullYear()} Dhruv&apos;s Portfolio. All rights reserved.</p>
//           <p>Made with ❤️ using Next.js and Tailwind CSS</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer








import Link from "next/link";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedinIn, FaSnapchat } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
            <Image src="/jdt_logo_reebg.png" alt="Dhruv" width={120} height={80} className="object-fill" />
            <h3 className="text-2xl font-bold mt-2">Dhruv</h3>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="mb-2">Follow me on social media:</p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/ursdhruvly/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                <FaSnapchat size={24} />
              </Link>
              <Link href="https://github.com/dhruv-218" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                <FaGithub size={24} />
              </Link>
              <Link href="https://www.linkedin.com/in/dhruvsolanki16/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                <FaLinkedinIn size={24} />
              </Link>
              <Link href="https://discord.gg/UFEXxGHUyR" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                <FaDiscord size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p>&copy; {new Date().getFullYear()} Dhruv&apos;s Portfolio. All rights reserved.</p>
          <p>Made with ❤️ using Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
