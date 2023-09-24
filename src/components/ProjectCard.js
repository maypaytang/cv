import React, {useState} from 'react'
import './ProjectCard.css';
import heroImage from '../Images/Hero.png';

function ProjectCard() {
    return (
        <>
        <div className='project-card-area'>
            <h2>Mine proskjekter</h2>
            <div className='project-card-holder'>
                <div className='project-card-1'></div>
                <div className='project-card-2'></div>
                <div className='project-card-3'></div>
                <div className='project-card-4'></div>
            </div>
        </div>
        </>
    )
}

export default ProjectCard