import React from 'react';
import terass from '../../assets/terass.jpg';
import plank from '../../assets/plank.jpg';
import badrum from '../../assets/badrum.jpg';
import brygga from '../../assets/brygga.jpg';
import bastu from '../../assets/bastu.jpg';
import fonster from '../../assets/fonster.jpg';
import isolering from '../../assets/isolering.jpg';
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
`

const Inner = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 600; 
    margin-bottom: 10px; 
`

const Box = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    width: 300px;
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
                            <Image src={plank} alt="terass" />
                        </Box>
                        <Box className="p2"  >
                            <Header>Terass & Altan</Header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla. </p>
                        </Box>
                    </Inner>
                    <Inner>
                        <Box className="p3">
                            <Image src={badrum} alt="badrum" />
                        </Box>
                        <Box className="p4"  >
                            <Header>Badrum</Header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla. </p>
                        </Box>
                    </Inner>
                    <Inner>
                        <Box className="p5">
                            <Image src={brygga} alt="brygga" />
                        </Box>
                        <Box className="p6"  >
                            <Header>Brygga</Header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla. </p>
                        </Box>
                    </Inner>
                    <Inner>
                        <Box className="p7">
                            <Image src={bastu} alt="bastu" />
                        </Box>
                        <Box className="p8"  >
                            <Header>Bastu</Header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla. </p>
                        </Box>
                    </Inner>
                    <Inner>
                        <Box className="p9">
                            <Image src={fonster} alt="fonster" />
                        </Box>
                        <Box className="p10"  >
                            <Header>Fönster</Header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla. </p>
                        </Box>
                    </Inner>
                    <Inner>
                        <Box className="p11">
                            <Image src={isolering} alt="isolering" />
                        </Box>
                        <Box className="p12"  >
                            <Header>Isolering</Header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla. </p>
                        </Box>
                    </Inner>
                </Outer>
            </Wrapper>
        </Container>
    );
}

export default Projects; 