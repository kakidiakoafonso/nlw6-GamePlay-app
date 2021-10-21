import { useNavigation } from '@react-navigation/core'
import { Icon } from 'native-base'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { theme } from '../../global/style/theme'
import { AddButton, Container, ImageContainer, TextContainer, TextContent, TextHi, TextName, TextSlogan } from './styled'

const uri = "https://avatars.githubusercontent.com/u/22997881?v=4"

type Props = {
    handleClick:()=>void
}
export default function Header({handleClick}:Props) 
{
    const nav = useNavigation()
    return (
        <Container>
            <TouchableOpacity onPress={()=>handleClick()}>
                <ImageContainer source={{ uri }}/>
            </TouchableOpacity>

            <TextContainer>
                <TextContent>
                    <TextHi>Olá,</TextHi>
                    <TextName>Kakidiako</TextName>
                </TextContent>
                <TextSlogan>    
                    Hoje é dia de vitória
                </TextSlogan>
            </TextContainer>

            <AddButton onPress={()=> nav.navigate('Agendar')}>
                <Icon type="AntDesign" name="plus"  
                    style={{ color:theme.colors.heading,fontSize:40}}
                    
                    />
            </AddButton>
        </Container>
    )
}
