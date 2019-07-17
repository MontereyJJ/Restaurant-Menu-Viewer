import React from 'react';
import RestaurantList from './RestaurantList';
import DishList from './DishList';
import { createBottomTabNavigator, createAppContainer, createStackNavigator}  from 'react-navigation'
import PapaHans from './Restaurants/PapaHans';
import Chitos from './Restaurants/Chitos';
import ChitosInfo from './Restaurants/ChitosInfo';
import PapaHansInfo from './Restaurants/PapaHansInfo';
import YeloLane from './Restaurants/YeloLane';
import YeloLaneInfo from './Restaurants/YeloLaneInfo';
import Rma from './Restaurants/Rma';
import RmaInfo from './Restaurants/RmaInfo';
import Buddys from './Restaurants/Buddys';
import BuddysInfo from './Restaurants/BuddysInfo';
import MacDaddys from './Restaurants/Macdaddys';
import MacDaddysInfo from './Restaurants/MacDaddysInfo';

class Main extends React.Component {
    static navigationOptions = {
    }
    render(){
        return(
            <MainNavigator>
            </MainNavigator>
            
        );
    }
}

const MainNavigator = createStackNavigator({
    Restaurants: {
        screen: createBottomTabNavigator({
            Restaurant: RestaurantList,
            Dish: DishList
        }),
        navigationOptions: { header: null }
    },
    PHRestau:{
        screen: createBottomTabNavigator({
            Menu: PapaHans,
            Info: PapaHansInfo
        }),
        navigationOptions: {title: 'Papa Hans',
                            headerStyle: {
                                backgroundColor: '#4050b5',
            
                            },
                            headerTitleStyle: {
                                textAlign: "center",
                                flex: 1,
                                textAlignVertical: 'center'
                            },
                            headerTintColor: "white",
        }
    },
    ChitosR:{
        screen: createBottomTabNavigator({
            Menu: Chitos,
            Info: ChitosInfo
        }),
        navigationOptions: {title: 'Chitos',
                            headerStyle: {
                                backgroundColor: '#4050b5',
            
                            },
                            headerTitleStyle: {
                                textAlign: "center",
                                flex: 1,
                                textAlignVertical: 'center'
                            },
                            headerTintColor: "white",
        }
    },
    YeloR: {
        screen: createBottomTabNavigator({
            Menu: YeloLane,
            Info: YeloLaneInfo
        }),
        navigationOptions: {title: 'Le Maison De Yelo Lane',
                            headerStyle: {
                                backgroundColor: '#4050b5',
            
                            },
                            headerTitleStyle: {
                                textAlign: "center",
                                flex: 1,
                                textAlignVertical: 'center'
                            },
                            headerTintColor: "white",
        }
    },
    RmaR: {
        screen: createBottomTabNavigator({
            Menu: Rma,
            Info: RmaInfo
        }),
        navigationOptions: {title: 'RMA Kitchen',
                            headerStyle: {
                                backgroundColor: '#4050b5',
            
                            },
                            headerTitleStyle: {
                                textAlign: "center",
                                flex: 1,
                                textAlignVertical: 'center'
                            },
                            headerTintColor: "white",
        }
    },
    BuddysR: {
        screen: createBottomTabNavigator({
            Menu: Buddys,
            Info: BuddysInfo
        }),
        navigationOptions: {title: 'Buddy\'s Restaurant',
                            headerStyle: {
                                backgroundColor: '#4050b5',
            
                            },
                            headerTitleStyle: {
                                textAlign: "center",
                                flex: 1,
                                textAlignVertical: 'center'
                            },
                            headerTintColor: "white",
        }
    },
    MacDaddysR: {
        screen: createBottomTabNavigator({
            Menu: MacDaddys,
            Info: MacDaddysInfo
        }),
        navigationOptions: {title: 'Mac Daddy\'s Grilled Burger',
                            headerStyle: {
                                backgroundColor: '#4050b5',
            
                            },
                            headerTitleStyle: {
                                textAlign: "center",
                                flex: 1,
                                textAlignVertical: 'center'
                            },
                            headerTintColor: "white",
        }
    }
});

export default createAppContainer(MainNavigator);