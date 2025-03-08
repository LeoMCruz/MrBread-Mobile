import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TopButton } from "../buttons/styles";

export default function Logout(){
    return(
        <TopButton>
            <MaterialIcons name="logout" size={27} color="#f3f5fb" />
        </TopButton>
    );
}