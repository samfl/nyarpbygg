import React from 'react';
import styled from 'styled-components'

const Container = styled.footer`
    position: fixed;
    bottom: 0;
    padding: 1rem; 
    height: 2.5rem;
`

const Footer = () => {
    return (
        <Container >
            <small>
                <a href="https://www.google.com/maps/place/V%C3%A4ttergatan+25C,+564+32+Bankeryd/@57.8582882,14.1329079,17z/data=!3m1!4b1!4m5!3m4!1s0x465a693528155a1d:0x1d019fed1ecf9879!8m2!3d57.8582882!4d14.1350966" target="_blank" rel="noopener noreferrer">
                    NYARP BYGG AB, Bankeryd
                </a>
            </small>
            <br />
            <small>
                © 2021 
            </small>
        </Container>
    );
}

export default Footer; 