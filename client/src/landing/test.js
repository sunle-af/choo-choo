import { useEffect, useState } from 'react';
import { Text, TextInput, Alert, Modal, Image, View, StyleSheet, Pressable, FlatList, TouchableOpacity, Dimensions, Button, ImageBackground } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { gql } from "@apollo/client";
import { useQuery, useMutation } from "@apollo/client";

const GRAPHQL_URL = 'http://localhost:9000/';

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache()
});

const IMAGE_URI = require('../../assets/images/2.jpg');

export default function TestPage() {
  const [message, setMessage] = useState(null);
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  var id = ''
  const [createUser, { loading, error }] = useMutation(
    gql`
     mutation CreateUserMutation( $input :CreateJobInput!){
   createUser(input: $input) {
      success
      input {
        id
        name
        mobileNumber
      }      
   }
}
  ` , {client});

  const handleCreateUser = () => {
    const input = {
      "id": Date.now(),
      "name": name,
      "mobileNumber": mobileNumber
    };
    createUser({ variables: { input } })
      .then((result) => {
        console.log(result.data.createUser.input)
        alert(result.data.createUser.success)
        setMessage("id "+ result.data.createUser.input.id + " name "+result.data.createUser.input.name +" mobile number "+ result.data.createUser.input.mobileNumber );
      })
      .catch((err) => {
        console.log(err);
        alert(err)
        setMessage('An error occurred while creating the user.');
      });
  };
   
  return (
    <ApolloProvider client={client}>
      <ImageBackground
        blurRadius={5}
        source={IMAGE_URI}
        style={styles.container}
      >
        <View style={{flexDirection:'row', justifyContent:'space-around',alignItems:'center'}}>
          <TextInput placeholder='name' 
              value={name} onChangeText={(text) =>setName(text)}
             placeholderTextColor={'white'} 
          style={{width:'30%', margin:10,  borderWidth:0.5,borderColor:'white',padding:10,borderRadius:10,}}/>  
          
           <TextInput placeholder='mobile number' 
              value={mobileNumber}  onChangeText={(text)=> setMobileNumber(text)}
             placeholderTextColor={'white'} 
          style={{width:'30%', margin:10,  borderWidth:0.5,borderColor:'white',padding:10,borderRadius:10,}}/>  

          <Button title='Press Me' onPress={()=>alert(name +` `+ mobileNumber)} />

        </View>
        <View>
        <TouchableOpacity
          style={styles.btnStyle} onPress={handleCreateUser}
        >
          <Text style={{ color: 'white' }}>POST SOME DUMMY DATA</Text>
        </TouchableOpacity>
        {message!=null?<Text>{message}</Text>:<Text></Text>}
        </View>
      </ImageBackground>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 22,
  },
  btnStyle: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 20,
    borderRadius: 20,
    margin:10,
    backgroundColor: 'rgba(152, 223, 214, 0.1)',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  inputContainer: {
    alignSelf: 'center',
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 50,
  },
  txtInput: {
    padding: 10,
    margin: 10,
    width: "60%",
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 10,
  }
});
