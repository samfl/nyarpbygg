import React from 'react';
import '../../styles/Contact.css';
import { MdCall, MdEmail } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai'


const Contact = () => {
    return (
        <div className="container">
            <div className="container-contact">
                <div className="container-contact-inner">
                    <div className="container-contact-wrapper">
                        <div>
                            <a href="tel:+46769460315">
                                <div className="contact-item">
                                    <MdCall />
                                </div>
                            </a>
                            <h2>+46703974756</h2>
                        </div>
                        <div>
                            <a href="mailto:rikard.nyarpbygg.se?" target="_blank" rel="noopener noreferrer">
                                <div className="contact-item" style={{backgroundSize: '250%'}}>
                                    <MdEmail />
                                </div>
                            </a>
                            <h2>Rikard@nyarpbygg.se</h2>
                        </div>
                        <div>
                            <a  href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <div className="contact-item" style={{backgroundSize: '300%'}}>
                                    <AiFillInstagram />
                                </div>
                            </a>
                            <h2>@Nyarpbygg</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact; 