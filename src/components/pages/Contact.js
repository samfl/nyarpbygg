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
                            <a href="mailto:rikard.nyarpbygg.se?" target="_blank">
                                <div className="contact-item">
                                    <MdEmail />
                                </div>
                            </a>
                            <h2>Rikard@nyarpbygg.se</h2>
                        </div>
                        <div>
                            <a target="_blank" href="https://www.instagram.com/" rel="noopener noreferrer">
                                <div className="contact-item">
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