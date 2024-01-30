import React from "react";
import { FlatList, Text, View } from "react-native";
import tabletopGames from "../data/games";
import GameItem from "./GameItem";

const GamesList = () => {
  return (
    <FlatList
      data={tabletopGames}
      renderItem={({ item: game }) => (
        <GameItem game={game}></GameItem>
      )}
    ></FlatList>
  );
};

export default GamesList;
