import { useEffect, useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import { motion, AnimatePresence } from "framer-motion"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 bg-white flex items-center justify-center z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-red-600 text-4xl font-bold"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            a
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          className="font-sans min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <main>
            <Hero />
            <Stats />
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App