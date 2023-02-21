import React, { useState } from "react";
import { View } from "react-native";
import { Heigth, Width } from "../../api/Dimensions";
import AlterLife from "../AlterLife";
import CommanderDamege from "../CommanderDamege";
import CounterButton from "../CounterButton";
import Life from "../Life";
import StateButton from "../StateButton";
import commander from "../../images/commander.png"
import veneno from "../../images/veneno.png"
import monarch from "../../images/monarch.png"
import bencao from "../../images/bencao.png"

export default function ThirdPlayer(props){

    const widthComponents = Width()/3
    const heightComponents = Heigth()/3

    const [life, setLife] = useState(40)
    const [name, setName] = useState("P1")

    return(
        <View style={{marginTop: 10, minWidth: heightComponents, minHeight: widthComponents}}>
            <View style={{flexDirection: "row"}}>
                <AlterLife quantity={1} width={heightComponents} height={widthComponents}/>
                <Life width={heightComponents} height={widthComponents} life={life} name={name}/>
                <AlterLife quantity={5} width={heightComponents} height={widthComponents}/>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-around", height: widthComponents/12, alignItems: "center"}}>
                <StateButton width={heightComponents} height={widthComponents} imagem={bencao}/>
                <CounterButton width={heightComponents} height={widthComponents} imagem={commander}/>
                <CounterButton width={heightComponents} height={widthComponents} imagem={veneno}/>
                <StateButton width={heightComponents} height={widthComponents} imagem={monarch}/>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-around", height: widthComponents/8, alignItems: "center"}}>
                <CommanderDamege width={heightComponents} height={widthComponents} namePlayer={name}/>
            </View>
        </View>
    )
}