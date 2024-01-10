import React from 'react'
import nest from "../assets/technology/nest.png"
import js from "../assets/technology/js.png"
import git from "../assets/technology/Git-Icon-1788C.png"
import java from "../assets/technology/java.png"
import mongo from "../assets/technology/mongo.png"
import sql from "../assets/technology/sql.png"
import node from "../assets/technology/node.png"
import type from "../assets/technology/ts.png"


const Skills = () => {


    const SKILLS = [
        {
            id: 1,
            img: js,
            name: 'Javascript'
        },
        {
            id: 2,
            img: type,
            name: 'Typescript'
        },
        {
            id: 3,
            img: node,
            name: 'NodeJs'
        },
        {
            id: 4,
            img: nest,
            name: 'NestJs'
        },
        // {
        //     id: 5,
        //     img: java,
        //     name: 'Java'
        // },
        {
            id: 6,
            img: git,
            name: 'Git'
        },
        {
            id: 7,
            img: sql,
            name: 'MySql'
        },
        {
            id: 8,
            img: mongo,
            name: 'MongoDB'
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
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills
