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
`

const Text = styled.p`
margin: 0; 
padding: 0; 
`

const FatText = styled.p`
    font-weight: bold; 
`

const About = () => {
    return (
        <Container initial={"initial"} animate={"in"} exit={"out"} variants={pageVariants} transition={pageTransition}>
            <Wrapper>
                <Outer>
                    <Inner>
                        <Box >
                            <FatText>Om oss</FatText>
                            <Text>Vi är det lilla företaget som jobbar med husrenovering, om-/tillbyggnader, trädgårdsplanering och solskydd. </Text>
                            <br />
                            <Text>Med utgångspunkt i hög kvalité och god detaljkänsla i både utförande och materialval levererar vi enligt överenskomna tidplaner. </Text>
                            <br />
                            <Text>Läs mer under <Link to="/tjanster">Tjänster</Link>.</Text>
                            <FatText>ROT-avdrag</FatText>
                            <Text>Utnyttja ROT-avdraget och sänk arbetskostnaden vid renoveringar eller tillbyggnader i villan!</Text>
                            <br />
                            <br />
                            <Text>Varmt välkomna att diskutera och bolla dina hus och trädgårdstankar, både små och större projekt med oss.</Text>
                            <br />
                            <Text>Vi finns i Bankeryd och tar uppdrag i Jönköpingsområdet.</Text>
                        </Box>
                    </Inner>    
                </Outer>
            </Wrapper>
        </Container>
    );
}

export default About; 