import { useEffect, useState } from 'react';
import {  Text, View,ImageBackground,Dimensions,StyleSheet } from 'react-native';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { auth,app } from '../../firebase';
import { doc, setDoc,updateDoc,getFirestore,getDoc,Timestamp, Firestore } from "firebase/firestore"; 
const db = getFirestore(app);

export default function CardsComponets({navigation}) {
        
        const[name,setName] = useState('')
        const[balance,setBalance] = useState()
        const[mobileNumber,setMobileNumber] = useState('')
        //get Data
        useEffect( ()=>{ 
            const getData=async()=>{
                const myUserDb =  doc(db, "userdata", auth.currentUser.uid);
                try {
                    const docSnap = await getDoc(myUserDb);
                    if (docSnap.exists())
                              {
                                const existingData = docSnap.data().userData || [];
                                console.log(existingData)
                                let size = existingData.length-1;
                                setBalance(existingData[size].balance)
                                setName(`${existingData[size].firstName} ${existingData[size].lastName}`)
                                setMobileNumber(existingData[size].mobileNumber)
                              } 
              
                    else {
                      console.log("Document does not exist!");
                    }
                  } catch (error) {
                    console.error("Error adding data:", error);
                  }
            }
           getData()
        },[] )
    return (
                <ImageBackground 
                resizeMode='contain'
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
                        fontSize:20,
                        fontWeight:'bold',letterSpacing:2,
                        color:'white'}}>¥ {balance}</Text>
                   
                    </View>
                    
                    <View style={{
                    width:'100%',
                    alignItems:'flex-start',
                    }}>
                     <Text style={{
                        fontSize:12,
                        borderBottomWidth:1,
                        letterSpacing:1.5,
                        margin:10,
                        borderBottomColor:'#FF4242',
                        color:'white'}}>{name}</Text>
                        <Text style={{
                        fontSize:20,
                        margin:10,
                        fontWeight:'bold',letterSpacing:2,
                        color:'white'}}>{mobileNumber}</Text>
                    </View>
                 
                </View>
                </ImageBackground>
           
    );
  }
const styles = StyleSheet.create({
    backgroundImage:{
         flex:1,
         width:wp(98),
        justifyContent:'space-around',
        alignItems:'center'
      },
      innerView:{
        justifyContent:'space-around',
        alignSelf:'center',
        width:'70%',
    // padding:wp(1),
    }
})