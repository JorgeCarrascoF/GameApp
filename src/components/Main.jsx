import React, { useState, createContext, useEffect } from "react";
import { View } from "react-native";
import Constants from "expo-constants";
import GamesList from "./GamesList";
import AppBar from "./AppBar";
import Account from "./Account";
import Tools from "./Tools";
import NewGameForm from "./NewGameForm";
import { Route, Routes } from "react-router-native";
import Home from "./Home";
import GamePage from "./GamePage";
import tabletopGames from "../data/games";
import AsyncStorage from "@react-native-async-storage/async-storage";

const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    console.error(e);
  }
}

export const GamesContext = createContext();

const Main = () => {
  const [gamesData, setGamesData] = useState([]);

  const fetchGames = async () => {
    try {
      let data = await AsyncStorage.getItem("games");
      if (data !== null) {
        setGamesData(JSON.parse(data));
      } else {      
        await AsyncStorage.setItem("games", JSON.stringify(tabletopGames));
        setGamesData(tabletopGames);
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(()=>{
    fetchGames();
  },[])

  return (
    <View
      style={{
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#FFC0CB",
        height: "100%",
        zIndex: 0,
      }}
    >
      <GamesContext.Provider value={{ gamesData, setGamesData }}>
        <AppBar></AppBar>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/gamelist" exact Component={GamesList} />
          <Route path="/tools" exact Component={Tools} />
          <Route path="/account" exact Component={Account} />
          <Route path="/game/:id" exact Component={GamePage} />
          <Route path="/newgame" exact Component={NewGameForm}></Route>
        </Routes>
      </GamesContext.Provider>
    </View>
  );
};

export default Main;
