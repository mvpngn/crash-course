import React from 'react';
import './Skills.css'

import Skill from "../common/Skill";

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." +
    "\n" +
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." +
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const skills = [
    {title: 'Front-End Development', value: 75},
    {title: 'Back-End Development', value: 90},
    {title: 'Mobile App Development', value: 80},
    {title: 'Desktop Development', value: 70}
];

const Skills = () => {
    return (
        <>
            <h1 className="section-title">Skills</h1>

            <section className="skills">
                <div className="skills__description">
                    {description}
                </div>

                <div className="skills__content">
                    {skills.map(skill => <Skill title={skill.title} value={skill.value} />)}
                </div>
            </section>
        </>
    );
};

export default Skills;