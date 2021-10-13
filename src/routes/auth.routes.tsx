import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/Splash'
import Home from '../screens/Home'


const { Navigator,Screen} = createNativeStackNavigator()
export default function Authroutes() 
{
    return (
        <Navigator screenOptions={{ headerShown:false }}>
            <Screen name="Splash" component={Splash}/>
            <Screen name="Home" component={Home}/>
        </Navigator>
    )
}
