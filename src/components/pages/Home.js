import React from 'react';
import { Link } from 'react-router-dom';
import homeback from '../../assets/welcome3.jpg';
import headerIcon from '../../assets/nb_black_transparent_smalltext.png';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../../assets/transitions';

const Container = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${homeback});
    background-size: cover;
`
const Wrapper = styled.div`
    padding-left: 30px;
`
const HomeText = styled.div`
    display: table;
    background-color: rgba(255, 255, 255, 0.541);
    color: black;
    padding: 5px;
    margin: 5px;
    fontSize: 20px;
`

const Home = () => {
    return (
        <Container initial={"initial"} animate={"in"} exit={"out"} variants={pageVariants} transition={pageTransition}>
            <Wrapper>
                <div style={{ width: '270px', marginTop: '20px' }}>
                    <img style={{width: '270px'}} src={headerIcon} alt="Nyarp Bygg AB Logo" />
                </div>
                <div>
                    <HomeText>Ett byggföretag i Bankeryd.</HomeText>
                    <HomeText>Husrenovering, ombyggnader & trädgårdsplanering.</HomeText>
                    <HomeText>Vi hjälper dig.</HomeText>
                </div>
            </Wrapper>
        </Container>
    );
}

export default Home; 