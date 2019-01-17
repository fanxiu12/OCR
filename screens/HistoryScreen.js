import React from 'react';
import { ScrollView, StyleSheet, FlatList, Text, View, Dimensions } from 'react-native';
import ajax from 'app/service/FetchData';
import { List, ListItem, SearchBar, Button } from "react-native-elements";
import { db } from 'app/service/config';

let itemsRef = db.ref('/users');

var width = Dimensions.get('window').width;

export default class HistoryScreen extends React.Component {
  static navigationOptions = {
      title: 'Capture History',
      headerTitleStyle: {
        color: 'white',
        textAlign:"center",
       },
      headerStyle: {
        backgroundColor: '#19191a',
     elevation: null},
    }

    state = {
      users: []
    }

    async componentDidMount() {
      const users = await ajax.fetchUsers();
      this.setState({users});
    }


  render() {
    const ID_type =['IC','PASSPORT','BANK STATEMENT','OTHER DOCUMENTS'];
    return (
      <View style={styles.container} >
        <Text style={styles.h2text}>
          Slide Bar Goes Here
        </Text>
          <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={{flex:1, flexDirection: 'row', borderWidth: 0}}>
            <Text style={styles.name}>
            Name{"\n"}
              <Text style={styles.userdata}>
              {item.name}
              </Text>
            </Text>
            <Text style={styles.name}>
            ID Type{"\n"}
              <Text style={styles.userdata}>
              {item.id_type}
              </Text>
            </Text>
            <Text style={styles.name}>
            Bank{"\n"}
              <Text style={styles.userdata}>
              {item.bank}
              </Text>
            </Text>
          </View>
          }
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  h2text: {
    fontSize: 18,
  },
  name: {
    width: width/3,
    height: 60,
    justifyContent: 'flex-start',
    paddingTop: 10,
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderRightWidth: 0,
    color:"grey",
  },
  userdata: {
    width: width/3,
    height: 60,
    justifyContent: 'flex-start',
    paddingTop: 10,
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderRightWidth: 0,
    color:"black",
  },


});
