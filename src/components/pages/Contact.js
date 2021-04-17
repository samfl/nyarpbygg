import React from 'react';
import { MdCall, MdEmail } from 'react-icons/md';
import { HiMailOpen, HiPhone } from 'react-icons/hi';
import backgroundImage from '../../assets/sb-background.png';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../../assets/transitions';
import nyarp from '../../assets/nb_black_transp_largetext.png';


const Container = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
`
const Wrapper = styled.div`
    margin: 20px;
    flex-direction: column; 
    height: 100%;
`
const Outer = styled.div`
    height: 100%;

`
const Inner = styled.div`
    width: 100%;
    height: 100%;
    display: flex; 
    flex-direction: row;  
    flex-wrap: wrap;
    justify-content: center; 
    align-items: center; 
    margin-bottom: 40px; 
`
const Box = styled.div`
    display: flex;     
    flex-direction: column; 
    text-align: center; 
    align-items: center; 
    width: 220px;
`
const LinkWrapper = styled.a``
const Text = styled.p``

const Contact = () => {
    return (
        <Container initial={"initial"} animate={"in"} exit={"out"} variants={pageVariants} transition={pageTransition}>
            <Wrapper>
                <Outer>
                    <Inner>
                        <Box>
                            <LinkWrapper href="tel:+46769460315">
                                <HiPhone size="40px" className="contact-icon"/>
                            </LinkWrapper>
                            <Text>+46703974756</Text>
                        </Box>
                        <Box>
                            <LinkWrapper href="mailto:rikard.nyarpbygg.se?" target="_blank" rel="noopener noreferrer">
                                <HiMailOpen size="40px" className="contact-icon"/>
                            </LinkWrapper>
                            <Text>rikard@nyarpbygg.se</Text>
                        </Box>
                    </Inner>
                </Outer>
            </Wrapper>
        </Container>
    );
}

export default Contact; 