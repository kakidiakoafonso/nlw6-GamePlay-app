import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { theme } from '../../global/style/theme'
import { Banner, ButtonContainer, Container, H1, Slogan, SvgContainer, TextButton, TextContainer, Texto } from './styled'
import Ilustration from '../../assets/illustration.png'


export default function Splash() {
    return (
        <Container>
            <StatusBar 
            backgroundColor={theme.colors.secondary100}
            translucent
            />
            <Banner source={Ilustration} resizeMode='stretch'>
                <Slogan>
                    <H1>Organize</H1>
                    <H1>suas jogatinas</H1>
                    <H1>facilmente</H1>
                </Slogan>
            </Banner>
            <Texto>Crie grupos pra jogar com os seus games</Texto>
            <Texto>favoritos com os seu amigos</Texto>
            
            <ButtonContainer activeOpacity={0.7}>
                <SvgContainer></SvgContainer>
                <TextContainer>
                    <TextButton>
                        Entrar com discord
                    </TextButton>
                </TextContainer>
            </ButtonContainer>
        </Container>
    )
}
