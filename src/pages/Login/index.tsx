import React, { useCallback, useRef, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ArrowLeftIcon } from "react-native-heroicons/solid";

import { Form } from "@unform/mobile";
import { type FormHandles } from "@unform/core";

import { theme } from "../../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../hooks/Auth";

export const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { goBack, navigate } = useNavigation();
  const { user, signIn } = useAuth();

  const handleSignIn = useCallback(async (data: any) => {
    try {
      await signIn({
        email: email,
        password: password,
      });
      console.log(email, password);
    } catch (err) {
      console.log("got error: ", err);
    }
  }, []);
  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: theme.bgPurple() }}
    >
      <SafeAreaView>
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}
            className=" bg-[#fdc500] p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-4"
          >
            <ArrowLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mb-4">
          <Image
            source={require("../../assets/images/login.png")}
            style={{ width: 250, height: 250 }}
          />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-white px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text className="text-black ml-4">Email Address</Text>
          <TextInput
            autoCorrect={false}
            value={email}
            onChangeText={(value) => setEmail(value)}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="E-mail"
            returnKeyType="next"
            className="p-4 bg-[#F5F5F5] text-black rounded-2xl mb-3"
          />
          <Text className="text-black ml-4">Password</Text>
          <TextInput
            className="p-4 bg-[#F5F5F5] text-black rounded-2xl mb-3"
            value={password}
            onChangeText={(value) => setPassword(value)}
            returnKeyType="send"
            secureTextEntry
            placeholder="Senha"
          />
          <TouchableOpacity className="flex items-end mb-5">
            <Text className="text-black">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignIn}
            className="py-3 bg-[#fdc500] rounded-xl"
          >
            <Text className="font-xl text-center text-black font-bold">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Text className="text-xl text-black font-bold text-center py-5">
          Or
        </Text> */}
        {/* <View className="flex-row justify-center space-x-8">
          <TouchableOpacity className="p-2 bg-[#F5F5F5] rounded-2xl">
            <Image
              source={require("../../assets/icons/google.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-[#F5F5F5] rounded-2xl">
            <Image
              source={require("../../assets/icons/apple.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-[#F5F5F5] rounded-2xl">
            <Image
              source={require("../../assets/icons/facebook.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View> */}
        <View className="flex-row justify-center mt-2">
          <Text className="text-black font-semibold">
            Don`t have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigate("SignUp");
            }}
          >
            <Text className="font-semibold text-[#fdc500]"> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
