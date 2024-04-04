import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuth } from "../../hooks/Auth";

export const Home: React.FC = () => {
  const {signOut} = useAuth()

  const handleLogout = async (): Promise<any> => {
    // await signOut(auth)
  };
  return (
    <SafeAreaView className="flex-1 flex-row items-center justify-center">
      <Text className="text-black text-xl">Home Page - </Text>
      <TouchableOpacity
        onPress={signOut}
        className="bg-[#FF0000] rounded-xl p-2"
      >
        <Text className="text-white text-xl">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
