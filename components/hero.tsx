"use client"

import { use, useEffect } from "react"
import { animate, useMotionTemplate, useMotionValue, motion } from "framer-motion"



const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD##5C"]

export const Hero = () => {
    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        })
    }, [])

    const backgroundImage = useMotionTemplate `radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate `1px solid ${color}`
    const boxShadow = useMotionTemplate `0px 4px 24px ${color}`

    return (
        <motion.section
         style={{
            backgroundImage
         }}
         className="relative grid min-h-screen place-content-center overflow-hidden px-24 text-gray-200"
        >
        </motion.section>
    )
}