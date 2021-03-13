import React from 'react';
import { MdCall, MdEmail } from 'react-icons/md';
import backgroundImage from '../../assets/sb-background.png';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../../assets/transitions';


const Container = styled(motion.div)`
    position: absolute;
    width: 100%;
`
const Wrapper = styled.div`
    margin: 20px;
    flex-direction: column; 
`
const Outer = styled.div`

`
const ContentWrapper = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: row;  
    flex-wrap: wrap;
    justify-content: space-around; 
`
const Box = styled.div`
    display: flex;     
    flex-direction: column; 
    text-align: center; 
    align-items: center; 
    width: 220px;
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
    background-image: url(${backgroundImage});
    border-radius: 100%;
`
const Text = styled.p`
`

const Contact = () => {
    return (
        <Container initial={"initial"} animate={"in"} exit={"out"} variants={pageVariants} transition={pageTransition}>
            <Wrapper>
                <Outer>
                    <ContentWrapper>
                        <Box>
                            <LinkWrapper href="tel:+46769460315">
                                <Item>
                                    <MdCall />
                                </Item>
                            </LinkWrapper>
                            <Text>+46703974756</Text>
                        </Box>
                        <Box>
                            <LinkWrapper href="mailto:rikard.nyarpbygg.se?" target="_blank" rel="noopener noreferrer">
                                <Item>
                                    <MdEmail />
                                </Item>
                            </LinkWrapper>
                            <Text>Rikard@nyarpbygg.se</Text>
                        </Box>
                    </ContentWrapper>
                </Outer>
            </Wrapper>
        </Container>
    );
}

export default Contact; 