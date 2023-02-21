import React from "react";
import { View } from "react-native";
import SecondPlayer from "../components/viewComponents/SecondPlayer";



export default function TwoPlayers(){

    return(
        <View style={{alignContent: "space-around", justifyContent: "space-around"}}>
            <View style={{transform: [{rotate: "180deg"}]}}>
                <SecondPlayer/>
            </View>
            <SecondPlayer/>
        </View>
    )
}