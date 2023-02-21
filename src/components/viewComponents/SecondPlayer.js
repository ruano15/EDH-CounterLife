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

export default function SecondPlayer(props){

    const widthComponents = Width()/1.2
    const heightComponents = Heigth()/2

    const [life, setLife] = useState(40)
    const [name, setName] = useState("P1")

    return(
        <View style={{marginTop: 10, minWidth: widthComponents, minHeight: heightComponents}}>
            <View style={{flexDirection: "row"}}>
                <AlterLife quantity={1} width={widthComponents} height={heightComponents}/>
                <Life width={widthComponents} height={heightComponents} life={life} name={name}/>
                <AlterLife quantity={5} width={widthComponents} height={heightComponents}/>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-around", height: heightComponents/12, alignItems: "center"}}>
                <StateButton width={widthComponents} height={heightComponents} imagem={bencao}/>
                <CounterButton width={widthComponents} height={heightComponents} imagem={commander}/>
                <CounterButton width={widthComponents} height={heightComponents} imagem={veneno}/>
                <StateButton width={widthComponents} height={heightComponents} imagem={monarch}/>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-around", height: heightComponents/8, alignItems: "center"}}>
                <CommanderDamege width={widthComponents} height={heightComponents} namePlayer={name}/>
            </View>
        </View>
    )
}