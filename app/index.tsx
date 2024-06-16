import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function index() {
  return (
    <View style={styles.container}>
      <Text>Aora!</Text>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})