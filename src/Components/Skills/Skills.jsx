import React from 'react'
import Frontend from './Frontend.jsx';
import Backend from './Backend.jsx';
import './Skills.css';
import Languages from './Languages.jsx';
import Databases from './Database.jsx';
import Devops from './Devops.jsx';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <p className="section_subtitle">My Technical Arsenal</p>

        <div className="skills_container container grid">
            <Languages />
            <Databases />
            <Frontend />
            <Backend />
            {/* <Devops /> */}
        </div>
    </section>
  )
}

export default Skills
