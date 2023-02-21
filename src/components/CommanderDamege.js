import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import commander from "../images/commander.png"

export default function CommanderDamege(props){

    const width = props.width
    const height = props.height/0.5

    return(
        <View>
            <TouchableOpacity style={{alignItems: "center", marginTop: height/25}}>
                <Text>{props.namePlayer}</Text>
                <Image style={{width: width/6, height: width/6, resizeMode: "stretch"}} source={commander}/>
            </TouchableOpacity>
        </View>
    )
}