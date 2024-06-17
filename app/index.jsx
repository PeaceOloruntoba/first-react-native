import React from "react";
import { ScrollView, View, Image, Text, StatusBar } from "react-native";
import { Link } from "expo-router";
import { images } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMethod="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
