"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Function to check if the window width is mobile size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is a common breakpoint for mobile devices
    }

    // Check on initial load
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}
