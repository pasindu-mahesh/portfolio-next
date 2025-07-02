"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import udemy from "@/assets/udemy.png"
import fiver from "@/assets/fiverr.png"
import elementor from "@/assets/elementor.png"
import logitech from "@/assets/logitech.png"
import oracle from "@/assets/oracle.png"

const images = [
    {src: udemy, alt: "Udemy"},
    {src: fiver, alt: "Fiverr"},
    {src: elementor, alt: "Elementor"},
    {src: logitech, alt: "Logitech"},
    {src: oracle, alt: "Oracle"},
    {src: udemy, alt: "Udemy"},
    {src: fiver, alt: "Fiverr"},
    {src: elementor, alt: "Elementor"},
    {src: logitech, alt: "Logitech"},
    {src: oracle, alt: "Oracle"},
    {src: udemy, alt: "Udemy"},
    {src: fiver, alt: "Fiverr"},
    {src: elementor, alt: "Elementor"},
    {src: logitech, alt: "Logitech"},
    {src: oracle, alt: "Oracle"},
    {src: udemy, alt: "Udemy"},
    {src: fiver, alt: "Fiverr"},
    {src: elementor, alt: "Elementor"},
    {src: logitech, alt: "Logitech"},
    {src: oracle, alt: "Oracle"},
]

export const LogoAnimation = () => {
    return (
        <div className="py-9 bg-purple-200/10 opacity-80 glass">
            <div className="container mx-auto">
                <div className="overflow-hidden
                        [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
                <motion.div
                    className="flex gap-14 flex-none pr-14"
                    animate={{
                        translateX: '-50%',
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatType: 'loop',
                    }}
                >
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            height={30}
                        />

                    ))}

                </motion.div>

                </div>

            </div>


        </div>
    );
}