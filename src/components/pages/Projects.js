import React from 'react';
import terass from '../../assets/terass.jpg';
import badrum from '../../assets/badrum.jpg';
import brygga from '../../assets/brygga.jpg';
import bastu from '../../assets/bastu.jpg';
import fonster from '../../assets/fonster.jpg';
import isolering from '../../assets/isolering.jpg';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../../assets/transitions';
import AdaptiveImage from 'react-adaptive-image';

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

const ImageBox = styled.div`
    height: 220px;
    width: 220px;
    border-radius: 100%; 
    @media(min-width: 700px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    @media(min-width: 900px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr)
    }
`

const TextBox = styled.div`
    height: 250px;
    width: 270px;
    margin-left: 30px;
`


const Projects = () => {
    return (
        <Container initial={"initial"} animate={"in"} exit={"out"} variants={pageVariants} transition={pageTransition}>
            <Wrapper>
                <Outer>
                    <Inner>
                        <ImageBox style={{backgroundImage: `url(${terass})`}}></ImageBox>
                        <TextBox>
                            <h2>Terass & Altan</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla. </p>
                        </TextBox>
                    </Inner>
                    <Inner>
                        <ImageBox style={{ backgroundImage: `url(${badrum})`}}></ImageBox>
                        <TextBox>
                            <h2>Badrum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla. </p>
                        </TextBox>
                    </Inner>
                    <Inner>
                        <ImageBox style={{ backgroundImage: `url(${brygga})`}}></ImageBox>
                        <TextBox>
                            <h2>Brygga</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla. </p>
                        </TextBox>
                    </Inner>
                    <Inner>
                        <ImageBox style={{ backgroundImage: `url(${bastu})`}}></ImageBox>
                        <TextBox>
                            <h2>Bastu</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla. </p>
                        </TextBox>
                    </Inner>
                    <Inner>
                        <ImageBox style={{ backgroundImage: `url(${fonster})`}}></ImageBox>
                        <TextBox>
                            <h2>Fönster</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla. </p>
                        </TextBox>
                    </Inner>
                    <Inner>
                        <ImageBox style={{ backgroundImage: `url(${isolering})`}}></ImageBox>
                        <TextBox>
                            <h2>Isolering</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor dui dictum efficitur lacinia. Integer volutpat leo sit amet quam tincidunt, mattis tristique nunc elementum. Ut rutrum turpis nulla. </p>
                        </TextBox>
                    </Inner>
                </Outer>
            </Wrapper>
        </Container>
    );
}

export default Projects; 