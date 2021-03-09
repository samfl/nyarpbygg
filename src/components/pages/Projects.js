import React from 'react';
import '../../styles/Projects.css';
import terass from '../../assets/terass.jpg';
import badrum from '../../assets/badrum.jpg';
import brygga from '../../assets/brygga.jpg';
import bastu from '../../assets/bastu.jpg';
import fonster from '../../assets/fonster.jpg';
import isolering from '../../assets/isolering.jpg';

const Projects = () => {
    return (
        <div className="container">
            <div className="container-projects">
                <div className="container-projects-wrapper">
                    <div className="container-projects-inner">
                        <div style={{height: '250px', width: '250px', backgroundImage: `url(${terass})`, borderRadius: '100%'}}></div>
                        <div style={{height: '250px', width: '250px', marginLeft: '30px'}}>
                            <h2>Terass & Altan</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla, quis rutrum felis pretium quis. Nunc tempor, urna ut interdum cursus. </p>
                        </div>
                    </div>
                    <div className="container-projects-inner">
                        <div style={{height: '250px', width: '250px', backgroundImage: `url(${badrum})`, borderRadius: '100%'}}></div>
                        <div style={{height: '250px', width: '250px', marginLeft: '30px'}}>
                            <h2>Badrum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla, quis rutrum felis pretium quis. Nunc tempor, urna ut interdum cursus. </p>
                        </div>
                    </div>
                    <div className="container-projects-inner">
                        <div style={{height: '250px', width: '250px', backgroundImage: `url(${brygga})`, borderRadius: '100%'}}></div>
                        <div style={{height: '250px', width: '250px', marginLeft: '30px'}}>
                            <h2>Brygga</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla, quis rutrum felis pretium quis. Nunc tempor, urna ut interdum cursus. </p>
                        </div>
                    </div>
                    <div className="container-projects-inner">
                        <div style={{height: '250px', width: '250px', backgroundImage: `url(${bastu})`, borderRadius: '100%'}}></div>
                        <div style={{height: '250px', width: '250px', marginLeft: '30px'}}>
                            <h2>Bastu</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla, quis rutrum felis pretium quis. Nunc tempor, urna ut interdum cursus. </p>
                        </div>
                    </div>
                    <div className="container-projects-inner">
                        <div style={{height: '250px', width: '250px', backgroundImage: `url(${fonster})`, borderRadius: '100%'}}></div>
                        <div style={{height: '250px', width: '250px', marginLeft: '30px'}}>
                            <h2>Fönster</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla, quis rutrum felis pretium quis. Nunc tempor, urna ut interdum cursus. </p>
                        </div>
                    </div>
                    <div className="container-projects-inner">
                        <div style={{height: '250px', width: '250px', backgroundImage: `url(${isolering})`, borderRadius: '100%'}}></div>
                        <div style={{height: '250px', width: '250px', marginLeft: '30px'}}>
                            <h2>Isolering</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla, quis rutrum felis pretium quis. Nunc tempor, urna ut interdum cursus. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects; 