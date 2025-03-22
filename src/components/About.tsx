import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaFileAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const About = () => {
    const services = [
        {
            icon: <FaLaptopCode className="w-6 h-6 text-blue-600" />,
            title: "Web Development",
            description: "High-quality development of sites at the professional level."
        },
        {
            icon: <FaServer className="w-6 h-6 text-blue-600" />,
            title: "DevOps",
            description: "Reliable and efficient DevOps services to streamline software delivery."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <SectionTitle title="About Me" />

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-lg text-gray-700 mb-6">
                            An agnostic engineer from Kerala, India, with a knack for turning complex ideas into simple, efficient applications.
                            Specializing in website development, web servers, and DevOps tasks, with a passion for blockchain technology.
                            Focused on creating applications that are both functional and user-friendly.
                        </p>

                        <p className="text-lg text-gray-700 mb-12">
                            Experience includes collaborating with clients globally, delivering projects that are not only technically robust but also aesthetically
                            pleasing and easy to use.
                        </p>

                        <div className="flex justify-center mb-12">
                            <motion.a
                                href="https://drive.google.com/file/d/1RQlEZfl5lp4_XOlQ_zPpbb_ZeWrU7MYv/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaFileAlt className="w-5 h-5" />
                                View Resume
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">What I'm Doing</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-50 rounded-lg p-6 shadow-sm"
                                    whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                            {service.icon}
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-800">{service.title}</h4>
                                    </div>
                                    <p className="text-gray-600">{service.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;