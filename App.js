import React from "react";
import { SafeAreaView } from "react-native";
import Player from "./src/views/Player";
import SystemNavigationBar from "react-native-system-navigation-bar";
import TwoPlayers from "./src/views/TwoPlayers";
import TreePlayers from "./src/views/TreePlayers";

export default function App(){

  SystemNavigationBar.stickyImmersive()

  return(
    <SafeAreaView style={{borderColor: "#FE00FF", borderWidth: 1, flex: 1, justifyContent: "center"}}>
      {/* <Player playerName={"P1"}/> */}
      {/* <TwoPlayers/> */}
      <TreePlayers/>
    </SafeAreaView>
  )
}