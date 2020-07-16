import React from 'react';
import './AboutPage.css';
import { Link } from 'react-router-dom';

const About = (props) => (
    <div className='AboutPage'>
        <h1>About <span color="green">The Plant Guru</span></h1>
        <p>
            Some About Text
        </p>
    </div>
)

export default About;