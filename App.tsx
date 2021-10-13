import React from 'react'
import Authroutes from './src/routes/auth.routes'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { theme } from './src/global/style/theme'

export default function App() {
  return (
    <>
    <StatusBar
            backgroundColor={theme.colors.secondary90}
            translucent
            />
    <NavigationContainer>
      <Authroutes/>
    </NavigationContainer>
    </>
  )
}
