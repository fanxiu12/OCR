import React from 'react';
import { Platform,StyleSheet,Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import camera from '../screens/CameraScreen';
import home from '../screens/Home';
import history from '../screens/HistoryScreen';
import settingsscreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: home,
});

HomeStack.navigationOptions = {
  tabBarLabel: <Text style={{fontSize: 9, alignSelf:'center', paddingBottom:5, color:'grey',}}>
  HOME
  </Text>,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const CameraStack = createStackNavigator({
  Camera: camera,
});

CameraStack.navigationOptions = {
  tabBarLabel: <Text style={{fontSize: 9, alignSelf:'center', paddingBottom:5, color:'grey',}}>
  CAMERA
  </Text>,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
    focused={focused}
    name={
      Platform.OS === 'ios'
      ? `ios-information-circle${focused ? '' : '-outline'}`
      : 'md-information-circle'
    }
    />
  ),
};

const HistoryStack = createStackNavigator({
  History: history,
});

HistoryStack.navigationOptions = {
  tabBarLabel: <Text style={{fontSize: 9, alignSelf:'center', paddingBottom:5, color:'grey',}}>
  HISTORY
  </Text>,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: settingsscreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: <Text style={{fontSize: 9, alignSelf:'center', paddingBottom:5, color:'grey',}}>
  SETTINGS
  </Text>,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};


export default createAppContainer(
  createBottomTabNavigator(
    {
      HomeStack,
      CameraStack,
      HistoryStack,
      SettingsStack,
    },
  )
);

const styles = StyleSheet.create({
  label:{
    fontSize: 9,
    alignSelf:'center',
    paddingBottom:5,
    color:'grey',
  },
});
