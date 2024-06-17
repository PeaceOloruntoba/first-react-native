import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Link } from 'expo-router';

export default function index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: 'blue' }}>
        where it all began
      </Link>
    </View>
  );
}
