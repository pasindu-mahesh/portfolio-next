import React from 'react';
import { FaReact } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const stackItems = [
    { id: 1, name: 'React', icon: FaReact, color: '#61DAFB'},
    { id: 2, name: 'Node.js', icon: IoLogoNodejs, color: '#339933'},
    { id: 3, name: 'TypeScript', icon: SiTypescript, color: '#3178C6'},
    { id: 4, name: 'MongoDB', icon: SiMongodb, color: '#47A248'},
    { id: 5, name: 'Next.js', icon: TbBrandNextjs, color: '#000000'}
]

export const Stack = () => {
    return (<></>)
}