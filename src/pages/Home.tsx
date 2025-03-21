import { useRef } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const Home = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="font-poppins text-gray-800 bg-gray-50">
            <Header
                scrollToSection={scrollToSection}
                // @ts-ignore
                aboutRef={aboutRef}
                // @ts-ignore
                skillsRef={skillsRef}
                // @ts-ignore
                projectsRef={projectsRef}
                // @ts-ignore
                contactRef={contactRef}
            />

            <main>
                <Hero scrollToAbout={() => {
                    // @ts-ignore
                    scrollToSection(aboutRef)
                }
                } />

                <div ref={aboutRef}>
                    <About />
                </div>

                <div ref={skillsRef}>
                    <Skills />
                </div>

                <div ref={projectsRef}>
                    <Projects />
                </div>

                <div ref={contactRef}>
                    <Contact />
                </div>
            </main>

            <Footer />
        </div>
    );
}
