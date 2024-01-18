import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../../theme'

export const Welcome: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <SafeAreaView
      className='flex-1'
      style={{ backgroundColor: theme.bgPurple() }}
    >
      <View
        className='flex-1 flex justify-around my-4'>
        <Text
          className='text-white font-bold text-4xl text-center'
        >
          Let`s Get Started!
        </Text>
        <View className='flex-row justify-center'>
          <Image
            style={{ width: 350, height: 350 }}
            source={require('../../assets/images/welcome.png')}
          />
        </View>
        <View className='space-y-4'>
          <TouchableOpacity
            onPress={() => { navigate('SignUp') }}
            className='py-2 bg-[#fdc500] mx-7 rounded-xl'
          >
            <Text className='text-xl font-bold text-center text-black'>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className='flex-row justify-center'>
            <Text className='text-white font-semibold'>Already have an account?</Text>
            <TouchableOpacity onPress={() => { navigate('Login') }}>
              <Text className='font-semibold text-[#fdc500]'> Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
