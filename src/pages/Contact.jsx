import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import SocialLink from '@/components/SocialLink';
import { Github, Linkedin, Twitter, Mail, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { staggerContainer, fadeInUp } from '@/config/animationConfig';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "⚠️ Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    const sendEmail = async (retries = 3) => {
      for (let attempt = 1; attempt <= retries; attempt++) {
        try {
          const response = await fetch('https://nodemailer-q9ey.onrender.com/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });

          const data = await response.json();

          if (data.success) {
            toast({
              title: "✅ Message Sent Successfully!",
              description: "Thanks for reaching out! I'll get back to you within 24 hours."
            });
            // Reset form data to show placeholders again
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitting(false);
            return;
          } else {
            toast({
              title: "⚠️ Error",
              description: data.message || "Failed to send message. Please try again.",
              variant: "destructive"
            });
            setIsSubmitting(false);
            return;
          }
        } catch (error) {
          if (attempt < retries) {
            console.log(`Attempt ${attempt} failed, retrying in 2 seconds...`);
            await new Promise(resolve => setTimeout(resolve, 2000));
          } else {
            console.error('All attempts failed:', error);
            toast({
              title: "⚠️ Server Not Running",
              description: "Please run 'npm run start:all' in the project root to start the backend server.",
              variant: "destructive"
            });
            setIsSubmitting(false);
            return;
          }
        }
      }
    };

    await sendEmail();
  };

  return (
    <>
      <Helmet>
        <title>Contact | Samarth K Hosamani</title>
        <meta name="description" content="Get in touch for collaboration opportunities." />
      </Helmet>

      <div className="min-h-screen pt-32 pb-20">
        <SectionWrapper>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Let's Connect
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to turn your vision into a scalable reality?
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-effect p-8 rounded-3xl border border-white/5">
                <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-emerald-500 transition-colors">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-slate-900/50 rounded-xl border border-gray-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder-gray-600 text-white autofill:text-white"
                      placeholder="John Doe"
                      style={{ color: formData.name ? '#ffffff' : 'inherit' }}
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-emerald-500 transition-colors">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-slate-900/50 rounded-xl border border-gray-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder-gray-600 text-white autofill:text-white"
                      placeholder="john@example.com"
                      style={{ color: formData.email ? '#ffffff' : 'inherit' }}
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-emerald-500 transition-colors">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-slate-900/50 rounded-xl border border-gray-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder-gray-600 text-white autofill:text-white"
                      placeholder="Project Collaboration"
                      style={{ color: formData.subject ? '#ffffff' : 'inherit' }}
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-emerald-500 transition-colors">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-4 bg-slate-900/50 rounded-xl border border-gray-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none placeholder-gray-600 text-white autofill:text-white"
                      placeholder="Tell me about your project..."
                      style={{ color: formData.message ? '#ffffff' : 'inherit' }}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-7 text-lg rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Contact Info</h2>
                <div className="space-y-6">
                  {[
                    { icon: Mail, title: "Email", value: "samarthhosamani972@example.com" },
                    { icon: MapPin, title: "Location", value: "India | GM University" },
                    { icon: Phone, title: "Phone", value: "+91 7483314447" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-6 glass-effect p-6 rounded-2xl hover:border-emerald-500/50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-emerald-500" />
                      </div>
                      <div>
                        <h3 className="text-gray-400 text-sm mb-1">{item.title}</h3>
                        <p className="text-white text-lg font-medium">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Social</h3>
                <div className="flex gap-4">
                  {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                    <SocialLink
                      key={i}
                      href={
                        i === 0
                        ? "https://github.com/Samarth23905"
                        : i === 1
                        ? "https://www.linkedin.com/in/samarth-hosamani-21047b313/"
                        : i === 2
                        ? "https://twitter.com"
                        : "mailto:samarthhosamani972@gmail.com"
                      }
                      icon={Icon}
                      label={
                      i === 0
                      ? "GitHub"
                      : i === 1
                      ? "LinkedIn"
                      : i === 2
                      ? "Twitter"
                      : "Email"
                      }
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
};

export default Contact;