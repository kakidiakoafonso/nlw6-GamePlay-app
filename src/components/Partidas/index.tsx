import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text } from 'react-native'
import Calendario from '../../assets/calendar.svg'
import Player from '../../assets/player.svg'
import { Container, Contents, ImageContent, TextTipo, TextTop, TopContents,
    TextDataInfo, 
    BottomContents,
    TextQtdade,
    BottomLeftContents} from './styled'

const uri = 'https://avatars.githubusercontent.com/u/22997881?v=4'
const tamanho = 15

type Props = 
{
    handleClick: ()=>void
}
export default function Partidas({handleClick}:Props) 
{
    const nav = useNavigation()
    return (
        <Container activeOpacity={0.5}
            onPress={()=>handleClick()}
        >
            <ImageContent source={{uri}}/>
            <Contents>
                <TopContents>
                    <TextTop>Lendarios</TextTop>
                    <TextTipo>Ranqueada</TextTipo>
                </TopContents>
                <TopContents>
                    <TextTipo>Ranqueada</TextTipo>
                </TopContents>
                <TopContents>
                    <BottomLeftContents>
                        <Calendario width={tamanho} height={tamanho}/>
                        <TextDataInfo>Qua 23/06 às 19h00</TextDataInfo>
                    </BottomLeftContents>
                    <BottomContents>
                        <Player width={tamanho} height={tamanho} fill='red'/>
                        <TextQtdade>3</TextQtdade>
                    </BottomContents>
                </TopContents>
            </Contents>
        </Container>
    )
}
