import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../../assets/transitions';

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
    margin-bottom: 20px; 
`

const Box = styled.div`
    display: flex; 
    flex-direction: column; 
    height: 250px;
    width: 320px;
    margin: 10px; 
`

const Services = () => {
    return (
        <Container initial={"initial"} animate={"in"} exit={"out"} variants={pageVariants} transition={pageTransition}>
            <Wrapper>
                <Outer>
                    <Inner>
                        <Box>
                            <h2>Tjänster</h2>
                            <p>Vi gör det mesta inom husbygg och hjälper gärna till med allt från rådgivning, planering, genomförande och samordning av andra hantverkare för att hålla tidsplaner och underlätta för dig som privatperson eller företag. </p>
                        </Box>
                    </Inner>
                    <Inner>
                        <Box>
                            <h2>Exempel</h2>
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