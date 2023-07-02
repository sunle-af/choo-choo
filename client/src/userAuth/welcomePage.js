import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useFonts } from 'expo-font';
import { useCallback,useEffect } from 'react';
import {app , auth} from '../../firebase';
export default function WelcomePage({navigation}) {
  const [fontsLoaded] = useFonts({
    'Urbanist': require('../../assets/fonts/Urbanist-Regular.ttf'),
  });
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user=>{
      if(user){
          navigation.navigate("MyTabs")
      }
      return unsubscribe
    })
  }, [])
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  

  return (
    <ImageBackground style={styles.container} 
    source={{uri:'https://media.istockphoto.com/id/1208460773/vector/high-speed-trains.jpg?s=612x612&w=0&k=20&c=5LSpJWYpu-q-r8qHZNAGwQbF9AXTFyAFVVVuHcPOok8='}}
    >
      <View style={styles.secondView}>
          <Image style={{width:wp(80),resizeMode:'contain', height:hp(10) }} source={require('../../assets/images/branding.png')} />
            <View style={styles.loginBtn}>
              <TouchableOpacity onPress={()=>navigation.navigate('LoginPage')}> 
                  <Text style={styles.loginTxt}>Login</Text>
              </TouchableOpacity>
            </View>
          <View style={styles.registerBtn}>
            <TouchableOpacity onPress={()=>navigation.navigate('RegisterPage')}>
            <Text style={styles.registerTxt}>Register</Text>
            </TouchableOpacity>
          </View>
         
          </View>
          <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:wp(10)
  },
  secondView:{
    width:wp(80) ,
    height:hp(50) ,
    paddingVertical:hp(5),
    justifyContent:'space-around',
    alignItems:'center',
    borderWidth:1,
    borderColor:'rgba(201, 44, 109, 0.2)',
    backgroundColor:'rgba(240, 238, 237, 0.2)',
    borderRadius:40,
  },
  loginBtn:{
    justifyContent:'space-around',
    alignItems:'center',
    padding:wp(3),
    margin:wp(5),
    width:wp(60),
    borderRadius:8,
    backgroundColor:'#1E232C'
  },
  loginTxt:{
    fontWeight:'600',
    fontFamily:'Urbanist',
    fontSize:15,
    color:'white'
  },
  registerBtn:{
    justifyContent:'space-around',
    alignItems:'center',
    padding: wp(3) ,
    margin: wp(3) ,
    width:wp(60),
    borderRadius:8,
    backgroundColor:'#FFFF',
    borderWidth:1,
    borderColor:'#1E232C'
  },
  registerTxt:{
    fontWeight:'600',
    fontFamily:'Urbanist',
    fontSize:15,
    color:'black'
  },
  geustLink:{
    margin:wp(5),
  },
  geustLinkTxt:{
    borderRadius:10,
    backgroundColor:'#C92C6D',
    padding:10,
    fontFamily:'Urbanist',
    color:'white',
    fontSize:12,
    borderBottomWidth:0.5,
    borderBottomColor:'#609EA2'
  }

});
