import React from 'react'
import Frontend from './Frontend.jsx';
import Backend from './Backend.jsx';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <p className="section_subtitle">My Technical Level</p>

        <div className="skills_container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills
