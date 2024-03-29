/*This is an Example of SearchBar in React Native*/
import * as React from 'react';
import { View, StyleSheet, FlatList, Platform, UIManager, Modal  } from 'react-native';
import { Thumbnail, Button, Left, Right, Body, Icon, Text, Container, Header, Content, List, ListItem,  } from 'native-base';
import { SearchBar, CheckBox } from 'react-native-elements';
import AllDish from '../data/AllDish';
 
export default class App extends React.PureComponent {
  static navigationOptions = {
    tabBarIcon:({ tintColor}) => {
        return <Icon name='bars' type='FontAwesome5' style={{color: tintColor}} />
    }
}
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      item: AllDish,
      dataBackup: AllDish,
      isLoading: false,
      page: 1,
      seed: 1,
      refreshing: false,
      status: false,
      rice: false,
      pasta: false,
      pizza: false,
      drinks: false,
      sandwiches: false,
      salad: false,
      modalVisible: false,

    };
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  openModal =() => {
    this.setState({modalVisible: true});
  }
  closeModal =() => {
    this.setState({modalVisible: false});
  }
  cancelModal = () => {
    this.setState({
      rice: false,
      pasta: false,
      pizza: false,
      drinks: false,
      sandwiches: false,
      salad: false,
      item: AllDish
    })
    this.setState({modalVisible: false});
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
  checkRice = () => {
    var group = "ricemeal";
    var filterData = this.state.dataBackup;
    filterData = this.state.dataBackup.filter(item => {
      if(item.filter == group){
        return item;
      }
    });
    this.setState({
      rice: !this.state.rice,
    })
    if(this.state.rice == false){
      this.setState({
        item: filterData,
        pasta: false,
        pizza: false,
        drinks: false,
        sandwiches: false,
        salad: false,
      })
    } else {
      this.setState({
        item: AllDish
      })
    }
  }
  checkPasta = () => {
    var group = "pasta";
    var filterData = this.state.dataBackup;
    filterData = this.state.dataBackup.filter(item => {
      if(item.filter == group){
        return item;
      }
    });
    this.setState({
      pasta: !this.state.pasta,
    })
    if(this.state.pasta == false){
      this.setState({
        item: filterData,
        rice: false,
        pizza: false,
        drinks: false,
        sandwiches: false,
        salad: false,
      })
    } else {
      this.setState({
        item: AllDish
      })
    }
  }
  checkPizza = () => {
    var group = "pizza";
    var filterData = this.state.dataBackup;
    filterData = this.state.dataBackup.filter(item => {
      if(item.filter == group){
        return item;
      }
    });
    this.setState({
      pizza: !this.state.pizza
    })
    if(this.state.pizza == false){
      this.setState({
        item: filterData,
        pasta: false,
        rice: false,
        drinks: false,
        sandwiches: false,
        salad: false,
      })
    } else {
      this.setState({
        item: AllDish
      })
    }
  }
  checkDrinks = () => {
    var group = "drinks";
    var filterData = this.state.dataBackup;
    filterData = this.state.dataBackup.filter(item => {
      if(item.filter == group){
        return item;
      }
    });
    this.setState({
      drinks: !this.state.drinks,
    })
    if(this.state.drinks == false){
      this.setState({
        item: filterData,
        pasta: false,
        pizza: false,
        rice: false,
        sandwiches: false,
        salad: false,
      })
    } else {
      this.setState({
        item: AllDish
      })
    }
  }
  checkSalad = () => {
    var group = "salad";
    var filterData = this.state.dataBackup;
    filterData = this.state.dataBackup.filter(item => {
      if(item.filter == group){
        return item;
      }
    });
    this.setState({
      salad: !this.state.salad,
    })
    if(this.state.salad == false){
      this.setState({
        item: filterData,
        pasta: false,
        pizza: false,
        drinks: false,
        sandwiches: false,
        rice: false,
      })
    } else {
      this.setState({
        item: AllDish
      })
    }
  }
  checkSandwiches = () => {
    var group = "sandwiches";
    var filterData = this.state.dataBackup;
    filterData = this.state.dataBackup.filter(item => {
      if(item.filter == group){
        return item;
      }
    });
    this.setState({
      sandwiches: !this.state.sandwiches,
    })
    if(this.state.sandwiches == false){
      this.setState({
        item: filterData,
        pasta: false,
        pizza: false,
        drinks: false,
        rice: false,
        salad: false,
      })
    } else {
      this.setState({
        item: AllDish
      })
    }
  }
  renderItem(item) {
    return (
    <View>
      <List style={{backgroundColor: "white"}}>
        <ListItem thumbnail style={{marginBottom: 5}} button onPress={()=>this.props.navigation.navigate(item.navi)}>
          <Left>
            <Thumbnail square source={item.image} />
          </Left>
          <Body>
            <Text style={{fontWeight: "bold"}}>{item.name}</Text>
            <Text>Php {item.price}</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="angle-right" type="FontAwesome" />
            </Button>
          </Right>
        </ListItem>
      </List>
    </View>
    );
  }
  render() {
    return (
      //ListView to show with textinput used as search bar
      <Container style={styles.viewStyle}>
        <Header>
          <View style={{flex: 1, flexDirection: "row", backgroundColor: "#3f48cc"}}>
            <View style={{flex: 4}}>
              <SearchBar
                round
                autoFocus={false}
                containerStyle= {{backgroundColor: 'transparent', borderWidth: 0, borderBottomColor: 'transparent', borderTopColor:'transparent'}}
                inputContainerStyle = {{backgroundColor: '#ffffff'}}
                searchIcon= {{size: 24, color: 'black'}}
                inputStyle= {{color: 'black'}}
                placeholder="Search dishes here..."
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
            </View>
            <View>
              <Button style={{flex:1, justifyContent: "center", alignSelf:"center",}} transparent onPress={this.openModal}><Text style={{color:"white"}}>Filter</Text></Button>
            </View>
          </View>
        </Header>
        <Content>
          <View style={{flex: 1}}>
            <Modal
              visible= {this.state.modalVisible}
              animationType={'fade'}
              onRequestClose={()=> this.closeModal}
            >
              <View style={{marginLeft: 25, marginTop: 20}}>
                <Text style={{fontSize: 24}}>Categories :</Text>
              </View>

              <View style={{flexDirection: "column", flexWrap: "wrap", justifyContent: "center"}}>
                <CheckBox title="Rice Meals" checked={this.state.rice} onPress={this.checkRice}/>
                <CheckBox title="Pasta/Noodles" checked={this.state.pasta} onPress={this.checkPasta}/>
                <CheckBox title="Pizza" checked={this.state.pizza} onPress={this.checkPizza}/>
                <CheckBox title="Sandwiches" checked={this.state.sandwiches} onPress={this.checkSandwiches}/>
                <CheckBox title="Salad/Dessert" checked={this.state.salad} onPress={this.checkSalad}/>
                <CheckBox title="Drinks" checked={this.state.drinks} onPress={this.checkDrinks}/>
              </View>
              <View style={{margin: 20, flexDirection: "row", justifyContent: "space-evenly"}}>
                <Button danger onPress={this.cancelModal}>
                  <Text>Cancel</Text>
                </Button>
                <Button onPress={this.closeModal}>
                  <Text>Apply Filter</Text>
                </Button>
              </View>
            </Modal>
          </View>
          <FlatList
          data={this.state.item.sort((a,b) => a.name.localeCompare(b.name))}
          //Item Separator View
          enableEmptySections={true}
          style={{ marginTop: 10, padding: 10, backgroundColor: '#dfdfdf' }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => this.renderItem(item)}
        // Single Comes here which will be repeatative for the FlatListItems          
          />
        </Content>
      </Container>
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