import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "react-router-native";
import StyledText from "./StyledText";

const GameCard = ({ game }) => {
  return (
    <View key={game.id} style={styles.container}>
      <Link to={`/game/${game.id}`}>
        <Image
          style={{
            width: "101%",
            aspectRatio: "1/1",
            borderRadius: 4,
            marginBottom: 20,
          }}
          source={{ uri: game.image }}
        ></Image>
      </Link>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          width: "103%",
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          position: "absolute",
          bottom: -1,
          left: -2,
          textAlign: "center",
          padding: 2,
          paddingLeft: 8,
          color: "white",
          backgroundColor: "#5899e2",
        }}
      >
        {game.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "31%",
    margin: 4,
    borderWidth: 3,
    borderColor: "#5899e2",
    borderRadius: 8,
  },
});

export default GameCard;
