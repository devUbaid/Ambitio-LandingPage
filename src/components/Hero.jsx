import { useRef, useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"



// Import university logos from assets
import university1 from '../assets/images/university1.png'
import university2 from '../assets/images/university2.png'
import university3 from '../assets/images/university3.png'
import university4 from '../assets/images/university4.png'
import university5 from '../assets/images/university5.png'
import university6 from '../assets/images/university6.png'
import university7 from '../assets/images/university7.png'
import university8 from '../assets/images/university8.png'
import university9 from '../assets/images/university9.png'
import university10 from '../assets/images/university10.png'




// Import student avatars from assets
import student1 from '../assets/images/student1.png'
import student2 from '../assets/images/student2.png'
import student3 from '../assets/images/student3.png'
import student4 from '../assets/images/student4.png'
import student5 from '../assets/images/student5.png'
import student6 from '../assets/images/student6.png'
import student7 from '../assets/images/student7.png'
import student8 from '../assets/images/student8.png'
import student9 from '../assets/images/student9.png'
import student10 from '../assets/images/student10.png'

// University and student data
const universities = [
  { name: "Illinois", logo: university1, position: { top: "7%", left: "5%" } },
  { name: "Princeton", logo: university2, position: { top: "10%", left: "28%" } },
  { name: "Harvard", logo: university3, position: { top: "10%", left: "40%" } },
  { name: "MIT", logo: university4, position: { top: "10%", right: "40%" } },
  { name: "Brown", logo: university5, position: { top: "10%", right: "25%" } },
  { name: "UPenn", logo: university6, position: { top: "10%", right: "5%" } },
  { name: "Dartmouth", logo: university7, position: { top: "32%", left: "15%" } },
  { name: "Yale", logo: university8, position: { top: "30%", left: "30%" } },
  { name: "Carnegie Mellon", logo: university9, position: { top: "30%", right: "15%" } },
  { name: "UCD", logo: university10, position: { top: "55%", left: "5%" } },
  { name: "NYU", logo: university4, position: { top: "50%", left: "20%" } },
  { name: "Ohio State", logo: university5, position: { top: "50%", right: "17%" } },
  { name: "ASU", logo: university9, position: { top: "50%", right: "5%" } },
  { name: "Wisconsin", logo: university6, position: { top: "70%", right: "5%" } },
  { name: "LBS", logo: university2, position: { top: "30%", right: "30%" } },
]
const students = [
  { id: 1, image: student1, position: { top: "8%", left: "15%" } },
  { id: 2, image: student2, position: { top: "10%", right: "15%" } },
  { id: 3, image: student3, position: { top: "33%", left: "5%" } },
  { id: 4, image: student4, position: { top: "30%", right: "5%" } },
  { id: 5, image: student5, position: { top: "50%", left: "28%" } },
  { id: 6, image: student6, position: { top: "50%", right: "28%" } },
  { id: 7, image: student7, position: { top: "70%", left: "15%" } },
  { id: 8, image: student8, position: { top: "70%", right: "15%" } },
  { id: 9, image: student9, position: { top: "70%", left: "33%" } },
  { id: 10, image: student10, position: {top: "30%", right: "30%"  } },
  { id: 11, image: student10, position: { top: "60%", left: "42%"  } },
  { id: 12, image: student5, position: {top: "30%", left: "43%"  } },
  { id: 13, image: student1, position: { top: "70%", right: "33%" } },
]

// Combine all items
const items = [
  ...universities.map((univ, index) => ({ 
    id: `uni-${index}`, 
    type: "logo", 
    name: univ.name, 
    logo: univ.logo, 
    position: univ.position 
  })),
  ...students.map((student, index) => ({ 
    id: `student-${index}`, 
    type: "person", 
    name: `Student ${index + 1}`, 
    image: student.image,
    position: student.position 
  })),
]

const Hero = () => {
  const controls = useAnimation()
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Start animations on mount
  useEffect(() => {
    controls.start("visible")

    // Auto-rotate focus on items
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveIndex((prev) => (prev + 1) % items.length)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [controls, isHovering])

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Crown animation
  const crownVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0px 0px 0px rgba(225, 29, 72, 0.3)",
        "0px 0px 20px rgba(225, 29, 72, 0.5)",
        "0px 0px 0px rgba(225, 29, 72, 0.3)",
      ],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    },
  }

  return (
    <section className="pt-24 pb-12 relative overflow-hidden mx-auto max-w-[1350px]">
      <div className="container mx-auto px-4">
        {/* University and Student Grid */}
        <div
          ref={containerRef}
          className="relative h-64 md:h-96 mb-8"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="absolute inset-0">
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  className={`absolute w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden ${
                    item.type === "logo" ? "bg-white shadow-sm" : "bg-red-100"
                  } ${isActive ? "z-10" : "z-0"}`}
                  style={item.position}
                >
                  {item.type === "logo" ? (
                    <div className="w-full h-full flex items-center justify-center p-1">
                      <img 
                        src={item.logo} 
                        alt={item.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center rounded-xl overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={`Student ${item.id.split('-')[1]}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              )
            })}

            {/* Center crown element */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-xl flex items-center justify-center z-30"
              animate="pulse"
              variants={crownVariants}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 8px 30px rgba(225, 29, 72, 0.3)",
              }}
            >
              <motion.span
                className="text-white text-2xl md:text-3xl"
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  },
                }}
              >
                👑
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center max-w-md mx-auto">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Give the best shot at your{" "}
            <motion.span
              className="text-red-600 block"
              animate={{
                color: ["#e11d48", "#be123c", "#e11d48"],
                transition: { duration: 3, repeat: Number.POSITIVE_INFINITY },
              }}
            >
              Dream University
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-gray-600 mb-6 text-sm md:text-base px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Get expert help, personalised guidance, and all the support you need to{" "}
            <motion.strong initial={{ fontWeight: 600 }} whileHover={{ fontWeight: 700 }}>
              increase your chances of success with Ambitio Elite.
            </motion.strong>
          </motion.p>

          <motion.button
            className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300 w-full max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{
                x: [0, 5, 0],
                transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" },
              }}
              className="inline-block"
            >
              10x your chances with Ambitio
            </motion.span>
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Hero