import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { ArrowLeftIcon } from 'react-native-heroicons/solid'

import { theme } from '../../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'

export const SignUp: React.FC = () => {
  const { goBack, navigate } = useNavigation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (): Promise<void> => {
    if (name && email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (err) {
        console.log('got error: ', err)
      }
    }
  }

  return (
    <View className='flex-1 bg-white' style={{ backgroundColor: theme.bgPurple() }}>
      <SafeAreaView>
        <View className='flex-row justify-start'>
          <TouchableOpacity
            onPress={() => { goBack() }}
            className=' bg-[#fdc500] p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-4'
          >
            <ArrowLeftIcon size={20} color='black'/>
          </TouchableOpacity>
        </View>
        <View className='flex-row justify-center mb-4'>
          <Image
            source={require('../../assets/images/signup.png')}
            style={{ width: 220, height: 180 }}
          />
        </View>
      </SafeAreaView>
      <View
        className='flex-1 bg-white px-8 pt-8'
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className='form space-y-2'>
          <Text className='text-black ml-4'>Full Name</Text>
          <TextInput
            className='p-4 bg-[#F5F5F5] text-black rounded-2xl mb-3'
            value={name}
            onChangeText={(value) => { setName(value) }}
            placeholder='Enter Name'
          />
          <Text className='text-black ml-4'>Email Address</Text>
          <TextInput
            className='p-4 bg-[#F5F5F5] text-black rounded-2xl mb-3'
            value={email}
            onChangeText={(value) => { setEmail(value) }}
            placeholder='Enter Email'
          />
          <Text className='text-black ml-4'>Password</Text>
          <TextInput
            className='p-4 bg-[#F5F5F5] text-black rounded-2xl mb-5'
            secureTextEntry
            value={password}
            onChangeText={(value) => { setPassword(value) }}
            placeholder='Enter Password'
          />
          <TouchableOpacity
            className='py-3 bg-[#fdc500] rounded-xl'
            onPress={handleSubmit}
          >
            <Text className='font-xl text-center text-black font-bold'>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <Text className='text-xl text-black font-bold text-center py-5'>
          Or
        </Text>
        <View className='flex-row justify-center space-x-8'>
          <TouchableOpacity className='p-2 bg-[#F5F5F5] rounded-2xl'>
            <Image source={require('../../assets/icons/google.png')}
              className='w-10 h-10'
            />
          </TouchableOpacity>
          <TouchableOpacity className='p-2 bg-[#F5F5F5] rounded-2xl'>
            <Image source={require('../../assets/icons/apple.png')}
              className='w-10 h-10'
            />
          </TouchableOpacity>
          <TouchableOpacity className='p-2 bg-[#F5F5F5] rounded-2xl'>
            <Image source={require('../../assets/icons/facebook.png')}
              className='w-10 h-10'
            />
          </TouchableOpacity>
        </View>
        <View className='flex-row justify-center mt-2'>
          <Text className='text-black font-semibold'>Already have an account?</Text>
          <TouchableOpacity onPress={() => { navigate('Login') }}>
            <Text className='font-semibold text-[#fdc500]'> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
