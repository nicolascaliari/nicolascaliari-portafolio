import React from 'react'
import html from "../assets/technology/html.png"
import css from "../assets/technology/CSS3.svg.png"
import js from "../assets/technology/js.svg.png"
import git from "../assets/technology/Git-Icon-1788C.png"
import c from "../assets/technology/img.png"
import boostrap from "../assets/technology/bs.png"
import react from "../assets/technology/react.png"
import asp from "../assets/technology/asp.png"
import sql from "../assets/technology/sql.png"
import type from "../assets/technology/typescript.png"


const Skills = () => {


    const SKILLS = [
        {
            id: 1,
            img: html,
            name: 'HTML'
        },
        {
            id: 2,
            img: css,
            name: 'CSS'
        },
        {
            id: 3,
            img: js,
            name: 'Javascript'
        },
        {
            id: 4,
            img: react,
            name: 'React'
        },
        {
            id: 5,
            img: git,
            name: 'Git'
        },
        {
            id: 8,
            img: sql,
            name: 'MySql'
        },
        {
            id: 9,
            img: c,
            name: 'C#'
        },
        {
            id: 10,
            img: type,
            name: 'Typescript'
        },

    ]

    return (
        <div className="main-container" id='habilidades'>
            <h2 className="text-white text-center text-[40px] font-[600]">
                <span className="heading-sec__main">Habilidades</span>

            </h2>
            <div className="about__content-skills">
                <div className="flex flex-wrap justify-center items-center">

                    {
                        SKILLS.map((skill) => (
                            <div className="flex flex-col justify-center items-center p-[2rem]  font-[600] text-white" key={skill.id}>
                                <img className="w-[130px] flex justify-center items-center" src={skill.img} alt='' />
                                <h2 className='text-center'>{skill.name}</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills
