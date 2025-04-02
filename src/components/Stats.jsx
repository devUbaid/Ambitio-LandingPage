"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
  }

  const stats = [
    { value: "98.2%", label: "got into their Target Program", delay: 0 },
    { value: "4.96", label: "Google Rating", delay: 0.2 },
    { value: "5000+", label: "Students Assisted", delay: 0.4 },
  ]

  return (
    <section className="py-12 bg-red-50">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-2xl md:text-3xl font-bold mb-2" variants={itemVariants}>
            We let{" "}
            <motion.span
              className="text-red-600"
              animate={{
                color: ["#e11d48", "#be123c", "#e11d48"],
                transition: { duration: 3, repeat: Number.POSITIVE_INFINITY },
              }}
            >
              our numbers
            </motion.span>{" "}
            do the talking
          </motion.h2>
          <motion.p className="text-gray-600 text-sm md:text-base" variants={itemVariants}>
            Our users love us and we know you will to! Explore our products.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              custom={index}
              transition={{ delay: stat.delay }}
            >
              <motion.p
                className="text-red-600 text-5xl font-bold mb-2"
                variants={numberVariants}
                animate={
                  isInView
                    ? {
                        opacity: [0, 1],
                        scale: [0.5, 1.1, 1],
                        transition: { duration: 1, delay: stat.delay },
                      }
                    : {}
                }
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + stat.delay }}
                >
                  {stat.value}
                </motion.span>
              </motion.p>
              <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Stats