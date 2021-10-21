import { Dimensions } from 'react-native';
import styled from 'styled-components/native'
import {theme} from '../../global/style/theme'

const {height,width} = Dimensions.get('screen')

export const Container = styled.View`
width: ${width+'px'};
height: ${height+'px'};
background-color: ${theme.colors.secondary90};
align-items: center;
`;
export const BannerContainer = styled.ImageBackground`
width: 100%;
height: 200px;
justify-content: flex-end;
padding-left: 20px;
padding-bottom: 10px;
`;

export const BannerText = styled.Text`
font-weight: bold;
font-size: 22px;
color: ${theme.colors.heading};
`; 
export const BannerContentText = styled.Text`
font-weight: bold;
font-size: 12px;
color: ${theme.colors.heading};
margin-top: 10px;
`; 

export const FlatList = styled.FlatList`
width: 100%;
`;

export const ScrollContainer = styled.View`
width: 100%;
height: 200px;
`; 