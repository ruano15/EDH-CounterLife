import React from "react";
import { Text, TextInput, View } from "react-native";

export default function Life(props){

    const width = props.width/4
    const height = props.height/1.5

    return(
        <View style={{flex: 1, width: width, height: height, alignItems: "center", justifyContent: "space-around"}}>
            <TextInput style={{borderColor: "#000000", borderWidth: 1, borderRadius: 10, width: width * 2.5, textAlign: "center"}} placeholder={props.name}/>
            <Text style={{fontSize: width * 2, color: "#000000"}}>{props.life}</Text>
        </View>
    )
}