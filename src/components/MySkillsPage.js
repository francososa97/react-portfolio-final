import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitlte'
import { FaPython, FaNodeJs, FaPhp, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt, FaGithub, FaJava } from 'react-icons/fa'
import { FaAws } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc"
import { SiAmazondynamodb } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiFigma, SiSketch, SiRedis, SiPostgresql, SiOracle, SiGooglecloud, SiMongodb, SiReact, SiAngular, SiVuedotjs, SiGo, SiRust, SiBlazor, SiFlutter, SiKotlin, SiScala, SiAndroid, SiIos, SiDocker, SiKubernetes, SiRedhat } from 'react-icons/si'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
`

const SkillsContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 3rem;
align-items: flex-start;
justify-content: center;
margin-top: 3rem;
`

const SkillCategory = styled.div`
background: rgba(255, 255, 255, 0.1);
padding: 2rem;
border-radius: 10px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
text-align: center;
width: 280px;
`
const SkillTitle = styled.h3`
color: ${props => props.theme.text};
margin-bottom: 1rem;
font-size: 1.5rem;
`
const SkillIcons = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1rem;
justify-content: center;
align-items: center;
font-size: 2.5rem;
color: ${props => props.theme.text};
`
const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <ParticleComponent theme='light' />
                <BigTitle text="Skills" top="5%" left="40%" />

                <SkillsContainer>
                    <SkillCategory>
                        <SkillTitle>Back-end</SkillTitle>
                        <SkillIcons>
                            <FaPython />
                            C#
                            <FaPhp />
                            <FaNodeJs />
                            <FaJava />
                            <SiGo />
                            <SiRust />
                        </SkillIcons>
                    </SkillCategory>
                    
                    <SkillCategory>
                        <SkillTitle>Front-end</SkillTitle>
                        <SkillIcons>
                            <FaHtml5 />
                            <FaCss3Alt />
                            <FaJs />
                            <FaBootstrap />
                            <SiReact />
                            <SiAngular />
                            <SiVuedotjs />
                            <SiBlazor />
                        </SkillIcons>
                    </SkillCategory>

                    <SkillCategory>
                        <SkillTitle>Mobile Applications</SkillTitle>
                        <SkillIcons>
                            <TbBrandReactNative/>
                            <SiAndroid />
                            <SiIos />
                            <SiKotlin />
                            <SiScala />
                            <SiFlutter />
                        </SkillIcons>
                    </SkillCategory>

                    <SkillCategory>
                        <SkillTitle>Tools</SkillTitle>
                        <SkillIcons>
                            <DiVisualstudio />
                            <BiLogoVisualStudio/>
                            <FaGitAlt />
                            <FaGithub />
                        </SkillIcons>
                    </SkillCategory>

                    <SkillCategory>
                        <SkillTitle>UI/UX</SkillTitle>
                        <SkillIcons>
                            <SiFigma />
                            <SiSketch />
                        </SkillIcons>
                    </SkillCategory>

                    <SkillCategory>
                        <SkillTitle>Databases</SkillTitle>
                        <SkillIcons>
                            <SiRedis />
                            <SiAmazondynamodb/>
                            <SiPostgresql />
                            <SiOracle />
                            <SiGooglecloud />
                            <SiMongodb />
                        </SkillIcons>
                    </SkillCategory>

                    <SkillCategory>
                        <SkillTitle>Cloud</SkillTitle>
                        <SkillIcons>
                            <FaAws/>
                            <VscAzure/>
                            <SiGooglecloud />
                        </SkillIcons>
                    </SkillCategory>

                    <SkillCategory>
                        <SkillTitle>Infrastructure</SkillTitle>
                        <SkillIcons>
                            <SiDocker />
                            <SiKubernetes />
                            <SiRedhat />
                            <FaAws/>
                            <VscAzure/>
                        </SkillIcons>
                    </SkillCategory>
                </SkillsContainer>
            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage
