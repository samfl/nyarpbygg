import React from 'react';
import terass from '../../assets/terass.jpg';
import badrum from '../../assets/badrum.jpg';
import bathroom from '../../assets/bathroom.jpg';
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
                    <Carousel heightMode='first' style={{marginTop: '-20px', marginBottom: '40px'}}>
                            <img src={badrum} />
                            <img src={bathroom} />
                            <img src={badrum} />
                            <img src={bathroom} />
                            <img src={badrum} />
                    </Carousel>
                    <Inner>
                        <Box className="p1">
                            <Image src={terass} alt="terass" />
                        </Box>
                        <Box className="p2" style={{borderBottom: '1px solid #383838'}}>
                            <Header>Terass & Altan</Header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla. </p>
                        </Box>
                    </Inner>
                    <Inner>
                        <Box className="p3">
                            <Image src={badrum} alt="badrum" />
                        </Box>
                        <Box className="p4" style={{borderBottom: '1px solid #383838'}}>
                            <Header>Badrum</Header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla. </p>
                        </Box>
                    </Inner>
                    <Inner>
                        <Box className="p5">
                            <Image src={brygga} alt="brygga" />
                        </Box>
                        <Box className="p6" style={{borderBottom: '1px solid #383838'}}>
                            <Header>Brygga</Header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla. </p>
                        </Box>
                    </Inner>
                    <Inner>
                        <Box className="p7">
                            <Image src={bastu} alt="bastu" />
                        </Box>
                        <Box className="p8" style={{borderBottom: '1px solid #383838'}}>
                            <Header>Bastu</Header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla. </p>
                        </Box>
                    </Inner>
                    <Inner>
                        <Box className="p9">
                            <Image src={fonster} alt="fonster" />
                        </Box>
                        <Box className="p10" style={{borderBottom: '1px solid #383838'}}>
                            <Header>Fönster</Header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla. </p>
                        </Box>
                    </Inner>
                    <Inner>
                        <Box className="p11">
                            <Image src={isolering} alt="isolering" />
                        </Box>
                        <Box className="p12" style={{borderBottom: '1px solid #383838'}}>
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