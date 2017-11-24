import React, {Component} from 'react';
import { StyleSheet, Text, TouchableHighlight,
    View, navigate, Modal,StatusBar, NativeModules } from 'react-native';
import {AppNavigator} from './appData/config/appNavigator'
import NavigationView from './appData/containers/navigationContainer'
import { StackNavigator ,NavigationActions} from 'react-navigation';



import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './appData/config/store.js';
const { StatusBarManager } = NativeModules;




if (require('react-native').Platform.OS === 'ios') {
    navbarPadding = 0;
} else {
    navbarPadding = StatusBarManager.HEIGHT;
    console.log('status bar android: '+StatusBarManager.HEIGHT)
}

if (require('react-native').Platform.OS === 'ios') {
    navbarOffset = 24;
    console.log('status bar ios: '+navbarOffset);
} else {
    navbarOffset = 0;

}

masterNavigateTo=(path)=>{
    masterNavigate.navigate('Splash');
}

export default class App extends React.Component {


    render() {
        console.disableYellowBox = true;
        console.log(navbarPadding);
        console.log(StatusBarManager.HEIGHT)
        return (
            <Provider
                store={store}
            >
                <NavigationView/>
            </Provider>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});