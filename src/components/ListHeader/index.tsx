import React from 'react'
import { View, Text } from 'react-native'
import { Container, SubTitulo, Titulo } from './styled'

export default function Listheader() {
    return (
        <Container>
            <Titulo>Partidas agendadas</Titulo>
            <SubTitulo>Total 6</SubTitulo>
        </Container>
    )
}
