import React from 'react'
import { View, Text } from 'react-native'
import { ServerType } from '../../data/servers'
import {Container, ImageContainer, Owner, Server, Wrapper} from './styled'

const uri = 'https://github.com/kakidiakoafonso.png'


export default function ServerItens(Dados:ServerType) 
{
    return (
        <Container activeOpacity={0.7}>
            <ImageContainer 
                source={{ uri: Dados.img }}
                resizeMethod='resize'
                resizeMode='stretch'
            />
            <Wrapper>
                <Server>{Dados.slogan}</Server>
                <Owner>{Dados.nome}</Owner>
            </Wrapper>
        </Container>
    )
}
