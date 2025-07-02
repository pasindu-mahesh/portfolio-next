"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"  
import project1 from "../assets/proj5.png"
import project2 from "../assets/proj6.png"
import project3 from "../assets/proj7.png"



const projects = [
    {
        id: 1, 
        year: 2022, 
        title: 'customer care app', 
        description: 
        "A customer care app provides seamless support, enabling users to resolve queries, track issues, and access personalized assistance anytime, ensuring satisfaction through efficient communication and problem-solving.", 
        image: project1,
    },
    {
        id: 2, 
        year: 2023, 
        title: 'cheesy', 
        description: 
        "A customer care app provides seamless support, enabling users to resolve queries, track issues, and access personalized assistance anytime, ensuring satisfaction through efficient communication and problem-solving.", 
        image: project2,
    },
    {
        id: 3, 
        year: 2024, 
        title: 'travaliac', 
        description: 
        "A customer care app provides seamless support, enabling users to resolve queries, track issues, and access personalized assistance anytime, ensuring satisfaction through efficient communication and problem-solving.", 
        image: project3,
    },
]

export const Portfolio = () => {
    const [activeProject, setSelectedProject] = useState(projects[0]);
    return (
        <section id="portfolio" className="py32 text-white">
            <h2 className="text-6xl font-bold mb-10">Selected <span className="text-gray-400">Prijects</span></h2>
            {projects.map((project) => (
                <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer mb-8 group"
                >
                    <p className="text-gray-400 text-lg mb-2">{project.year}</p>
                    
                
                </div>

            ))}

        </section>
    )
}