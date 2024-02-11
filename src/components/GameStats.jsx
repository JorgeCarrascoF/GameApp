import React from "react";
import { View, Text } from "react-native";
import StyledText from "./StyledText";

const GameStats = ({ game }) => {
    return (
      <View style={{ flexDirection: "row", width: '100%', marginTop: 30, justifyContent: "space-around" }}>
        <View style={{fontSize: 16,borderWidth: 2, width: 100, borderColor: '#5899e2', alignItems: 'center', borderRadius: 4}}>
          <Text style={{fontWeight: 'bold', backgroundColor:  '#5899e2', textAlign: 'center', marginTop: -1, marginLeft: -1, paddingHorizontal: 5, paddingVertical: 3, color: 'white', width: '101%'}}>Players</Text>
          <Text style={{marginVertical: 10}}>{game.minPlayers} - {game.maxPlayers} </Text>
        </View>
        <View style={{borderWidth: 2, width: 100, alignItems: 'center', borderColor: '#5899e2', borderRadius: 4}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', backgroundColor:  '#5899e2', textAlign: 'center', marginTop: -1, marginLeft: -1, paddingHorizontal: 5, paddingVertical: 3, color: 'white', width: '102%'}}>Owner</Text>
          <Text style={{marginVertical: 10}}>{game.owner}</Text>
        </View>
      </View>
    );
};

export default GameStats;