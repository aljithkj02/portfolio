import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const Contact = () => {
    const contactInfo = [
        {
            icon: <FaEnvelope className="text-blue-500" />,
            title: "Email",
            content: "aljithkj02@gmail.com",
            link: "mailto:aljithkj02@gmail.com"
        },
        {
            icon: <FaPhone className="text-blue-500" />,
            title: "Phone",
            content: "+91 7356837832",
            link: "tel:+917356837832"
        },
        {
            icon: <FaMapMarkerAlt className="text-blue-500" />,
            title: "Location",
            content: "Thrissur, Kerala, India",
            link: null
        }
    ];

    const socialLinks = [
        {
            icon: <FaLinkedin size={24} />,
            url: 'https://www.linkedin.com/in/aljith-kj-033213233/',
            label: 'LinkedIn',
            color: 'bg-[#0077B5]'
        },
        {
            icon: <FaGithub size={24} />,
            url: 'https://github.com/aljithkj02',
            label: 'GitHub',
            color: 'bg-[#333333]'
        },
        {
            icon: <FaTwitter size={24} />,
            url: 'https://x.com/aljithkj02',
            label: 'Twitter',
            color: 'bg-[#1DA1F2]'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <SectionTitle title="Contact Me" />

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <p className="text-xl text-gray-600">
                            Always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 rounded-lg p-6 shadow-sm text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 * index }}
                                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                                {item.link ? (
                                    <a
                                        href={item.link}
                                        className="text-gray-600 hover:text-blue-600 transition-colors"
                                    >
                                        {item.content}
                                    </a>
                                ) : (
                                    <p className="text-gray-600">{item.content}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">Connect With Me</h3>

                        <div className="flex justify-center space-x-6">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${link.color} text-white p-4 rounded-full flex items-center justify-center shadow-md`}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <div className="mt-16">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31470028.234306782!2d48.5651749144298!3d15.668604857406825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sbd!4v1722404097527!5m2!1sen!2sbd"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg shadow-md"
                            title="Map location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;