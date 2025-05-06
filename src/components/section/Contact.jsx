import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { RevealOnScroll } from "./RevealOnScroll";


export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const SERVICE_ID = "service_9rvys7v";
    const TEMPLATE_ID = "template_yplhj9n";
    const PUBLIC_KEY = "Q7nvUaEN5SEmEbcmB";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent!");
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            })
            .catch(() => alert("Oops Something went wrong. Please try again."));
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6">
  <RevealOnScroll>
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[800px]"> {/* Wider container */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-orange-700 to-yellow-400 bg-clip-text text-transparent">
        Let's Connect
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 w-full">
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-4 py-3 text-white transition duration-300 focus:outline-none focus:border-orange-400 focus:shadow-[0_0_15px_3px_rgba(255,100,0,0.7)] focus:ring-2 focus:ring-orange-500/50 placeholder:text-gray-400"
        />

        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
          className="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-4 py-3 text-white transition duration-300 focus:outline-none focus:border-orange-400 focus:shadow-[0_0_15px_3px_rgba(255,100,0,0.7)] focus:ring-2 focus:ring-orange-500/50 placeholder:text-gray-400"
        />

        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message..."
          className="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-4 py-3 text-white transition duration-300 focus:outline-none focus:border-orange-400 focus:shadow-[0_0_15px_3px_rgba(255,100,0,0.7)] focus:ring-2 focus:ring-orange-500/50 placeholder:text-gray-400/60 resize-none"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,165,0,0.8)]"
        >
          Send Message
        </button>
      </form>
    </div>
  </RevealOnScroll>
</section>



    );
};