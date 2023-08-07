import React from 'react';
import { Link } from 'react-router-dom';
import homeback from '../../assets/welcome3.jpg';
import mainback from '../../assets/Brygga_ny.jpg';
import bgbg from '../../assets/bgbg.jpg';
import bgbg2 from '../../assets/bgbg2.jpg';
import headerIcon from '../../assets/funkis.png';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../../assets/transitions';

const Container = styled(motion.div)`
    width: 100%;
    height: 100%;
    background-image: url(${mainback});
    background-size: cover;
    margin-top: -1px; 
    font-size: 17px;

    @media (max-width: 1024px) {
        background-image: url(${bgbg2});
        padding-top: 0px; 
    }

    @media (max-width: 414px) {
        background-image: url(${bgbg2});
        background-position: 414px 0;
        font-size: 14px;  
        padding-top: 99px; 
    }

    @media (max-width: 375px) {
        background-image: url(${bgbg2});
        background-position: 375px 0;
        font-size: 14px;  
        padding-top: 84px; 
    }

    @media (max-width: 360px) {
        background-image: url(${bgbg2});
        background-position: 360px 0;
        font-size: 14px;  
        padding-top: 78px; 
    }

    @media (max-width: 320px) {
        background-image: url(${bgbg2});
        background-position: 320px 0;
        font-size: 14px;  
    }

    @media (max-width: 280px) {
        background-image: url(${bgbg2});
        background-position: 280px 0;
        font-size: 14px;  
    }
`
const Wrapper = styled.div`
    padding-left: 30px;
    @media (max-width: 768px) {
        padding-left: 0px;
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        width: 100%; 
    }
`
const HomeText = styled.div`
    display: table;
    color: black;
    padding: 5px;
    margin: 5px;
    font-weight: bold; 
`

const HomeFatText = styled.div`
    font-weight: bold; 
    display: table;
    color: black;
    padding: 5px;
    margin: 5px;
    font-size: 35px;
`

const IconWrapper = styled.div`
      width: 270px; 
      margin-top: 20px; 
      display: flex;
      flex-direction: column;   
      @media (max-width: 768px) {
        align-items: center; 
    }
` 

const Box = styled.div`
    width: 700px;
    @media (max-width: 1024px) {
        width: 600px;
        background-color: rgba(255,255,255,0.6);
    }
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;  
        align-items: center; 
        text-align: center;
        width: 400px;
        background-color: rgba(255,255,255,0.6);
    }
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;  
        align-items: center; 
        text-align: center;
        width: 300px;
        background-color: rgba(255,255,255,0.6);
    }
`

const Home = () => {
    return (
        <Container initial={"initial"} animate={"in"} exit={"out"} variants={pageVariants} transition={pageTransition}>
            <Wrapper>
                <Box>
                    <HomeFatText>NYARP BYGG AB</HomeFatText>
                    <HomeText>Ett byggföretag i Bankeryd, Jönköping som hjälper er med större som mindre projekt inom allt från nybyggnation till renovering och trädgårdsplanering.</HomeText>
                    <HomeText>Välkommen att bolla dina hus och trädgårdsdrömmar med oss!</HomeText>
                </Box>
            </Wrapper>
        </Container>
    );
}

export default Home; 