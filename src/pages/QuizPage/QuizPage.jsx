import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';
// import WelcomeMessage from '../../components/WelcomeMessage/WelcomeMessage'

const WelcomePage = (props) => {
    return (
    <div className='WelcomePage'>
        <h1>About <span color="green">The Plant Guru</span></h1>
        <p>
            Some About Text
        </p>
    </div>
    )
}

export default WelcomePage