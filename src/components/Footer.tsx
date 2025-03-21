import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        {
            icon: <FaLinkedin />,
            url: 'https://www.linkedin.com/in/aljith-kj-033213233/',
            label: 'LinkedIn'
        },
        {
            icon: <FaGithub />,
            url: 'https://github.com/aljithkj02',
            label: 'GitHub'
        },
        {
            icon: <FaTwitter />,
            url: 'https://x.com/aljithkj02',
            label: 'Twitter'
        }
    ];

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    <motion.div
                        className="text-2xl font-bold mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-white">Aljith</span>
                        <span className="text-blue-400">.dev</span>
                    </motion.div>

                    <div className="flex space-x-6 mb-8">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                whileHover={{ y: -5 }}
                                aria-label={link.label}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>

                    <p className="text-gray-400 text-center">
                        © {new Date().getFullYear()} Aljith K J. All rights reserved.
                    </p>

                    <p className="text-gray-500 text-sm mt-2 flex items-center">
                        Made with <FaHeart className="text-red-500 mx-1" /> in Kerala, India
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;