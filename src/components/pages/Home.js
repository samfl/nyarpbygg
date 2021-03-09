import React from 'react';
import '../../styles/Home.css';
import homeback from '../../assets/welcome3.jpg';
import headerIcon from '../../assets/nb_black_transparent_smalltext.png';

const Home = () => {
    return (
        <div style={{width: '100%', height: '100%', backgroundImage: `url(${homeback})`, backgroundSize: 'cover'}}>
            <div className="container-welcome">
                <div className="home-icon">
                    <img src={headerIcon} alt="Nyarp Bygg AB Logo" />
                </div>
                <h1>Ett jönköpingsbaserat byggföretag. </h1>
            </div>
        </div>
    );
}

export default Home; 