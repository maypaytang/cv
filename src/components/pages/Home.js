import React, {useState} from 'react'
import Hero from '../Hero';
import ProjectCard from '../ProjectCard';
import './Home.css';

function Home() {
    return (
        <div className='components-container'>
          <Hero />
          <ProjectCard />
        </div>
      );
}
export default Home