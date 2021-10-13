import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {TouchableOpacityProps} from 'react-native'
import Discord from '../../assets/discord.svg'
import { ButtonContainer,  SvgContainer, TextButton, TextContainer} from './styled'

type Props = TouchableOpacityProps &
{
    texto: String
}
export default function ButtonIcon({texto, ...rest}:Props) 
{
    const navigation = useNavigation()
    return (
        <ButtonContainer {...rest} onPress={()=> navigation.navigate("Home")}>
                <SvgContainer>
                    <Discord width={30} height={30}/>
                </SvgContainer>
                <TextContainer>
                    <TextButton>
                       {texto}
                    </TextButton>
                </TextContainer>
        </ButtonContainer>
    )
}
