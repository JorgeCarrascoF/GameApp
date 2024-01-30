import React from "react";
import { View, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";
import GameStats from "./GameStats";

const GameItem = ({ game }) => {
  return (
    <View key={game.id} style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 4}}>
        <Image
          style={{ width: 48, height: 48, marginRight: 20, borderRadius: 4 }}
          source={{ uri: game.image }}
        ></Image>
        <StyledText fontSize={"heading"} color={"primary"} fontWeight={"bold"}>
          {game.name}
        </StyledText>
      </View>
      <StyledText>{game.description}</StyledText>
      <GameStats game={game}></GameStats>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default GameItem;
