import React from "react";
import { View, Image, Text } from "react-native";
import { Link, useLocation } from "react-router-native";
import StyledText from "./StyledText";
const AppBar = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        opacity: 1,
        width: "100%",
        position: "absolute",
        bottom: 0,
        zIndex: 10,
      }}
    >

        <Link to={"/gamelist"}>
          <Image
            source={require("../img/games.png")}
            style={{ width: 30, height: 30 }}
          />
        </Link>
        <Link to={"/tools"}>
          <Image
            source={require("../img/tool.png")}
            style={{ width: 30, height: 30 }}
          />
        </Link>

      {/* <AppBarTab to="/" src="../img/home.png">Home</AppBarTab>
      <AppBarTab to="/gamelist">Games</AppBarTab>
      <AppBarTab to="/tools">Tools</AppBarTab>
      <AppBarTab to="/account">Account</AppBarTab> */}
    </View>
  );
};

export default AppBar;
