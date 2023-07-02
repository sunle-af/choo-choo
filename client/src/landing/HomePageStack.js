import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import CardsComponets from '../components/cards'
import { NavigationContainer } from '@react-navigation/native'
const HomePageStack = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center', }}>
    <CardsComponets />
    <View style={{   flex:1, margin:5,width:'100%',
          alignItems:'center',}}>
            <Text style={{textAlign:'center',fontWeight:'600'}}>SCAN QR</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate("LandingPage") }>
                        <Image style={{resizeMode:'contain',height:'80%',}} source={require('../../assets/images/qrButton.png')} />
                    </TouchableOpacity> 
            </View>
    </View>
  )
}
export default HomePageStack
 