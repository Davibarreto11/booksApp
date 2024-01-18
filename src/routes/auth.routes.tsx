import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome } from '../pages/Welcome'
import { SignUp } from '../pages/SignUp'
import { Login } from '../pages/Login'

const Auth = createNativeStackNavigator()

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator initialRouteName='Welcome'>
      <Auth.Screen name='Welcome' options={{ headerShown: false }} component={Welcome}/>
      <Auth.Screen name='SignUp' options={{ headerShown: false }} component={SignUp}/>
      <Auth.Screen name='Login' options={{ headerShown: false }} component={Login}/>
    </Auth.Navigator>
  )
}

export default AuthRoutes
