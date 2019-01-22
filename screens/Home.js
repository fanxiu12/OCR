import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Text, View, } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerTitleStyle: {
      color: 'white',
      textAlign:"center",
      flex:1
    },
    headerStyle: {
      backgroundColor: '#19191a',
      elevation: null},
    }

    render() {
      return (
        <View>
        <ScrollView style={styles.scrollheader} horizontal={true}>
        <Text style={styles.tabs}>IC</Text>
        <Text style={styles.tabs}>Bank Statements</Text>
        <Text style={styles.tabs}>Others</Text>
        </ScrollView>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    scrollheader: {
      height:36,
      paddingTop: 5,
      backgroundColor: '#494949',
    },
    tabs:{
      letterSpacing: -1,
      paddingHorizontal:50,
      fontFamily: 'open-sans-semibold',
      color: '#9b9aa1'
    }
  });
