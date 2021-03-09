import React from 'react';
import { SiReact, SiFirebase } from 'react-icons/si';

const Footer = () => {
    return (
        <footer>
            <small>
                © 2021 with <SiReact style={{ color: 'black' }} /> and <SiFirebase style={{ color: 'black' }} /> by {' '}
                <a target="_blank" rel="noopener noreferrer" href="">
                    Nyarp bygg AB
                </a>
            </small>
            <br />
            <div className="social-bagdes">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img alt="GitHub followers" src="https://img.shields.io/github/followers/samfl?label=github&style=social" />
                </a>
            </div>
        </footer>
    );
}

export default Footer; 