import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaCloud, FaServer, FaDesktop } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["JavaScript", "TypeScript", "NodeJS", "Solidity"],
            icon: <FaCode className="w-6 h-6 text-blue-600" />,
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "Front End Development",
            skills: ["ReactJS", "NextJS", "Redux", "Material UI", "TailwindCSS", "HTML", "CSS"],
            icon: <FaDesktop className="w-6 h-6 text-purple-600" />,
            color: "bg-purple-50 text-purple-600"
        },
        {
            title: "Back End Development",
            skills: ["ExpressJS", "NestJS", "GraphQL", "Kafka"],
            icon: <FaServer className="w-6 h-6 text-green-600" />,
            color: "bg-green-50 text-green-600"
        },
        {
            title: "Cloud",
            skills: ["Amazon AWS", "Docker", "Kubernetes"],
            icon: <FaCloud className="w-6 h-6 text-orange-600" />,
            color: "bg-orange-50 text-orange-600"
        },
        {
            title: "Databases",
            skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
            icon: <FaDatabase className="w-6 h-6 text-red-600" />,
            color: "bg-red-50 text-red-600"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <SectionTitle title="My Skills" />

                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <p className="text-xl text-gray-600">
                            A diverse range of skills acquired throughout years of development experience.
                            Below is a comprehensive overview of technical expertise across various domains.
                        </p>
                    </motion.div>

                    <div className="space-y-10">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className={`w-12 h-12 ${category.color.split(' ')[0]} rounded-lg flex items-center justify-center mr-4`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <div className="flex flex-wrap gap-3">
                                        {category.skills.map((skill, i) => (
                                            <motion.div
                                                key={i}
                                                className={`${category.color} px-4 py-2 rounded-full font-medium`}
                                                whileHover={{ y: -5, scale: 1.05 }}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: 0.1 * i }}
                                            >
                                                {skill}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;