import React from 'react'
import { View, Text } from 'react-native'
import { JogadoresProps } from '../../data/Jogadores'
import {Container, Disponivel, ImageBorder, ImageContainer, IndDisponivel, Ocupado, Owner, Server, Wrapper, WrapperContainer} from './styled'

const uri = 'https://github.com/kakidiakoafonso.png'


type Props = {
    nome: string,
    disponibilidade: number,

}
export default function Players({nome,disponibilidade}:Props) 
{
    // console.log(Dados);
    
    return (
        <Container activeOpacity={0.7}>
            <ImageBorder>
            <ImageContainer 
                source={{ uri: uri }}
                resizeMethod='resize'
                resizeMode='stretch'
            />
            </ImageBorder>
            <Wrapper>
                <Server>{nome}</Server>
               {
               disponibilidade==1&&
               <WrapperContainer>
                   <Disponivel/>
                   <Owner>Disponivel</Owner>
               </WrapperContainer>
               }
               {
               disponibilidade==2&&
               <WrapperContainer>
                   <IndDisponivel/>
                   <Owner>Indisponivel</Owner>
               </WrapperContainer>
               }
               {
               disponibilidade==3&&
               <WrapperContainer>
                   <Ocupado/>
                   <Owner>Ocupado</Owner>
               </WrapperContainer>
               }
            </Wrapper>
        </Container>
    )
}
