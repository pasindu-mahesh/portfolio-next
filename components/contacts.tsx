"use client"

import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/pasindu-mahesh", Icon: AiFillGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/pasindu-mahesh-07556b2bb/", Icon: AiFillLinkedin, label: "Linkedin" },
  { href: "https://telegram.org", Icon: FaTelegramPlane, label: "Telegram" },
  { href: "https://wa.me/9412345679", Icon: FaWhatsapp, label: "WhatsApp" },
  { href: "https://x.com", Icon: AiOutlineTwitter, label: "X (Twitter)" },
   // Changed to FaWhatsapp
];

export const Contacts = () => {
  return (
    <section
      id="contacts"
      className="py-32 text-white max-w-[1200px] mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16"
      >
        {/* Left Side */}
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
            {/* Phone */}
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Phone</p>
              <a
                href="tel:+94768302475"
                className="text-2xl hover:text-purple-400 transition duration-300 flex items-center after:content-['↗'] after:ml-2"
              >
                +94768302475
               
              </a>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Email</p>
              <a
                href="mailto:pasindu@gmail.com"
                className="lg:text-2xl hover:text-purple-400 transition duration-300 flex items-center after:content-['↗'] after:ml-2"
              >
                99pasindumahesh@gmail.com
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Social</p>
              <div className="flex space-x-10 mt-4">
                {socialLinks.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-4xl text-gray-300 hover:text-purple-500 transition duration-300"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Map */}
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