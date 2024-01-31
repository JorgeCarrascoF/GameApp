import React from "react";
import { Text, View } from "react-native";
import Constants from "expo-constants";
import GamesList from "./GamesList";
import AppBar from "./AppBar";
import Account from "./Account";
import Tools from "./Tools";
import NewGame from "./NewGame";
import { Route, Routes, Switch } from "react-router-native";
import Home from "./Home";
import GameItem from "./GameItem";

const Main = () => {
  return (
    <View style={{ paddingTop: Constants.statusBarHeight, backgroundColor: '#FFC0CB', height: '100%', zIndex: 0 }}>
      <AppBar></AppBar>
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/gamelist" exact Component={GamesList}/>
        <Route path="/tools" exact Component={Tools}/>
        <Route path="/account" exact Component={Account}/>
        <Route path="/game/:id" exact Component={GameItem}/>
        <Route path="/newgame" exact Component={NewGame}></Route>
      </Routes>
    </View>
  );
};

export default Main;
