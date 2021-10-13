import React from 'react'
import { View, Text } from 'react-native'
import { Container, Contents, ImageContent } from './styled'

const uri = 'https://avatars.githubusercontent.com/u/22997881?v=4'
export default function Partidas() 
{
    return (
        <Container>
            <ImageContent source={{uri}}/>
            <Contents>
                
            </Contents>
        </Container>
    )
}
