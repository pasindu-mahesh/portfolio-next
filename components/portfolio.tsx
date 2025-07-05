"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"  
import project1 from "../assets/proj5.png"
import project2 from "../assets/proj6.png"
import project3 from "../assets/proj7.png"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion" //background animation



const projects = [
    {
        id: 1, 
        year: 2023, 
        title: 'Traveliac', 
        description: 
        "Online vacational portal for booking trips, tours, and accommodations.PHP, HTML, and CSS were used for this.", 
        image: project1,
    },
    {
        id: 2, 
        year: 2023, 
        title: 'SkyLink', 
        description: 
        "Customer care webapp for managing support tickets and client communications.JAVA, HTML, and CSS were used for this.", 
        image: project2,
    },
    {
        id: 3, 
        year: 2024, 
        title: 'Aurora', 
        description: 
        "Resort Management System with booking, inventory, and staff management features.React, Node.js, and MongoDB were used for this.", 
        image: project3,
    },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD##5C"] //get hereo section

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    const color = useMotionValue(COLORS_TOP[0])//get hereo section
    
    useEffect(() => {
            animate(color, COLORS_TOP, { //get hereo section
                ease: "easeInOut",
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
            })
        }, [])

    const backgroundImage = useMotionTemplate `radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`//get hereo section

    return (
        <motion.section //change to motion.section
            style={{ backgroundImage }} //update
             id="portfolio" 
             className="py-24 text-white flex justify-center items-center">
            <div className="max-w-7xl w-full px-4 grid lg:grid-cols-2 gap-12 items-center justify-items-center">

            <div>
                <h2 className="text-6xl font-bold mb-10">My <span className="text-gray-400">Projects</span></h2>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer mb-8 group"
                        >
                            <p className="text-gray-400 text-lg mb-2">{project.year}</p>
                            <h3 className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors 
                                ${selectedProject.id === project.id ? 'text-gray-200' : ''}duration-300`}>
                                {}{project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className="border-b-2 border-gray-200 my-4"></div>
                            )}
                            {selectedProject.id === project.id && (
                                <p className="text-gray-400 transition-all duration-500 ease-in-out">
                                {project.description} 
                                </p>
                            )}
                            
                        </div>
                    ))}
                </div>
            

                <Image
                    src={selectedProject.image.src}
                    alt={selectedProject.title}
                    className="rounded-lg shadow-lg transition-opacity duration-500 ease-in-out"
                    width={800}
                    height={450}
                />
            </div>

        </motion.section>
    )
}