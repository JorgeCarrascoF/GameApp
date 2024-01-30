import React from 'react';
import {Text, View} from 'react-native';
import Constants from 'expo-constants';
import GamesList from './GamesList';

const Main = ()=> {

    return(
    <View style={{marginTop: Constants.statusBarHeight , flexGrow:1}}>
        <GamesList></GamesList>
    </View>)
}

export default Main;