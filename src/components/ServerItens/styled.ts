import styled from 'styled-components/native'
import {theme} from '../../global/style/theme'


export const Container = styled.TouchableOpacity`
width: 90%;
height: 70px;
flex-direction: row;
align-items: center;
margin-bottom: 10px;
align-self: center;
`;

export const ImageContainer = styled.Image`
width: 70px;
height: 96%;
`;

export const Wrapper = styled.View`
height: 80%;
justify-content: space-between;
padding-left: 20px;
`; 
export const Server = styled.Text`
color: ${theme.colors.heading};
font-size: 16px;
font-weight: bold;
`; 
export const Owner = styled.Text`
color: ${theme.colors.highlight};
font-size: 13px;
font-weight: bold;
`; 