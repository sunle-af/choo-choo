import { StyleSheet, Text, View,Image, TouchableOpacity,ScrollView, KeyboardAvoidingView, Alert, Button, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { useState , useEffect} from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { gql } from "@apollo/client";
import { useQuery, useMutation } from "@apollo/client";
const GRAPHQL_URL = 'http://192.168.0.97:3000/graphql';
const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache()
});
const IMAGE_URI = require('../../assets/images/2.jpg');

export default function LandingPage({navigation}){

  let DateObj = new Date();
  let id=DateObj.getTime();
  var day=DateObj.getDate();  
  var month=DateObj.getMonth()+1;  
  var year=DateObj.getFullYear();  
  let currDate = day +":"+ month +":"+year
  let time = DateObj.getHours()+":"+DateObj.getMinutes();

  const[result,setResult] = useState('')

    const {data} = useQuery(
      gql`
        query LatestEntry {
          latestEntry {
            id
            name
            mobileNumber
            cardInUse
            balance
            date
            time
          }
        }
      `,{client}
    )

    // useEffect(() => {
    //   if (!loading && data) {
    //     // Data fetched successfully, do something with it
    //     console.log(data);
    //   }
    // }, [loading, data]);
  
    const getLatestEntryBtnHandler =()=>{
        if(data){
        console.log(data.latestEntry.name)
        alert(data.latestEntry.name)
        }
    }


  const [createStates,{loading,error}] = useMutation(
    gql`
     mutation CreateJourneyStates($input:journeyStatesInput ) {
        createJourneyStates(input: $input) {
          success
          input {
            id
            name
            cardInUse
            mobileNumber
            balance
            date
            time
          }  
        }
}
  ` , {client});

  if(loading) return(
    <View style={styles.container}>
      <Text>Loading.....</Text>
    </View>
    )

    
  const createStatesBtnHandler=()=>{
  
    const input={
        "id":id,
        "name":data.latestEntry.name,
        "mobileNumber":data.latestEntry.mobileNumber,
        "cardInUse":  data.latestEntry.cardInUse==="false"?"true":"false" ,
        "balance": (parseInt(data.latestEntry.balance)-100).toString(),
        "date":currDate,
        "time":time ,
    }
    createStates(
      {variables:{input}}).then(()=>alert('Done')).catch(err=>{console.log(err);  alert(err)}
    )
  }
  return(
    <ApolloProvider client={client}>
            <ImageBackground source={IMAGE_URI} style={{flex:1}}>
                  <View style={styles.container}>
                    <View>
                    <TouchableOpacity style={styles.btnStyle} onPress={getLatestEntryBtnHandler}>
                            <Text style={{ color: 'white' }}>Get latestEntry  </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnStyle} onPress={createStatesBtnHandler}>
                            <Text style={{ color: 'white' }}>Mutation  </Text>
                        </TouchableOpacity>
                        <View style={{margin:30}}>
                              {
                              result!=''?<Text style={{margin:40, color: 'white' }}>{result} </Text>:<Text></Text>
                               }
                        </View>
                    </View>
                  </View>
            </ImageBackground>
    </ApolloProvider>
    )  
}
const styles = StyleSheet.create({
    container:{
      flex:1, 
      justifyContent:'space-around',
      alignItems:'center'
    },
    btnStyle:{
      width:wp(40),
      borderWidth: 1,
      borderColor: 'white',
      padding: 20,
      borderRadius: 20,
      margin:10,
      backgroundColor: 'rgba(152, 223, 214, 0.1)',
      justifyContent: 'space-around',
      alignItems: 'center'
    }
});
 