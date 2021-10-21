import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/Splash'
import Home from '../screens/Home'
import Agendar from '../screens/Agendar'
import { theme } from '../global/style/theme'
import Detalhe from '../screens/Detalhe'


const { Navigator,Screen} = createNativeStackNavigator()
export default function Authroutes() 
{
    return (
        <Navigator screenOptions={{ headerShown:false }}>
            <Screen name="Splash" component={Splash}/>
            <Screen name="Home" component={Home}/>
            <Screen name="Agendar" component={Agendar}/>
            <Screen name="Detalhe" component={Detalhe}/>
        </Navigator>
    )
}
