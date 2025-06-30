"use client"

import { use, useEffect } from "react"
import { animate, useMotionTemplate, useMotionValue, motion } from "framer-motion"
import { profile } from "console"
import Image from 'next/image';
import profilepic from "../assets/profilepic.png"



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
            <div className="z-10 flex flex-col items-center">
                <span className="mmb-1.5 inline-block rounded-full bg-gray-600/50 px-3 text-sm">
                    Open for work
                </span>
                <h1 className="text-white/40 text-7xl font-black">Hi, I am</h1>
               <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 font-black leading-tight
                text-transparent bg-clip-text md:text-7xl"
                >
                     Pasindu Mahesh
                </h1>
                <Image
                    src={profilepic}
                    alt="profile pic"
                    width={250}
                />


            </div>
        </motion.section>
    )
}