import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_frjh18p', // Replace with your EmailJS service ID
        'template_kqj2l4k', // Replace with your EmailJS template ID
        {
          from_name: form.name,
          to_name: "Jayadip",
          from_email: form.email,
          to_email: "jayadip360@gmail.com",
          subject: form.subject,
          message: form.message,
        },
        'VaIqKcepXOJ-my-VI' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-[#0A192F]/40 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <motion.div variants={textVariant()}>
                <h2 className="text-[#E6F1FF] text-5xl font-bold mb-8">
                  Get in touch
                </h2>
              </motion.div>
              
              <motion.p 
                variants={fadeIn("up", "spring", 0.2, 1)}
                className="text-[#8892B0] text-lg mb-8 max-w-md"
              >
                I'm very approachable and would love to speak to you.
                Feel free to call, send me an email, follow me on social
                media or simply complete the enquiry form.
              </motion.p>

              <motion.div 
                variants={fadeIn("up", "spring", 0.3, 1)}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:+91-9337292830" className="text-[#E6F1FF] hover:text-purple-400 transition-colors">
                    +91-9337292830
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:jayadip360@gmail.com" className="text-[#E6F1FF] hover:text-purple-400 transition-colors">
                    jayadip360@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <motion.div
              variants={fadeIn("left", "spring", 0.3, 1)}
              className="mt-8 lg:mt-0"
            >
              <h3 className="text-[#E6F1FF] text-3xl font-bold mb-8">
                Send me a message
              </h3>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-6 py-4 bg-[#112240] text-[#E6F1FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-6 py-4 bg-[#112240] text-[#E6F1FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-6 py-4 bg-[#112240] text-[#E6F1FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={6}
                    className="w-full px-6 py-4 bg-[#112240] text-[#E6F1FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors w-full lg:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");