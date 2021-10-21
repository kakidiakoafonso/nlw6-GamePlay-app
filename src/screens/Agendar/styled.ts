import { Dimensions } from 'react-native';
import styled from 'styled-components/native'
import {theme} from '../../global/style/theme'

const {height,width} = Dimensions.get('screen')

export const Container = styled.View`
width: ${width+'px'};
height: ${height+'px'};
background-color: ${theme.colors.secondary90};
`;
export const Titulo = styled.Text`
color: ${theme.colors.heading};
font-size: 14px;
font-weight: bold;
margin-left: 3%;
margin-top: 20px;
`;

export const ServerButton = styled.TouchableOpacity`
width: 96%;
height: 50px;
border-width: 1px;
align-self: center;
margin-top: 40px;
border-color: ${theme.colors.secondary40};
border-radius: 10px;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`;
export const ImageContainer = styled.View`
width: 60px;
height: 100%;
background-color: ${theme.colors.secondary70};
border-radius: 10px;
border-width: 1px;
border-color: ${theme.colors.secondary40};
`;
export const TextServer = styled.Text`
color: ${theme.colors.heading};
font-weight: bold;
font-size: 14px;
margin-left: 6%;
`;
export const Wrapper = styled.View`
width: 95%;
height: 100px;
align-self: center;
flex-direction: row;
justify-content: space-between;
`;
export const ItensWrapper = styled.View`
margin-top: 10px;
width: 45%;
height: 90px;
align-self: center;
justify-content: space-between;
`;
export const Texto = styled.Text`
color: ${theme.colors.highlight};
font-size: 16px;
`;

export const Inputs = styled.TextInput`
border-color: ${theme.colors.secondary40};
background-color: ${theme.colors.secondary80};
border-width: 2px;
border-radius: 8px;
padding-left: 30px;
color: ${theme.colors.highlight};
`;

export const TextContainer = styled.View`
width: 95%;
align-self: center;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 12px;
padding-left: 4px;
padding-right: 4px;
`;


export const TituloDescricao = styled.Text`
color: ${theme.colors.heading};
font-size: 14px;
font-weight: bold;
`;
export const TextArea = styled.TextInput`
border-color: ${theme.colors.secondary40};
background-color: ${theme.colors.secondary80};
border-width: 2px;
font-size: 14px;
font-weight: bold;
width: 95%;
height: 80px;
align-self: center;
margin-top: 6px;
color: ${theme.colors.highlight};
`;

export const ButtonAgendar = styled.TouchableOpacity`
width: 80%;
height: 50px;
background-color: ${theme.colors.primary};
align-self: center;
margin-top: 12px;
border-radius: 8px;
justify-content: center;
align-items: center;
`;

export const TextButtonAgendar = styled.Text`
font-weight: bold;
font-size: 18px;
color: ${theme.colors.highlight};
`; 