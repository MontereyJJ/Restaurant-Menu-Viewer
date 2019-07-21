/*This is an Example of SearchBar in React Native*/
import * as React from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, Platform, UIManager, Image } from 'react-native';
import { CardItem, Thumbnail, Button, Left, Right, Body, Icon, Card, Text  } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';

import staticRestaurant from '../data/staticRestaurant';
import YeloLaneDish from '../data/YeloLaneDish';
 
export default class App extends React.Component {
  static navigationOptions = {
    tabBarIcon:({ tintColor}) => {
        return <Icon name='bars' type='FontAwesome5' style={{color: tintColor}} />
    }
}
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      item: YeloLaneDish,
      dataBackup: YeloLaneDish,
      isLoading: false,
      page: 1,
      seed: 1,
      refreshing: false
    };
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  filterList = text => {
    var newData = this.state.dataBackup;
    newData = this.state.dataBackup.filter(item => {
      const itemData = item.name.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      query: text,
      item: newData
    });
  };
  
  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <SearchBar
            round
            autoFocus={false}
            containerStyle= {{backgroundColor: '#3f48cc'}}
            inputContainerStyle = {{backgroundColor: '#ffffff'}}
            searchIcon= {{size: 24, color: 'black'}}
            inputStyle= {{color: 'black'}}
            placeholder="Search dishes here"
            placeholderTextColor = "black"
            onChangeText={text => {
              this.filterList(text);
            }}
            onPressCancel={() => {
              this.filterList("");
            }}
            onPress={() => alert("onPress")}
            value = {this.state.query}
          />
          <FlatList
          data={this.state.item}
          //Item Separator View
          enableEmptySections={true}
          style={{ marginTop: 10, padding: 10, backgroundColor: '#dfdfdf' }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
            {
              if(item.category == "Pizza"){
                return <Text>{item.name}</Text>
              }
            }
            // Single Comes here which will be repeatative for the FlatListItems
            
          }
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor:'white',
    marginTop: Platform.OS == 'ios'? 30 : 0
  },
  cardImage:{
    height: 200, 
    width: null, 
    flex: 1
  }
});