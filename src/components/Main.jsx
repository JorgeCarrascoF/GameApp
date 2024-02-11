import React, { useState, createContext, useEffect } from "react";
import { View } from "react-native";
import Constants from "expo-constants";
import GamesList from "./GamesList";
import AppBar from "./AppBar";
import Tools from "./Tools";
import NewGameForm from "./NewGameForm";
import { Route, Routes } from "react-router-native";
import GamePage from "./GamePage";
import tabletopGames from "../data/games";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DiceRoller from "./DiceRoller";
import TurnSelector from "./Turns";
import TeamDivision from "./Teams";
import PointTracker from "./PointsTracker";

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
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <View
      style={{
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#FFFFFF",
        height: "100%",
        zIndex: 0,
      }}
    >
      <GamesContext.Provider value={{ gamesData, setGamesData }}>
        <AppBar></AppBar>
        <Routes>
          <Route path="/" exact Component={GamesList} />
          <Route path="/tools" exact Component={Tools} />
          <Route path="/game/:id" exact Component={GamePage} />
          <Route path="/newgame" exact Component={NewGameForm} />
          <Route path="/rolldice" exact Component={DiceRoller} />
          <Route path="/turns" exact Component={TurnSelector} />
          <Route path="/teams" exact Component={TeamDivision} />
          <Route path="/points" exact Component={PointTracker} />
        </Routes>
      </GamesContext.Provider>
    </View>
  );
};

export default Main;
