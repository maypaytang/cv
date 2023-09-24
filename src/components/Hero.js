import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './Hero.css';
import heroImage from '../Images/Hero.png';

function Hero() {
    return (
        <>
        <div className='hero-container'>
            <div className='hero-frame'>
                <div className='hero-image' alt="Hero Image"></div>
            </div>
            <div className='hero-txt'>
                <h4 className='hero-header'>Hei!</h4>
                <h5 className='hero-text'>
                    Velkommen til CVen min, hvor du kan finne mer informasjon om meg, erfaringen min, og proskjekter jeg har jobbet med.
                    <br />
                    <br />
                    Jeg heter May Elisabeth Tangedal, er 25 år, og studerer Informasjonsteknologi, Frontend og Mobilutvikling på Høyskolen Kristiania. Jeg kommer fra Askøy og bor i Bergen. Jeg er en reflektert og kreativ person med stor stå-på-vilje. Kunst og kreativitet står meg nært, som strikking, maling, leire, UX/UI, og frontend-utvikling. Jeg er også interessert i interiør, bøker, og planter.
                </h5>
            </div>
        </div>
        </>
    )
}

export default Hero