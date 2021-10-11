import styled from 'styled-components/native'
import {theme} from '../../global/style/theme'


export const Container = styled.View`
flex: 1;
background-color: ${theme.colors.secondary90};
justify-content:center;
align-items: center;
`;

export const Banner = styled.ImageBackground`
width: 100%;
height: 330px;
margin-bottom: 80px;
`;


export const Slogan = styled.View`
width: 100%;
margin-bottom: 30px;
position: absolute;
bottom: -90px;
justify-content:center;
align-items: center;
`;
export const H1 = styled.Text`
color: ${theme.colors.heading};
font-size: 40px;
`;

export const Texto = styled.Text`
color: ${theme.colors.heading};
font-size: 15px;
`;
export const ButtonContainer = styled.TouchableOpacity`
background-color: red;
width: 80%;
height: 60px;
border-radius: 10px;
flex-direction: row;
margin-top: 20px;
`;
export const SvgContainer = styled.View`
width: 25%;
height: 100%;
border-right-width: 2px;
border-right-color: ${theme.colors.line};
`;
export const TextContainer = styled.View`
width: 75%;
height: 100%;
justify-content: center;
align-items: center;
`;
export const TextButton = styled.Text`
color: ${theme.colors.heading};
font-size: 18px;
`;