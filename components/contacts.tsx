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


                </div>

            </motion.div>

        </section>
    );
};