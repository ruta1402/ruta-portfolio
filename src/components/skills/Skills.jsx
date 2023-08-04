import React from 'react'
import "./skills.css";
import Backend from "./Backend";
import Frontend from './Frontend';

const Skills = () => {
  return (
    <section className="skills section" id="skilld">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical skills</span>

        <div className="skills__container conatiner grid">
            <Frontend/>
            <Backend/>
        </div>
    </section>
  )
}

export default Skills
