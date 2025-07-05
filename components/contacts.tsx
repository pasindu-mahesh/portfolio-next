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
                        Get in <span className="text-purple-500">touch</span>
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
                                className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center after:content-['↗'] after:ml-2"
                            >
                                +94768302475
                                <span className="text-gray-500"></span>
                            </a>
                        </div>

                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Email</p>
                            <a
                                href="mailto:pasindu@gmail.com"
                                className="lg:text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center  after:content-['↗'] after:ml-2"
                            >
                                99pasindumahesh@gmail.com
                                <span className="text-gray-500"></span>
                            </a>

                        </div>

                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Address</p>
                            <address className="text-xl not-italic leading-relaxed">
                                Samanala road,
                                New Kandy Road,<br/>
                                Malabe, <br/>
                                Sri Lanka.
                            </address>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-full h-full min-h-400 rounded-2xl overflow-hidden"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6261.000744339571!2d79.94915973796185!3d6.910826942264336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257255ecc9693%3A0xca4b7f07244fbd91!2sSamanala%20Mawatha%2C%20Malabe!5e1!3m2!1sen!2slk!4v1751534391425!5m2!1sen!2slk"
                        style={{ border: 0, width: "100%", height: "100%" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </motion.div>
            </motion.div>
        </section>
    );
};