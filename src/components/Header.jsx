import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      {/* Mobile status bar */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-white text-xs flex items-center px-4 text-gray-800 md:hidden">
        <span>9:41</span>
        <div className="ml-auto flex items-center space-x-1">
          <span>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 4.5C1 4.5 3 2.5 8 2.5C13 2.5 15 4.5 15 4.5"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M1 7.5C1 7.5 3 5.5 8 5.5C13 5.5 15 7.5 15 7.5"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M1 10.5C1 10.5 3 8.5 8 8.5C13 8.5 15 10.5 15 10.5"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="ml-auto">
            <svg width="18" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="black"/>
              <path d="M17 12c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" fill="black"/>
            </svg>
          </span>
          <span>
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="black" />
              <rect x="2" y="2" width="18" height="8" rx="1" fill="black" />
              <rect x="22" y="3.5" width="2" height="5" rx="1" fill="black" />
            </svg>
          </span>
        </div>
      </div>

      <div className="mx-auto px-4 flex justify-between items-center mt-6 md:mt-0 max-w-[1250px]">
        {/* Logo */}
        <motion.a
          href="/"
          className="text-red-600 font-bold flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl md:text-3xl">a</span>
          <span className="hidden md:inline text-xl">mbitio.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <motion.div
            className="flex items-center space-x-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#" className="text-gray-800 hover:text-red-600 flex items-center">
              Study-abroad
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#" className="text-gray-800 hover:text-red-600 flex items-center">
              Bootcamps
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#" className="text-gray-800 hover:text-red-600 flex items-center">
              Products
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#" className="text-gray-800 hover:text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              Ambitio Pro
            </a>
            <a href="#" className="text-gray-800 hover:text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              Ambitio Elite
            </a>
          </motion.div>

          <motion.a
            href="#contact"
            className="border border-red-600 text-red-600 rounded-full px-6 py-2 text-sm hover:bg-red-600 hover:text-white transition-colors duration-300"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 2px 8px rgba(225, 29, 72, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Speak with our Experts
          </motion.a>
        </div>

        {/* Mobile Menu Button and Contact */}
        <div className="flex items-center md:hidden">
          <motion.a
            href="#contact"
            className="mr-4 border border-red-600 text-red-600 rounded-full px-4 py-2 text-sm whitespace-nowrap"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileTap={{ scale: 0.95 }}
          >
            Speak to our experts
          </motion.a>

          <motion.button
            className="text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul
              className="space-y-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {["Study Abroad", "Bootcamps", "Products", "Ambitio Pro", "Ambitio Elite"].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <a href="#" className="block py-2 hover:text-red-600 transition-colors duration-200">
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header