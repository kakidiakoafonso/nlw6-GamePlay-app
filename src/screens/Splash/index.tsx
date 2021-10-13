import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { theme } from '../../global/style/theme'
import { Banner,Container, H1, Slogan, Texto } from './styled'
import Ilustration from '../../assets/illustration.png'
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon'



export default function Splash() 
{
    return (
        <Container>
            
            <Banner source={Ilustration} resizeMode='stretch'>
                <Slogan>
                    <H1>Conecte-se</H1>
                    <H1>e organize suas</H1>
                    <H1>jogatinas</H1>
                </Slogan>
            </Banner>
            <Texto>Crie grupos pra jogar com os seus games</Texto>
            <Texto>favoritos com os seu amigos</Texto>
            
            <ButtonIcon 
                texto={'Entrar com discord'}
                activeOpacity={0.7}
                />
            
        </Container>
    )
}
