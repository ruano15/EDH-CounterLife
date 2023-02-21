import React, { useState } from "react";
import { View } from "react-native";
import AlterLife from "../components/AlterLife";
import { Width, Heigth } from "../api/Dimensions";
import Life from "../components/Life";
import CounterButton from "../components/CounterButton";
import commander from "../images/commander.png"
import veneno from "../images/veneno.png"
import StateButton from "../components/StateButton";
import monarch from "../images/monarch.png"
import bencao from "../images/bencao.png"
import CommanderDamege from "../components/CommanderDamege";
import { Logica } from "../components/logicaComponents/logicaSecondPlayer";

export default function Player(props){

    const widthComponents = Width()
    const heightComponents = Heigth()

    const [life, setLife] = useState(40)
    const [name, setName] = useState(`${props.playerName}`)

    return(
        <View>
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