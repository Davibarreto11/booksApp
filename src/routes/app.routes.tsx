import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../pages/Home'

const Auth = createNativeStackNavigator()

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator initialRouteName='Welcome'>
      <Auth.Screen name='Home' options={{ headerShown: false }} component={Home}/>
    </Auth.Navigator>
  )
}

export default AuthRoutes
