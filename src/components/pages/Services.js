import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../../assets/transitions';
import { GrServices } from 'react-icons/gr';
import services from '../../assets/services.jpg';
import renovating from '../../assets/renovating.jpg';

const Container = styled(motion.div)`
    position: absolute;
    height: 100%;
`
const Wrapper = styled.div`
    margin-top: 20px; 
    display: flex;
    width: 100%; 
    height: 100%;
`
const Outer = styled.div`
    display: flex;  
    flex-direction: column; 
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        display: flex; 
        flex-direction: row; 
        align-items: center; 
        width: 100%; 
    }
`
const Inner = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`

const Box = styled.div`
    display: flex; 
    flex-direction: column; 
    width: 320px;
    margin-right: 10px; 
    margin-left: 10px;
    margin-bottom: 0px;  
    margin-top: 0px;  
`

const Header = styled.p`
    font-size: 20px;
    font-weight: bold; 
    margin: 0px; 
    padding: 0px;  
`

const Services = () => {
    return (
        <Container initial={"initial"} animate={"in"} exit={"out"} variants={pageVariants} transition={pageTransition}>
            <Wrapper>
                <Outer>
                    <Inner>
                        <Box className="b1" >
                            <Header>Tjänster</Header>
                            <p>Vi gör det mesta inom husbyggnation, renovering och hjälper gärna till med rådgivning, planering, naturligtvis själva genomförandet, byggandet och samordning av andra hantverkare för att hålla tidsplaner och underlätta för dig som privatperson eller företag. </p>
                        </Box>
                    </Inner>
                    <Inner>
                        <Box className="b4" >
                            <p>Vi har en bred kompetens i företaget inom framförallt nedan, men också inom närliggande områden genom samarbetspartners som andra byggare, VA-, ventilationsföretag, elektriker och andra företag.</p>
                            <ul style={{marginLeft: '-20px'}}>
                                <li>All typ av nybyggnation, om- och tillbyggnad samt renovering av bostäder och kontor</li>
                                <li>Kök</li>
                                <li>Badrum, bastu/spa</li>
                                <li>Trädgårdsanläggning och hjälp med planering, belysning, stensättning, m.m.</li>
                                <li>Uteplatser, trädäck, pool/spa m.m.</li>
                                <li>Solskydd, alla former av markiser, segel m.m.</li>
                                <li>Samordning, även mindre projekt kräver ofta samordning och samarbete med duktiga markanläggare, elektriker, plåtslagare, VA och ventilationsfirmor, kakelsättare med våtrumsbehörighet m.m.</li>    
                            </ul>
                        </Box>
                    </Inner>
                </Outer>
            </Wrapper>
        </Container>
    );
}

export default Services; 