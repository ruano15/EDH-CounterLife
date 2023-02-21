import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import plus from "../images/plus.png"
import minus from "../images/minus.png"

export default function AlterLife(props){

    const width = props.width/6
    const height = props.height/1.5

    return(
        <View style={{width: width, height: height, justifyContent: "space-around", alignItems: "center"}}>
            <TouchableOpacity>
                <Image source={plus} style={{width: props.width/8, height: props.width/8}}/>
            </TouchableOpacity>
            <Text style={{fontSize: props.width/8, color: "#000000"}}>{props.quantity}</Text>
            <TouchableOpacity>
                <Image source={minus} style={{width: props.width/8, height: props.width/8}}/>
            </TouchableOpacity>
        </View>
    )
}