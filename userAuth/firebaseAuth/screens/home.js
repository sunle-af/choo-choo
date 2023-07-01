import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

import { auth } from '../firebase';
const Home = () => {
    const navigation = useNavigation()
  return (
    <View style={{flex:1,justifyContent:'space-around',alignItems:'center'}}>
      <Text>{auth.currentUser?.email} </Text>
      <Button onPress={()=> auth.signOut().then(()=> navigation.replace("Login"))} title='SIGNOUT' />
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})