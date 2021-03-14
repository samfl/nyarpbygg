import React from 'react';
import nyarp from '../../assets/nb_black_transp_largetext.png';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import {pageTransition, pageVariants} from '../../assets/transitions';
import { Link } from 'react-router-dom';
import { BsQuestionDiamond } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiCheckSquare } from 'react-icons/bi';

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
    flex-direction: column;
    flex-wrap: wrap; 
    width: 100%;
`
const Inner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px; 
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

const Text = styled.p`
`

const About = () => {
    return (
        <Container initial={"initial"} animate={"in"} exit={"out"} variants={pageVariants} transition={pageTransition}>
            <Wrapper>
                <Outer>
                    <Inner>
                            <img style={{height: '100px'}} src={nyarp} alt="Nyarp Bygg AB Logo" />
                    </Inner>
                    <Inner>
                        <Box >
                            <BsQuestionDiamond size="30px"/>
                            <Text>Vi är det lilla företaget som jobbar med alla typer av husrenovering, ombyggnader och trädgårdsplanering. </Text>
                        </Box>
                        <Box >
                            <BiCheckSquare size="30px"/>
                            <Text>Vi håller hög kvalite och god detaljkänsla i både utförande och materialval.</Text>
                        </Box>
                        <Box >
                            <HiOutlineLocationMarker size="30px"/>
                            <Text>Vi finns i Bankeryd och tar uppdrag i Jönköpingsområdet. Läs mer under <Link to="/projekt">Tjänster</Link>.</Text>
                        </Box>
                    </Inner>    
                </Outer>
            </Wrapper>
        </Container>
    );
}

export default About; 