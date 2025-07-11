"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

const metric = [
    {
        id: 1,
        value: '2+',
        label: 'Years of Experience',
        description: 'in Web development and design',
    },
    {
        id: 1,
        value: '4+',
        label: 'projects Completed',
        description: 'in software development and design',
    },
    {
        id: 1,
        value: '7+',
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
            className="mx-auto px-4 py-32 text-white glass"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.2, delay: 0.6 }}
                className="text-6xl font-bold mb-12"
            >
                 KEY <span className="text-purple-300">METRICS</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {metric.map((metric, index) => (
                    <motion.div
                        key={metric.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                        className="flex flex-col"
                    >
                        <motion.h3
                            initial={{ scale: 0.5}}
                            animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                            transition={{ delay: 0.6 + index * 0.1, duration: 0.4, type: "spring"}}
                            className="text-5xl font-bold text-purple-300 mb-2"
                        >
                            {metric.value}
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0}}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                            className="text-xl font-semibold mb-2"
                        >
                            {metric.label}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0}}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                            className="text-gray-400"
                        >
                            {metric.description}
                        </motion.p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};