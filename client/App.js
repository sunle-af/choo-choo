import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomePage from './src/userAuth/welcomePage';
import RegisterPage from './src/userAuth/register';
import LoginPage from './src/userAuth/login';

import LandingPage from './src/landing/landingPage';
import AddMoneyPage from './src/deposit/addMoney';

import TestPage from './src/landing/test';
import DashboardPage from './src/landing/Dashboard';
import { HeaderBackButton } from '@react-navigation/elements';

const RootStack = createStackNavigator (
  
  {
  WelcomePage: {
        screen: WelcomePage, 
        navigationOptions: {
            header:()=> false,
        },
    }, 
    RegisterPage:{
      screen:RegisterPage,
      navigationOptions:{
        header:()=>false
      }
    },
    LoginPage:{
      screen:LoginPage,
      navigationOptions:{
        header:()=>false
      }
    },
    LandingPage:{
      screen:LandingPage,
      navigationOptions:{
        title: 'QR CODE',
        headerLeft: () => (
          <HeaderBackButton
              onPress={() => navigation.navigate('AddMoneyPage')}
              tintColor="white"
            />
        ),
        headerStyle: {
          backgroundColor: '#18252D',
        },
        headerTintColor: 'white',
      }
    },
    AddMoneyPage:{
      screen:AddMoneyPage,
      navigationOptions:{
        header:()=>false
      }
    },
    TestPage:{
      screen:TestPage,
      navigationOptions:{
        header:()=>false
      }
    },
    DashboardPage:{
      screen:DashboardPage,
      navigationOptions:{
        header:()=>false
      }
    },
}, 
{
    initialRouteName:'DashboardPage',
}, 
)

const  AppContainer  = createAppContainer(RootStack);
 
export default class  App extends React.Component{ 
  render(){
        return <AppContainer />
    }
} 