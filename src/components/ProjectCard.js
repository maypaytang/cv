import React, {useState} from 'react'
import './ProjectCard.css';

export default function App() {
  return (
    <div className='project-card-area'>
      <h2 className='cards-title'>Mine proskjekter</h2>
      <div className='cards-scroll' style={{ width: "100%", overflow: "auto", display: "flex" }}>
          <Cards />
      </div>
    </div>
  );
}
//TODO få de til å bli litt annerledes ved hover
const Cards = () => {
  return (
    <div className='project-card-holder' style={{ margin: "20px" }}>
        <div className='card-name-container'>
        <a href="https://maypaytang.github.io/results-summary-component-main/" target="_blank"><div className='card project-card-1'></div></a>
        <h5 className='card-name'>Results summary</h5>
        </div>
        <div className='card-name-container'>
        <a href="https://maypaytang.github.io/code-challange-qr/" target="_blank"><div className='card project-card-2'></div></a>
        <h5 className='card-name'>QR code</h5>
        </div>
    </div>
  );
};