import styled from 'styled-components/native'
import {theme} from '../../global/style/theme'


export const Container = styled.View`
flex: 1;
background-color: ${theme.colors.secondary90};
`;
export const ListContainer = styled.View`
flex: 1;
`;
export const Separador = styled.View`
width: 70%;
height: 0.7px;
background-color: ${theme.colors.secondary40};
align-self: flex-end;
`;
