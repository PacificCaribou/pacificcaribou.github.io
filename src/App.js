import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <nav className='navbar'>
        <ul className='left'>
          <li>Home</li>
        </ul>
        <ul className='right'>
          <li>About</li>
          <li>Resume</li>
        </ul>
      </nav>
      <div className='container'>
        <header className='intro-header'>
          <div className='intro-portrait-container'>
            <img className='intro-portrait' src='https://picsum.photos/1000/2000?grayscale' alt='' />
          </div>
          <div className='intro-text'>
            <h1>Jefferson Chen</h1>
            <h2>Software engineer from the transistors up</h2>

            <p>
              I've worked on
            </p>
            <ul>
              <li><a href='#' className='link'>anti-scalping tools</a> for the masses</li>
              <li>a <a href='#' className='link'>self-driving car</a></li>
              <li>the <a href='#' className='link'>Predator drone</a></li>
            </ul>
            <p>
              and <a href='#projects' className='link'>more</a>.
            </p>
          </div>
        </header>
      </div>
      <div className='wide-container'>
        <div id='projects' className='projects-container'>
          <h2 className='projects-title'>I just like building things.</h2>
          <p className='projects-subtitle'>Here's some stuff you can play around with right now</p>
          <div className='proj proj1'>
            <img className='proj-picture' src='https://picsum.photos/1800/1300?grayscale' alt='' />
            <div className='proj-blurb'>
              <h3><a href='#'>Anti-Scalper Scalper Club</a></h3>
              <p>Helping normal people get ahead of scalpers via text-message notifications.</p>
              <p className='proj-skills'>React, Node, Express, MongoDB, SASS, Tailwind, AWS, Twilio API</p>
            </div>
          </div>
          <div className='proj proj2'>
            <img className='proj-picture' src='https://picsum.photos/1800/1300?grayscale' alt='' />
            <div className='proj-blurb'>
              <h3><a href='#'>Caribou Mail</a></h3>
              <p>Self-hosted Firefox Send alternative to securely share files via link.</p>
            </div>
          </div>
          <div className='proj proj3'>
            <img className='proj-picture' src='https://picsum.photos/1800/1300?grayscale' alt='' />
            <div className='proj-blurb'>
              <h3><a href='#'>Personal + Engineering Blog</a></h3>
              <p>For everything that can't be easily demoed online (embedded projects, for example).</p>
            </div>
          </div>
        </div>
      </div>
      <div className='wide-container'>
        <div className='about'>
          <p>
            You can check me out at
          </p>
          <ul className='about-socials'>
            <li>GitHub</li>
            <li>Mail</li>
            <li>LinkedIn</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
