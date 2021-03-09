import React from 'react';
import '../../styles/About.css';
import rille from '../../assets/rille-profil3.jpg';
import nyarp from '../../assets/nyarpbygg-icon.png';

const About = () => {
    return (
        <div className="container">
            <div className="container-about">
                <div className="container-about-wrapper">
                    <div className="container-about-inner">
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', width: '250px', border: '1px solid black', borderRadius: '100%'}}>
                        <img src={nyarp} />
                    </div>
                        <div style={{height: '250px', width: '250px', marginLeft: '30px'}}>
                            <h2>Nyarp Bygg AB</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla, quis rutrum felis pretium quis. Nunc tempor, urna ut interdum cursus. </p>
                        </div>
                    </div>
                    <div className="container-about-inner">
                        <div style={{height: '250px', width: '250px', backgroundImage: `url(${rille})`, borderRadius: '100%'}}></div>
                        <div style={{height: '250px', width: '250px', marginLeft: '30px'}}>
                            <h2>Rikard Florin</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla, quis rutrum felis pretium quis. Nunc tempor, urna ut interdum cursus. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About; 