import React from 'react';
import { ExpoConfigView } from '@expo/samples';


export default class SettingsScreen extends React.Component {
  /* async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('./OpenSans-Bold.tff'),
    });
    this.setState({ fontLoaded: true });
  } */
  static navigationOptions = {
      title: 'Settings',
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
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />
    /* {
        this.state.fontLoaded ? (
          <Text style={{ fontFamily: 'open-sans-bold', fontSize: 56 }}>
            Hello, world!
          </Text>
        ) : null
      } */
  }
}
