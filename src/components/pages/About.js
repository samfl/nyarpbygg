import React from 'react';
import nyarp from '../../assets/nb_black_transp_largetext.png';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import {pageTransition, pageVariants} from '../../assets/transitions';
import { Link } from 'react-router-dom';
import { BsQuestionDiamond } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiCheckSquare } from 'react-icons/bi';
import {GrCompliance, GrLocation, GrCircleQuestion, GrCheckboxSelected} from 'react-icons/gr';
import {HiCheckCircle, HiInformationCircle, HiQuestionMarkCircle } from 'react-icons/hi';

const Container = styled(motion.div)`
    position: absolute;
    min-hegiht: 100%; 
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
    flex-wrap: wrap; 
    width: 100%;
    height: 100%;
`
const Inner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px; 
    height: 100%;
`
const Box = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
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
                        <Box >
                            <HiQuestionMarkCircle size="40px"/>
                            <Text>Vi är det lilla företaget som jobbar med alla typer av husrenovering, ombyggnader och trädgårdsplanering. </Text>
                        </Box>
                        <Box >
                            <HiCheckCircle size="40px"/>
                            <Text>Vi håller hög kvalite och god detaljkänsla i både utförande och materialval.</Text>
                        </Box>
                        <Box >
                            <HiInformationCircle size="40px"/>
                            <Text>Vi finns i Bankeryd och tar uppdrag i Jönköpingsområdet. Läs mer under <Link to="/projekt">Tjänster</Link>.</Text>
                        </Box>
                    </Inner>    
                </Outer>
            </Wrapper>
        </Container>
    );
}

export default About; 