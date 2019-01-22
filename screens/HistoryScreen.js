import React from 'react';
import { ScrollView, StyleSheet, FlatList, Text, View, Dimensions } from 'react-native';
import ajax from 'app/service/FetchData';
import { db } from 'app/service/config';
import { Font } from 'expo';

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
      this.setState({ isFetching: false });
    }

    constructor(props){
        super(props)
        this.state = {
          isFetching: false,
          exampleData: [
            {name: 'IC/Passport'},
            {name: 'Bank Statement'},
            {name: 'Others'},
          ]
        }
      }

      onRefresh() {
       this.setState({ isFetching: true }, function() { this.componentDidMount() });
    }

    render() {
      const ID_type =['IC','PASSPORT','BANK STATEMENT','OTHER DOCUMENTS'];
      const Bank =['CIMB','MAYBANK','RHB']
      return (
        <View style={styles.container}>
        <FlatList
          style={styles.header}
          horizontal
          data = {this.state.exampleData}
          contentContainerStyle={styles.listView}
          renderItem = {({item}) =>
            <View>
              <Text style={styles.tabs}>{item.name}</Text>
            </View>}
          />
        <FlatList
        onRefresh={() => this.onRefresh()}
        refreshing={this.state.isFetching}
        data={this.state.users}
        keyExtractor={(item, index) => item.captureID}
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
        {ID_type[item.id_type-1]}
        </Text>
        </Text>
        <Text style={styles.name}>
        Bank{"\n"}
        <Text style={styles.userdata}>
        {Bank[item.bank-1]}
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
  listView: {
     flex: 1,
     justifyContent: 'center',
     alignItems:'center'
   },
  header: {
    width:width,
    height:36,
    backgroundColor: '#494949',
  },
  tabs:{
    marginHorizontal:20,
    letterSpacing: -1,
    fontFamily: 'open-sans-semibold',
    color: '#ccc'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  h2text: {
    fontSize: 18,
  },
  name: {
    fontSize: 8,
    width: width/3,
    height: 60,
    justifyContent: 'flex-start',
    paddingTop: 10,
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderRightWidth: 0,
    color:"grey",
    fontFamily: 'open-sans-light'
  },
  userdata: {
    fontSize: 12,
    width: width/3,
    height: 60,
    justifyContent: 'flex-start',
    paddingTop: 10,
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderRightWidth: 0,
    color:"black",
    fontFamily: 'open-sans-semibold'
  },
});
