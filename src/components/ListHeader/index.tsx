import React from 'react'
import { View, Text } from 'react-native'
import { Container, SubTitulo, Titulo } from './styled'

type Props = {
    titulo:string,
    qtd:number
}
export default function Listheader({qtd,titulo}:Props) 
{
    return (
        <Container>
            <Titulo>{titulo}</Titulo>
            <SubTitulo>Total {qtd}</SubTitulo>
        </Container>
    )
}
