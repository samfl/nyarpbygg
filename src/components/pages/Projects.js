import React from 'react';
import terass from '../../assets/terass.jpg';
import plank from '../../assets/plank.jpg';
import badrum from '../../assets/badrum.jpg';
import brygga from '../../assets/brygga.jpg';
import bastu from '../../assets/bastu.jpg';
import fonster from '../../assets/fonster.jpg';
import isolering from '../../assets/isolering.jpg';
import altan from '../../assets/altan.jpg';

import badrum_ny from '../../assets/badrum_ny.jpg';
import brygga_ny from '../../assets/Brygga_ny.jpg';
import toalett_ny from '../../assets/toalett_ny.jpg';
import kök_ny from '../../assets/Kök_ny.jpg';

import styled from 'styled-components'
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../../assets/transitions';
import Carousel from 'nuka-carousel';

const Container = styled(motion.div)`
    position: absolute;
    padding-bottom: 2.5rem; 
    margin: 0 auto;
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
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: 100%; 
    max-width: 1000px; 
`

const Inner = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 600; 
    margin-bottom: 10px; 
    @media (max-width: 768px) {
        text-align: center; 
    }
`

const Box = styled.div`
    display: flex; 
    flex-direction: column; 
    width: 400px;
    margin-right: 10px; 
    margin-left: 10px;
    margin-bottom: 20px;  
`

const Image = styled.img`
    width: 300px;
    height: 200px;  
`

const Header = styled.p`
    font-size: 20px;
    font-weight: bold; 
    margin: 0px; 
    padding: 0px;  
`

const Projects = () => {
    return (
        <Container initial={"initial"} animate={"in"} exit={"out"} variants={pageVariants} transition={pageTransition}>
            <Wrapper>
                <Outer>
                    <Inner>
                        <Box className="p1">
                            <img src={badrum_ny} alt="terass" style={{justifySelf: "flexStart", width: "400px", height: "auto"}} />
                        </Box>
                    </Inner>
                    <Inner>
                        <Box className="p2">
                            <img src={toalett_ny} alt="terass" style={{justifySelf: "flexStart", width: "400px", height: "auto"}} />
                        </Box>
                    </Inner>
                    <Inner>
                        <Box className="p3">
                            <img src={kök_ny} alt="terass" style={{justifySelf: "flexStart", width: "400px", height: "auto"}}/>
                        </Box>
                    </Inner>
                    <Inner>
                        <Box className="p4">
                            <img src={brygga_ny} alt="terass" style={{justifySelf: "flexStart", width: "400px", height: "auto"}} />
                        </Box>
                    </Inner>
                    <Inner>
                        <Box className="p5">
                            <img src={altan} alt="terass" style={{justifySelf: "flexStart", width: "400px", height: "auto"}} />
                        </Box>
                    </Inner>
                </Outer>
            </Wrapper>
        </Container>
    );
}

export default Projects; 