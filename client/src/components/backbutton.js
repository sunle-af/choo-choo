import {  Text, TextInput,Alert,Modal,Image, View,StyleSheet,Pressable, TouchableOpacity,Dimensions } from 'react-native';

export default function BackButtonCMP(){
    return(
        <View style={styles.backbuttonView}>
        <Image source={require('../../assets/images/backbutton.png')} style={{width:41,height:41}} /    >
      </View>
    )
}
const styles = StyleSheet.create({
 backbuttonView:{
    width:'80%',
    marginBottom:20,
  },
})