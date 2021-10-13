import styled from 'styled-components/native'
import {theme} from '../../global/style/theme'


export const ButtonContainer = styled.TouchableOpacity`
background-color: red;
width: 80%;
height: 55px;
border-radius: 10px;
flex-direction: row;
margin-top: 20px;
`;
export const SvgContainer = styled.View`
width: 25%;
height: 100%;
border-right-width: 2px;
border-right-color: ${theme.colors.line};
justify-content: center;
align-items: center;
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