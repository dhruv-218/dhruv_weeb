// "use client"

// import Link from "next/link"
// import { motion } from "framer-motion"

// const Navbar = () => {
//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/projects", label: "Projects" },
//     { href: "/extra", label: "Extra" },
//     { href: "/pov", label: "Dhruv Pov" },
//   ]

//   return (
//     <nav className="bg-black p-4">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <div className="flex-1 flex justify-start">
//           {navItems.slice(0, 2).map((item) => (
//             <NavBlock key={item.href} href={item.href} label={item.label} />
//           ))}
//         </div>
//         <motion.div
//           className="flex justify-center items-center"
//           animate={{ scale: [1, 1.1, 1] }}
//           transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
//         >
//           <img src="/jdt_logo_reebg.png" alt="Dhruv" className="h-20 w-30 object-fill" />
//         </motion.div>
//         <div className="flex-1 flex justify-end">
//           {navItems.slice(2).map((item) => (
//             <NavBlock key={item.href} href={item.href} label={item.label} />
//           ))}
//         </div>
//       </div>
//     </nav>
//   )
// }

// const NavBlock = ({ href, label }: { href: string; label: string }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       animate={{ rotate: [0, 1, -1, 0] }}
//       transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.5 }}
//     >
//       <Link href={href} className="bg-white rounded-full font-semibold shadow-lg text-black px-4 py-2 mx-2 inline-block">
//         {label}
//       </Link>
//     </motion.div>
//   )
// }

// export default Navbar
























"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, Transition } from "@headlessui/react"
import Image from "next/image"
import { Fragment } from "react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

const Navbar = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "#", label: "Projects", dropdown: true },
    { href: "/career", label: "career" },
    { href: "/pov", label: "Dhruv Pov" },
  ]

  const projectCategories = [
    "Artificial Intelligence",
    "Quantum Computing",
    "Data Analysis",
    "Research Work",
    "Book",
    "Graphics",
    "Photography",
  ]

  return (
    <nav className="bg-black p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-1 flex justify-start">
          {navItems.slice(0, 2).map((item) => (
            <NavBlock key={item.href} href={item.href} label={item.label} />
          ))}
        </div>
        <motion.div
          className="flex justify-center items-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <Image src="/jdt_logo_reebg.png" alt="Dhruv" width={120} height={80} className="object-fill" />
        </motion.div>
        <div className="relative flex-1 flex justify-end items-center">
          {navItems
            .slice(2)
            .map((item) =>
              item.dropdown ? (
                <ProjectsDropdown key={item.label} categories={projectCategories} />
              ) : (
                <NavBlock key={item.href} href={item.href} label={item.label} />
              ),
            )}
        </div>
      </div>
    </nav>
  )
}

const NavBlock = ({ href, label }: { href: string; label: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ rotate: [0, 1, -1, 0] }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.5 }}
    >
      <Link
        href={href}
        className="bg-white rounded-full font-semibold shadow-lg text-black px-4 py-2 mx-2 inline-block"
      >
        {label}
      </Link>
    </motion.div>
  )
}

const ProjectsDropdown = ({ categories }: { categories: string[] }) => {
  return (
    <Menu as="div" className="relative inline-block text-left mx-2">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: [0, 1, -1, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.5 }}
      >
        <Menu.Button className="bg-white rounded-full font-semibold shadow-lg text-black px-4 py-2 inline-flex items-center">
          Projects
          <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </motion.div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            {categories.map((category) => (
              <Menu.Item key={category}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {category}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}


export default Navbar

