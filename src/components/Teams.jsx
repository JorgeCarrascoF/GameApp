import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const TeamDivision = () => {
  const [players, setPlayers] = useState("");
  const [teams, setTeams] = useState(2);
  const [teamList, setTeamList] = useState([]);
  const [teamsDivided, setTeamsDivided] = useState(false);

  const divideTeams = (players, teams) => {
    setTeamList([]);
    let playersArray = players.split(",");
    let newTeamList = [];
    for (let i = 0; i < teams; i++) {
      let team = [];
      newTeamList.push(team);
    }
    let teamIndex = 0;
    while (playersArray.length > 0) {
      let randPlayer = Math.floor(Math.random() * playersArray.length);
      newTeamList[teamIndex].push(playersArray[randPlayer]);
      teamIndex = (teamIndex + 1) % teams;
      playersArray.splice(randPlayer, 1);
    }
    setTeamList(newTeamList);
    setTeamsDivided(true);
  };

  return (
    <View style={{ alignItems: "center", paddingTop: 40, gap: 10 }}>
      <Text style={{ fontSize: 30, marginBottom: 20, paddingLeft: 15, borderBottomWidth: 1, width: 350, textAlign: 'left', color:'#5899e2', borderColor: '#5899e2' }}>Formar equipos</Text>
      <Text>Introduce los jugadores separados por comas</Text>
      <TextInput
        onChangeText={(e) => {
          setPlayers(e);
        }}
        style={{ borderWidth: 1, paddingLeft: 10, borderRadius: 5, padding: 1, width: 300 }}
      ></TextInput>
      <Text style={{marginTop: 20}}>Número de equipos</Text>
      <TextInput
        inputMode="numeric"
        onChangeText={(e) => {
          setTeams(e);
        }}
        style={{ borderWidth: 1, borderRadius: 5, padding: 1, width: 50 }}
      ></TextInput>
      <TouchableOpacity
        onPress={() => {
          divideTeams(players, teams);
        }}
        style={{
          marginVertical: 20,
          backgroundColor: "#5899e2",
          paddingHorizontal: 10,
          paddingVertical: 8,
          borderRadius: 5,
        }}
      >
        <Text>Dividir</Text>
      </TouchableOpacity>
      {teamsDivided != [] && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 50,
            flexWrap: "wrap",
            paddingHorizontal: 20,
          }}
        >
          {teamList.map((team, index) => {
            return (
              <View key={index}>
                <Text
                  style={{
                    width: 100,
                    paddingLeft: 10,
                    fontSize: 16,
                    fontWeight: "bold",
                    borderBottomWidth: 1,
                    color: '#5899e2',
                    borderColor: '#5899e2',
                    marginBottom: 10,
                }}
                >
                  Equipo {index + 1}
                </Text>
                {team.map((player, index) => {
                  return <Text style={{paddingLeft: 10}} key={index}>{player}</Text>;
                })}
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default TeamDivision;
