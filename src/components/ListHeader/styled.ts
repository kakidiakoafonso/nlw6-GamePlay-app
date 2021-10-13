import styled from 'styled-components/native'
import {theme} from '../../global/style/theme'

// ${theme.colors.primary}
export const Container = styled.View`
width: 100%;
padding-left: 20px;
padding-right: 20px;
height: 50px;
align-self: center;
flex-direction: row;
margin-top: 20px;
align-items: center;
justify-content: space-between;
`;
export const Titulo = styled.Text`
color: ${theme.colors.heading};
font-size: 14px;
font-weight: bold;
`;
export const SubTitulo = styled.Text`
color: ${theme.colors.highlight};
font-size: 12px;
font-weight: bold;
`;