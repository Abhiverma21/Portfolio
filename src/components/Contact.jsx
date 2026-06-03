import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `*New Contact Form Submission*%0A%0A
*Name:* ${formData.name}%0A
*Email:* ${formData.email}%0A
*Message:* ${formData.message}%0A%0A
*Sent from Portfolio Website*`;
    
    // Your WhatsApp number (without + symbol, just numbers)
    const phoneNumber = "918708539050"; 
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Optional: Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-[#020617] py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Get In Touch
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Let's <span className="text-cyan-400">Collaborate</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Currently open for new opportunities, freelance projects, or just a
            tech chat. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 text-white">
              <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                <FaEnvelope className="text-cyan-400 text-xl" />
              </div>

              <div>
                <h4 className="font-bold text-xl">Email</h4>
                <a
                  href="mailto:abhishekjbverma@gmail.com"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  abhishekjbverma@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp Contact Option */}
            <div className="flex items-center gap-4 text-white">
              <div className="p-4 bg-green-500/10 rounded-2xl border border-green-500/20">
                <FaPaperPlane className="text-green-400 text-xl" />
              </div>

              <div>
                <h4 className="font-bold text-xl">WhatsApp</h4>
                <a
                  href="https://wa.me/918708539050"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-green-400 transition"
                >
                  +91 8708539050
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/abhishek-verma1828/"
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/50 transition group"
              >
                <FaLinkedin className="text-white text-xl group-hover:text-cyan-400 transition" />
              </a>

              <a
                href="https://github.com/Abhiverma21"
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/50 transition group"
              >
                <FaGithub className="text-white text-xl group-hover:text-cyan-400 transition" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white/5 p-8 rounded-3xl border border-cyan-500/20 backdrop-blur-lg"
          >
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-black/50 p-4 rounded-xl border border-white/10 focus:border-cyan-400 outline-none text-white transition"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full bg-black/50 p-4 rounded-xl border border-white/10 focus:border-cyan-400 outline-none text-white transition"
              />

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full bg-black/50 p-4 rounded-xl border border-white/10 focus:border-cyan-400 outline-none text-white transition resize-none"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-bold py-4 rounded-xl hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Send Message on WhatsApp <FaPaperPlane />
              </button>
              
              <p className="text-gray-500 text-xs text-center mt-4">
                * Your message will be sent directly to my WhatsApp
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;