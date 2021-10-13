import styled from 'styled-components/native'
import {theme} from '../../global/style/theme'


export const Container = styled.View`
width: 90%;
height: 90px;
justify-content: space-around;
flex-direction: row;
align-items: center;
align-self: center;
`;
export const ImageContent = styled.Image`
width: 70px;
height: 80px;
border-radius: 8px;
`;
export const Contents = styled.View`
width: 70%;
height: 90%;
justify-content: space-between;
`;
export const TopContents = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
`;
export const TextTop = styled.Text`
color: ${theme.colors.heading};
font-size: 16px;
font-weight: 800;
`;
export const TextDataInfo = styled.Text`
color: ${theme.colors.heading};
font-size: 11px;
font-weight: 800;
margin-left: 10px;
`;
export const TextTipo = styled.Text`
color: ${theme.colors.highlight};
font-size: 12px;
font-weight: bold;
`;
export const TextQtdade = styled.Text`
color: ${theme.colors.highlight};
font-size: 14px;
font-weight: bold;
`;

export const BottomLeftContents = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`;
export const BottomContents = styled.View`
flex-direction: row;
width: 30px;
justify-content: space-between;
align-items: center;
padding-bottom: 5px;
`;


