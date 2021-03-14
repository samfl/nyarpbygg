import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../../assets/transitions';
import { GrServices } from 'react-icons/gr';
import services from '../../assets/services.jpg';
import renovating from '../../assets/renovating.jpg';

const Container = styled(motion.div)`
    position: absolute;
`
const Wrapper = styled.div`
    margin-top: 20px; 
    display: flex;
    width: 100%; 
`
const Outer = styled.div`
    display: flex;  
    justify-content: space-between;
    flex-wrap: wrap;
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
    margin-bottom: 20px;  
    margin-top: 20px;  
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
                        <Box className="b1" style={{borderBottom: '1px solid #383838'}}>
                            <Header>Tjänster</Header>
                            <p>Vi gör det mesta inom husbygg och hjälper gärna till med allt från rådgivning, planering, genomförande och samordning av andra hantverkare för att hålla tidsplaner och underlätta för dig som privatperson eller företag. </p>
                        </Box>
                        <Box className="b2">
                            <img src={services} alt="services" />
                        </Box>
                    </Inner>
                    <Inner>
                        <Box className="b3">
                            <img src={renovating} alt="services" />
                        </Box>
                        <Box className="b4" style={{borderBottom: '1px solid #383838'}}>
                            <Header>Exempel</Header>
                            <ul style={{marginLeft: '-20px'}}>
                                <li>All typ av renovering och ombyggnation</li>
                                <li>Kök</li>
                                <li>Badrum</li>
                                <li>Trädgårdsanläggning och hjälp med planering, ljussättning mm.</li>
                                <li>Altan / Trädäck</li>
                                <li>Solskydd</li>
                                <li>Trädfällning / Stubbfräsning</li>
                                <li>Samordning (även mindre projekt kräver ofta samordning och samarbete med duktiga markanläggare, elektriker, plåtslagare, VA och ventilationsfirmor mm.)</li>    
                            </ul>
                        </Box>

                    </Inner>
                </Outer>
            </Wrapper>
        </Container>
    );
}

export default Services; 