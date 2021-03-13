import React from 'react';
import nyarp from '../../assets/nb_black_darkblue_largetext.png';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import {pageTransition, pageVariants} from '../../assets/transitions';

const Container = styled(motion.div)`
    position: absolute;
    min-hegiht: 100%; 
`
const Wrapper = styled.div`
    margin-top: 20px;
    display: flex; 
    width: 100%;
`
const Outer = styled.div`
    display: flex; 
    justify-content: space-evenly;
    flex-wrap: wrap; 
    width: 100%;
`
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 600px; 
    margin-bottom: 20px; 
`
const Box = styled.div`
    display: flex;
    justify-Content: center;
    width: 250px;
`
const LinkWrapper = styled.div``
const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 40px; 
    width: 150px;
    height: 150px;
    border-radius: 100%;
`
const Text = styled.p``

const About = () => {
    return (
        <Container initial={"initial"} animate={"in"} exit={"out"} variants={pageVariants} transition={pageTransition}>
            <Wrapper>
                <Outer>
                    <ContentWrapper>
                        <Box >
                            <img style={{height: '110px'}} src={nyarp} alt="Nyarp Bygg AB Logo" />
                        </Box>
                        <div style={{width: '340px', marginLeft: '30px'}}>
                            <p>Vi är det lilla företaget som jobbar med alla typer av husrenovering, ombyggnader och trädgårdsplanering. Vi håller hög kvalite och god detaljkänsla i både utförande och materialval. Vi finns i Bankeryd och tar uppdrag i Jönköpingsområdet. Läs mer under <a href="/projekt">Tjänster</a>.</p>
                        </div>
                    </ContentWrapper>
                </Outer>
            </Wrapper>
        </Container>
    );
}

export default About; 