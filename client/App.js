import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import WelcomePage from './src/userAuth/welcomePage';
import RegisterPage from './src/userAuth/register';
import LoginPage from './src/userAuth/login';

import LandingPage from './src/landing/landingPage';
import AddMoneyPage from './src/deposit/addMoney';

import TestPage from './src/landing/test';
import TestingPage from './src/landing/testing';
const RootStack = createStackNavigator ({
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
        header:()=>false
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
    TestingPage:{
      screen:TestingPage,
      navigationOptions:{
        header:()=>false
      }
    }

}, 
{
    initialRouteName:'LandingPage',
}
)
const  AppContainer  = createAppContainer(RootStack);
export default class  App extends React.Component{
    render(){
        return <AppContainer />
    }
} 