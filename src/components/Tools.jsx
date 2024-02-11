import React from "react";
import { View, Image, Text } from "react-native";
import { Link } from "react-router-native";

const Tools = () => {
  return (
    <View
      style={{
        height: "95%",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Link to={"/teams"} underlayColor={"transparent"}> 
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Image
            source={require("../img/team.png")}
            style={{ width: 100, height: 100, marginBottom: 5 }}
          />
          <Text style={{ textAlign: "center", fontWeight: 'bold', fontSize: 18 }}>Formar equipos</Text>
        </View>
      </Link>
      <Link to={"/rolldice"} underlayColor={"transparent"}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Image
            source={require("../img/dice.png")}
            style={{ width: 100, height: 100, marginBottom: 5}}
          />
          <Text style={{ textAlign: "center", fontWeight: 'bold', fontSize: 18 }}>Dados</Text>
        </View>
      </Link>
      <Link to={"/turns"} underlayColor={"transparent"}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Image
            source={require("../img/turn.png")}
            style={{ width: 100, height: 100, marginBottom: 5 }}
          />
          <Text style={{ textAlign: "center", fontWeight: 'bold', fontSize: 18 }}>Primer turno</Text>
        </View>
      </Link>
      <Link to={"/points"} underlayColor={"transparent"}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Image
            source={require("../img/points.png")}
            style={{ width: 100, height: 100, marginBottom: 5 }}
          />
          <Text style={{ textAlign: "center", fontWeight: 'bold', fontSize: 18 }}>Puntuaciones</Text>
        </View>
      </Link>
    </View>
  );
};

export default Tools;
