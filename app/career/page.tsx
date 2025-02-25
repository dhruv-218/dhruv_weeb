// "use client"

// import { motion } from "framer-motion"
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
// import Image from "next/image"

// const sgpaData = [
//   { semester: "Sem 1", sgpa: 8.2 },
//   { semester: "Sem 2", sgpa: 8.5 },
//   { semester: "Sem 3", sgpa: 8.7 },
//   { semester: "Sem 4", sgpa: 8.9 },
//   { semester: "Sem 5", sgpa: 9.1 },
//   { semester: "Sem 6", sgpa: 9.3 },
// ]

// const certificates = [
//   { name: "Web Development", file: "/certificates/web-dev.jpg" },
//   { name: "Machine Learning", file: "/certificates/ml.pdf" },
//   { name: "Data Science", file: "/certificates/data-science.jpg" },
// ]

// const internships = [
//   {
//     name: "Tech Corp",
//     documents: [
//       { name: "Offer Letter", file: "/internships/tech-corp-offer.pdf" },
//       { name: "LOR", file: "/internships/tech-corp-lor.jpg" },
//       { name: "Completion Certificate", file: "/internships/tech-corp-completion.jpg" },
//     ],
//   },
//   {
//     name: "Data Inc",
//     documents: [
//       { name: "Offer Letter", file: "/internships/data-inc-offer.pdf" },
//       { name: "LOR", file: "/internships/data-inc-lor.jpg" },
//       { name: "Completion Certificate", file: "/internships/data-inc-completion.pdf" },
//     ],
//   },
// ]

// export default function CareerPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8">
//       <motion.h1
//         className="text-4xl font-bold text-white mb-8 text-center"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         My Career Journey
//       </motion.h1>

//       <motion.section
//         className="bg-white rounded-lg shadow-lg p-6 mb-8"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-2xl font-semibold mb-4">Academic Performance</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={sgpaData}>
//             <CartesianGrid strokeDasharray="2 2" />
//             <XAxis dataKey="semester" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="sgpa" stroke="#8884d8" activeDot={{ r: 8 }} />
//           </LineChart>
//         </ResponsiveContainer>
//       </motion.section>

//       <motion.section
//         className="bg-white rounded-lg shadow-lg p-6 mb-8"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {certificates.map((cert, index) => (
//             <motion.div
//               key={cert.name}
//               className="bg-gray-100 p-4 rounded-lg"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.2 }}
//             >
//               <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
//               {cert.file.endsWith(".pdf") ? (
//                 <iframe src={cert.file} className="w-full h-64 border-none" />
//               ) : (
//                 <Image
//                   src={cert.file || "/certificate_20241442558563.pdf"}
//                   alt={cert.name}
//                   width={300}
//                   height={200}
//                   className="w-full h-auto"
//                 />
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       <motion.section
//         className="bg-white rounded-lg shadow-lg p-6 mb-8"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//       >
//         <h2 className="text-2xl font-semibold mb-4">Internships</h2>
//         {internships.map((internship, index) => (
//           <div key={internship.name} className="mb-8">
//             <h3 className="text-xl font-semibold mb-4">{internship.name}</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {internship.documents.map((doc, docIndex) => (
//                 <motion.div
//                   key={doc.name}
//                   className="bg-gray-100 p-4 rounded-lg"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <h4 className="text-lg font-semibold mb-2">{doc.name}</h4>
//                   {doc.file.endsWith(".pdf") ? (
//                     <iframe src={doc.file} className="w-full h-64 border-none" />
//                   ) : (
//                     <Image
//                       src={doc.file || ""}
//                       alt={doc.name}
//                       width={300}
//                       height={200}
//                       className="w-full h-auto"
//                     />
//                   )}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </motion.section>
//     </div>
//   )
// }
























// "use client"

// import { motion } from "framer-motion"
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
// import Image from "next/image"
// import { useState } from "react"

// const sgpaData = [
//   { semester: "Sem 1", sgpa: 8.2 },
//   { semester: "Sem 2", sgpa: 8.5 },
//   { semester: "Sem 3", sgpa: 8.7 },
//   { semester: "Sem 4", sgpa: 8.9 },
//   { semester: "Sem 5", sgpa: 9.1 },
//   { semester: "Sem 6", sgpa: 9.3 },
// ]

// const initialCertificates = [
//   { name: "Web Development", file: "" },
//   { name: "Machine Learning", file: "" },
//   { name: "Data Science", file: "" },
// ]

// const initialInternships = [
//   {
//     name: "Tech Corp",
//     documents: [
//       { name: "Offer Letter", file: "" },
//       { name: "LOR", file: "" },
//       { name: "Completion Certificate", file: "" },
//     ],
//   },
//   {
//     name: "Data Inc",
//     documents: [
//       { name: "Offer Letter", file: "" },
//       { name: "LOR", file: "" },
//       { name: "Completion Certificate", file: "" },
//     ],
//   },
// ]

// export default function CareerPage() {
//   const [certificates, setCertificates] = useState(initialCertificates)
//   const [internships, setInternships] = useState(initialInternships)

//   const handleCertificateFileChange = (index: number, file: string) => {
//     const newCertificates = [...certificates]
//     newCertificates[index].file = file
//     setCertificates(newCertificates)
//   }

//   const handleInternshipFileChange = (internshipIndex: number, docIndex: number, file: string) => {
//     const newInternships = [...internships]
//     newInternships[internshipIndex].documents[docIndex].file = file
//     setInternships(newInternships)
//   }

//   return (
//     <div className="min-h-screen bg-black text-white p-8">
//       <motion.h1
//         className="text-4xl font-bold mb-8 text-center"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         My Career Journey
//       </motion.h1>

//       <motion.section
//         className="bg-gray-900 rounded-lg shadow-lg p-6 mb-8"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-2xl font-semibold mb-4">Academic Performance</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={sgpaData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="semester" stroke="#fff" />
//             <YAxis domain={[0, 10]} stroke="#fff" />
//             <Tooltip contentStyle={{ backgroundColor: "#333", border: "none" }} />
//             <Legend />
//             <Line type="monotone" dataKey="sgpa" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
//           </LineChart>
//         </ResponsiveContainer>
//       </motion.section>

//       <motion.section
//         className="bg-gray-900 rounded-lg shadow-lg p-6 mb-8"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {certificates.map((cert, index) => (
//             <motion.div
//               key={cert.name}
//               className="bg-gray-800 p-4 rounded-lg"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.2 }}
//             >
//               <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
//               <input
//                 type="text"
//                 value={cert.file}
//                 onChange={(e) => handleCertificateFileChange(index, e.target.value)}
//                 placeholder="Enter file path"
//                 className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
//               />
//               {cert.file &&
//                 (cert.file.endsWith(".pdf") ? (
//                   <iframe src={cert.file} className="w-full h-64 border-none" />
//                 ) : (
//                   <Image
//                     src={cert.file || "/jdt_logo_reebg.png"}
//                     alt={cert.name}
//                     width={300}
//                     height={200}
//                     className="w-full h-auto"
//                   />
//                 ))}
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       <motion.section
//         className="bg-gray-900 rounded-lg shadow-lg p-6 mb-8"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//       >
//         <h2 className="text-2xl font-semibold mb-4">Internships</h2>
//         {internships.map((internship, internshipIndex) => (
//           <div key={internship.name} className="mb-8">
//             <h3 className="text-xl font-semibold mb-4">{internship.name}</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {internship.documents.map((doc, docIndex) => (
//                 <motion.div
//                   key={doc.name}
//                   className="bg-gray-800 p-4 rounded-lg"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <h4 className="text-lg font-semibold mb-2">{doc.name}</h4>
//                   <input
//                     type="text"
//                     value={doc.file}
//                     onChange={(e) => handleInternshipFileChange(internshipIndex, docIndex, e.target.value)}
//                     placeholder="Enter file path"
//                     className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
//                   />
//                   {doc.file &&
//                     (doc.file.endsWith(".pdf") ? (
//                       <iframe src={doc.file} className="w-full h-64 border-none" />
//                     ) : (
//                       <Image
//                         src={doc.file || "/placeholder.svg"}
//                         alt={doc.name}
//                         width={300}
//                         height={200}
//                         className="w-full h-auto"
//                       />
//                     ))}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </motion.section>
//     </div>
//   )
// }












































"use client"

import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import Image from "next/image"
const sgpaData = [
  { semester: "Sem 1", sgpa: 7.72 },
  { semester: "Sem 2", sgpa: 7.10 },
  { semester: "Sem 3", sgpa: 8.52 },
  { semester: "Sem 4", sgpa: 7.13 },
  { semester: "Sem 5", sgpa: 8.27 },
//   { semester: "Sem 6", sgpa: 9.3 },
]

const initialCertificates = [
  { name: "ISRO-IIRS AI/ML for Geodata Analysis", file: "/isro.pdf" },
  { name: "NPTEL- Python for Data Science (IITM)", file: "/py_ds_NPTEL.pdf" },
  { name: "International Business Machines Corporation", file: "/ibm_bagde.pdf" },
  { name: "IITBOMBAY Spoken Tutorial", file: "/spoken_py.jpeg"},
]

const initialInternships = [
  {
    name: "CybraneX Technologies And Consultancy Pvt.Ltd",
    documents: [
      { name: "Offer Letter", file: "/offer_cybrane.pdf" },
    //   { name: "LOR", file: "/techcorp_lor.pdf" },
    { name: "Completion Certificate", file: null, Placeholder: "Coming Soon" },
    //   { name: "Completion Certificate", file: "/techcorp_cert.png" },
    ],
  },
//   {
//     name: "Data Inc",
//     documents: [
//       { name: "Offer Letter", file: "/datainc_offer.pdf" },
//       { name: "LOR", file: "/datainc_lor.pdf" },
//       { name: "Completion Certificate", file: "/datainc_cert.png" },
//     ],
//   },
]

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Career Journey
      </motion.h1>

      <motion.section
        className="bg-gray-900 rounded-lg shadow-lg p-6 mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Academic Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sgpaData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="semester" stroke="#fff" />
            <YAxis domain={[0, 10]} stroke="#fff" />
            <Tooltip contentStyle={{ backgroundColor: "#333", border: "none" }} />
            <Legend />
            <Line type="monotone" dataKey="sgpa" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </motion.section>

      <motion.section
        className="bg-gray-900 rounded-lg shadow-lg p-6 mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {initialCertificates.map((cert) => (
            <motion.div
              key={cert.name}
              className="bg-gray-800 p-4 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
              {cert.file.endsWith(".pdf") ? (
                <iframe src={cert.file} className="w-full h-64 border-none" />
              ) : (
                <Image src={cert.file} alt={cert.name} width={300} height={200} className="w-full h-auto" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="bg-gray-900 rounded-lg shadow-lg p-6 mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Internships</h2>
        {initialInternships.map((internship) => (
          <div key={internship.name} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{internship.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {internship.documents.map((doc) => (
                <motion.div
                  key={doc.name}
                  className="bg-gray-800 p-4 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-lg font-semibold mb-2">{doc.name}</h4>
                  {doc.file ? (
                    doc.file.endsWith(".pdf") ? (
                      <iframe src={doc.file} className="w-full h-64 border-none" />
                    ) : (
                      <Image src={doc.file} alt={doc.name} width={300} height={200} className="w-full h-auto" />
                    )
                  ) : (
                    <p>{doc.Placeholder}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.section>
    </div>
  )
}
