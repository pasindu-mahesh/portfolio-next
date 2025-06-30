"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Stack", path: "#stack" },
    { title: "Contact", path: "#contact" },
]

export const Navbar = () => {
    const [nav, setNav ] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    return(
        <>
        </>
    )
}