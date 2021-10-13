import styled from 'styled-components/native'
import {theme} from '../../global/style/theme'

// ${theme.colors.primary}
export const Container = styled.View`
width: 95%;
height: 110px;
align-self: center;
flex-direction: row;
margin-top: 20px;
`;
export const ScrollCard = styled.ScrollView`
height: 122px;
`;
export const Card = styled.TouchableOpacity`
width: 105px;
height: 120px;
align-self: center;
border-radius: 6px;
border-color: ${theme.colors.secondary60};
border-width: 1.5px;
background-color:  ${theme.colors.secondary80};
margin-right: 8px;
justify-content: space-evenly;
align-items: center;
`;
export const Titulo = styled.Text`
font-size: 15px;
color: ${theme.colors.heading};
font-weight: bold;
`;
