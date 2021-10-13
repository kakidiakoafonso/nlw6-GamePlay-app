import styled from 'styled-components/native'
import {theme} from '../../global/style/theme'


// background-color: ${theme.colors.secondary90};
export const Container = styled.View`
width: 100%;
height: 90px;
justify-content: space-between;
align-items: center;
flex-direction: row;
padding-left: 24px;
padding-right: 24px;
`;
export const ImageContainer = styled.Image`
width: 55px;
height: 55px;

border-radius: 8px;
`;
export const AddButton = styled.TouchableOpacity`
width: 55px;
height: 55px;
background-color: ${theme.colors.primary};
border-radius: 8px;
`;

export const TextContainer = styled.View`
width: 50%;
height: 50px;
`;
export const TextContent = styled.View`
width: 100%;
flex-direction: row;
margin-bottom: 8px;
`;
export const TextHi = styled.Text`
color: ${theme.colors.highlight};
font-size: 18px;
font-weight: bold;
margin-right: 5px;
`;
export const TextName = styled.Text`
color: ${theme.colors.heading};
font-size: 18px;
font-weight: bold;
`;
export const TextSlogan = styled.Text`
color: ${theme.colors.highlight};
font-size: 15px;
`;