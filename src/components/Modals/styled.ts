import styled from 'styled-components/native'
import {theme} from '../../global/style/theme'



export const Flex = styled.View`
flex: 1;
background-color: ${theme.colors.overlay};
`;
export const Close = styled.TouchableOpacity`
flex: 0.1;
justify-content: space-around;
align-items: center;
`;
export const Container = styled.View`
flex: 0.9;
justify-content: space-around;
align-items: center;
background-color: ${theme.colors.secondary90};
`;


export const FlatList = styled.FlatList`
width: 100%;
padding-top: 5px;
`;
export const Line = styled.View`
width: 80px;
height: 3px;
margin-top: 15px;
background-color: ${theme.colors.secondary30};
border-radius: 4px;
`;

