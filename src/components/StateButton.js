import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

export default function StateButton(props){

    const width = props.width
    const height = props.height/0.5

    return(
        <View>
            <TouchableOpacity>
                <Image style={{width: width/7, height: width/7, resizeMode: "stretch"}} source={props.imagem}/>
            </TouchableOpacity>
        </View>
    )
}