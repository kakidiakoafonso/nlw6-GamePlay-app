import styled from 'styled-components/native'
import {theme} from '../../global/style/theme'



export const Flex = styled.View`
flex: 1;
background-color: ${theme.colors.overlay};
`;
export const Close = styled.TouchableOpacity`
flex: 0.8;
justify-content: space-around;
align-items: center;
`;
export const Container = styled.View`
flex: 0.2;
justify-content: space-evenly;
align-items: center;
background-color: ${theme.colors.secondary90};
`;


export const WarningContainer = styled.Text`
flex-direction: row;
`;
export const WarningText = styled.Text`
color: ${theme.colors.highlight};
font-size: 17px;
margin-right: 10px;
padding-right: 10px;
font-weight: bold;
`;
export const GameText = styled.Text`
color: ${theme.colors.heading};
font-weight: bold;
font-size: 17px;
margin: 13px;
`;
export const RedText = styled.Text`
color: ${theme.colors.primary};
font-size: 17px;
`;
export const ButtomContainer = styled.View`
width: 90%;
height: 50px;
margin-top: 15px;
border-radius: 4px;
flex-direction: row;
justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
background-color: ${theme.colors.primary};
width: 140px;
height: 100%;
border-radius: 7px;
align-items: center;
justify-content: center;
`;
export const ButtonNo = styled.TouchableOpacity`
border-color: ${theme.colors.secondary30};
border-width: 1px;
width: 140px;
height: 100%;
border-radius: 7px;
align-items: center;
justify-content: center;
`;
export const ButtonText = styled.Text`
font-size: 14px;
color: ${theme.colors.highlight};
font-weight: bold;
`;

