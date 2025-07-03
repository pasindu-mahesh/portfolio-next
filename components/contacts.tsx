"use client"

import { motion } from "framer-motion";

export const Contacts = () => {
    return (
        <section id="contacts" className="py-32 text-white max-w-[1200px] mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-16"
            >
                <div className="space-y-12">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-7xl font-bold text-gray-300"
                    >
                        Get in <span className="text-gray-500">touch</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="glass p-8 rounded-2xl space-y-8"
                    >
                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Phone</p>
                            <a 
                                href="tel:+9476-123-4567"
                                className="text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
                            >
                                +9476-123-4567
                                <span className="text-gray-500"></span>
                            </a>
                        </div>

                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Email</p>
                            <a
                                href="mailto:pasindu@gmail.com"
                                className="lg:text-3xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
                            >
                                pasindu@gmail.com
                                <span className="text-gray-500"></span>
                            </a>

                        </div>

                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Address</p>
                            <address className="text-xl not-italic leading-relaxed">
                                New Kandy Road,<br/>
                                Malabe, <br/>
                                Sri Lanka.
                            </address>

                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};