import React from 'react';
import { Link } from 'react-router-dom';
import homeback from '../../assets/welcome3.jpg';
import mainback from '../../assets/Brygga_ny.jpg';
import headerIcon from '../../assets/funkis.png';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../../assets/transitions';

const Container = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${mainback});
    background-size: cover;
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
    fontSize: 20px;
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
@media (max-width: 768px) {
    display: flex;
    flex-direction: column;  
    align-items: center; 
    text-align: center;
}
`

const Home = () => {
    return (
        <Container initial={"initial"} animate={"in"} exit={"out"} variants={pageVariants} transition={pageTransition}>
            <Wrapper>
                <Box>
                    <HomeText>Ett byggföretag i Bankeryd.</HomeText>
                    <HomeText>Husrenovering, ombyggnader & trädgårdsplanering.</HomeText>
                    <HomeText>Vi hjälper dig.</HomeText>
                </Box>
            </Wrapper>
        </Container>
    );
}

export default Home; 