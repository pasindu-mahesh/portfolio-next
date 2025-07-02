"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
    {
        id: 1,
        value: '5+',
        label: 'Years of Experience',
        description: 'in software development and design',
    },
    {
        id: 1,
        value: '5+',
        label: 'projects Completed',
        description: 'in software development and design',
    },
    {
        id: 1,
        value: '10+',
        label: 'Technologies Mastered',
        description: 'in software development and design',
    },
    {
        id: 1,
        value: '99+',
        label: 'Code Quality',
        description: 'in software development and design',
    },
    {
        id: 1,
        value: '500+',
        label: 'Commits on GitHub',
        description: 'Active contributions to open source projects and personal Projects',
    }
];

export const KeyMetrics = () => {
const ref = React.useRef<HTMLElement>(null);

const isInView = useInView(ref, { once: false });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8}}
            className="container mx-auto px-4 py-32 text-white"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.2, delay: 0.6 }}
                className="text-6xl font-bold mb-12"
            >
                 KEY METRICS
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {metrics.map((metrics, index) => (

                ))}
            </div>
        </motion.section>
    );
};