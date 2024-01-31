import React from "react";
import { View, Text } from "react-native";
import { Link, useLocation } from "react-router-native";
import StyledText from "./StyledText";

const AppBar = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        height: 40,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        opacity: 1,
        width: "100%",
        position: "absolute",
        bottom: 0,
        zIndex: 1
      }}
    >
      <AppBarTab to="/">Home</AppBarTab>
      <AppBarTab to="/gamelist">Games</AppBarTab>
      <AppBarTab to="/tools">Tools</AppBarTab>
      <AppBarTab to="/account">Account</AppBarTab>
    </View>
  );
};
const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation();
    const active = pathname === to;
  return (
    <Link to={to}>
      <StyledText fontWeight="bold">{children}</StyledText>
    </Link>
  );
};

export default AppBar;
