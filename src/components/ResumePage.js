import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from '../subComponents/ParticleComponent'
import cv from '../assets/cv/cv.pdf'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`
const Container = styled.div`
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;
display: flex;
flex-direction: column;
align-items: center;
z-index: 2;
`
const IframeContainer = styled.div`
top: 5rem;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: rgba(0, 0, 0, 0.05);

iframe {
    width: 90%;
    height: 90vh;
    border: none;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
`
const ResumePage = () => {
    const [numbers, setNumbers] = useState(0)

    useEffect(() => {
        let num = (window.innerHeight - 70)/30
        setNumbers(parseInt(num))
    }, [])

    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <ParticleComponent theme='light' />
                <Container>
                    <LogoComponent />
                    <SocialIcons />
                    <IframeContainer>
                        <iframe src={cv}/>
                    </IframeContainer>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default ResumePage
