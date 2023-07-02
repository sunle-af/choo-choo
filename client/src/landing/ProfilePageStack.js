import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {app , auth} from '../../firebase';
import CardsComponets from '../components/cards'
import { signOut } from 'firebase/auth';
const ProfilePageStack = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center', }}>
    <CardsComponets />
                <View style={{   flex:1,
                margin:5,
                width:'100%',
                alignItems:'center',}}>

                    <View style={{justifyContent:'space-around',
    alignItems:'center',
    padding:wp(3),
    margin:wp(5),
    width:wp(60),
    borderRadius:8,
    backgroundColor:'#1E232C'}}>
    <TouchableOpacity onPress={()=>{ auth.signOut().then(navigation.navigate('WelcomePage')) }}> 
        <Text style={{ fontWeight:'600',
    fontFamily:'Urbanist',
    fontSize:15,
    color:'white'}}>Logout</Text>
                                </TouchableOpacity>
                                
                                </View>
                                <View style={{justifyContent:'space-around',
    alignItems:'center',
    padding:wp(3),
    margin:wp(5),
    width:wp(60),
    borderRadius:8,
    backgroundColor:'#1E232C'}}>
    <TouchableOpacity onPress={()=>navigation.navigate('LandingPage')}> 
        <Text style={{ fontWeight:'600',
    fontFamily:'Urbanist',
    fontSize:15,
    color:'white'}}>SCAN QR</Text>
                                </TouchableOpacity>
                                
                                </View>

            
                </View>
</View>
  )
}

export default ProfilePageStack

const styles = StyleSheet.create({})