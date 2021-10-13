import React from 'react'
import { Text } from 'react-native'
import { Card, Container, ScrollCard, Titulo } from './styled'
import { categorias } from '../../global/consts/Games'

const tamanho = 60
export default function Lista() 
{
    return (
        <Container>
            <ScrollCard horizontal showsHorizontalScrollIndicator={false}>
                {
                   categorias.map(({Icon,id,titulo})=>(
                        <Card key={id} activeOpacity={0.6}>
                            <Icon width={tamanho} height={tamanho}/>
                           <Titulo>
                               {titulo}
                           </Titulo>
                        </Card>
                    ))
                }
            </ScrollCard>
        </Container>
    )
}
