import React from "react";
import { View } from "react-native";
import SecondPlayer from "../components/viewComponents/SecondPlayer";
import ThirdPlayer from "../components/viewComponents/ThirdPlayer";



export default function TreePlayers(){

    return(
        <View style={{alignContent: "space-around", justifyContent: "space-around"}}>
            <View style={{transform: [{rotate: "180deg"}]}}>
                <SecondPlayer/>
            </View>
            <View style={{flexDirection: "row"}}>
                <View style={{transform: [{rotate: "90deg"}]}}>
                    <ThirdPlayer/>
                </View>
                <View style={{transform: [{rotate: "270deg"}]}}>
                    <ThirdPlayer/>
                </View>
            </View>
        </View>
    )
}