import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaArrowDown } from 'react-icons/fa';
import Logo from '../assets/logo.png'

interface HeroProps {
    scrollToAbout: () => void;
}

const Hero = ({ scrollToAbout }: HeroProps) => {
    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white py-16">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full bg-[url('/assets/images/pattern.svg')] bg-repeat"></div>
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <motion.div
                        className="w-full md:w-1/2 text-center md:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            <span className="text-blue-300">Aljith K J</span>
                        </h1>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6">Software Engineer</h2>
                        <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 max-w-lg mx-auto md:mx-0">
                            Turning complex ideas into simple, efficient applications. Specializing in web development and DevOps with a passion for blockchain technology.
                        </p>

                        <div className="flex space-x-4 justify-center md:justify-start mb-8">
                            <motion.a
                                href="https://www.linkedin.com/in/aljith-kj-033213233/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-blue-600 p-2 sm:p-3 rounded-full"
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={18} className="sm:w-5 sm:h-5" />
                            </motion.a>

                            <motion.a
                                href="https://github.com/aljithkj02"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-blue-600 p-2 sm:p-3 rounded-full"
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="GitHub"
                            >
                                <FaGithub size={18} className="sm:w-5 sm:h-5" />
                            </motion.a>

                            <motion.a
                                href="https://x.com/aljithkj02"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-blue-600 p-2 sm:p-3 rounded-full"
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Twitter"
                            >
                                <FaTwitter size={18} className="sm:w-5 sm:h-5" />
                            </motion.a>
                        </div>

                        <motion.button
                            onClick={scrollToAbout}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-colors text-sm sm:text-base"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore My Work
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-300">
                            <img
                                src={Logo}
                                alt="Aljith K J"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <button
                    onClick={scrollToAbout}
                    className="text-white flex flex-col items-center"
                    aria-label="Scroll down"
                >
                    <span className="mb-2 text-sm sm:text-base">Scroll Down</span>
                    <FaArrowDown />
                </button>
            </motion.div>
        </section>
    );
};

export default Hero;