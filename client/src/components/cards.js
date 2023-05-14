import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  Text, View,ImageBackground,Dimensions,StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function CardsComponets({navigation}) {
        
        const ratio = wp(100)/452;
        const[name,setName] = useState('SUBHASH SURYAWANSHI')
        const[balance,setBalance] = useState(1000)
        const[mobileNumber,setMobileNumber] = useState('+81 70 1253 2207')

    return (
                <ImageBackground 
                style=
                {styles.backgroundImage } 
                source={require('../../assets/images/card.png')} 
                >
                <View 
                style={styles.innerView}>
                    <View style={
                        {
                    width:'100%',
                    alignItems:'flex-end',
                    padding:wp(5) ,
                    }
                    }>
                    <Text style={{
                        fontSize:12,  
                        borderBottomWidth:1,
                        letterSpacing:1.5,
                        borderBottomColor:'#FF4242',
                        color:'white'}}>{name}</Text>
                    </View>
                    
                    <View style={{
                    width:'100%',
                    alignItems:'flex-start',
                    }}>
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold',letterSpacing:2,
                        color:'white'}}>¥ {balance}</Text>
                    </View>
                    <View style={{
                    width:'100%',
                    alignItems:'center',
                    bottom:0,
                    position:'absolute'
                    }}>
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold',letterSpacing:2,
                        color:'white'}}>{mobileNumber}</Text>
                    </View>
                </View>
                </ImageBackground>
           
    );
  }
const styles = StyleSheet.create({
    backgroundImage:{
        width:wp(100),
        height: hp(45),
        padding:wp(20),
        justifyContent:'space-around'
      },
      innerView:{
   flex:1,
    padding:wp(1),
    }
})