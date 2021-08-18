import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FaceBookMsngr from './screens/fbm';
import Instagram from './screens/inst';
import WhatsAppMsngr from './screens/wta';

export default class App extends React.Component{
  render(){
    return(
        <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook_Messenger: {screen: FaceBookMsngr},
  Whatsapp: {screen: WhatsAppMsngr},
  Instagram: {screen: Instagram},
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'left',
  },
  placeHolder: {
    color: "red"
  }
});