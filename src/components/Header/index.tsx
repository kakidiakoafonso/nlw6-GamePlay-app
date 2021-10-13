import React from 'react'
import { View, Text } from 'react-native'
import { AddButton, Container, ImageContainer, TextContainer, TextContent, TextHi, TextName, TextSlogan } from './styled'

const uri = "https://avatars.githubusercontent.com/u/22997881?v=4"
export default function Header() 
{
    return (
        <Container>
            <ImageContainer source={{ uri }}/>

            <TextContainer>
                <TextContent>
                    <TextHi>Olá,</TextHi>
                    <TextName>Kakidiako</TextName>
                </TextContent>
                <TextSlogan>    
                    Hoje é dia de vitória
                </TextSlogan>
            </TextContainer>

            <AddButton>
            </AddButton>
        </Container>
    )
}
