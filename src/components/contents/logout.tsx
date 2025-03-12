import React, { useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TopButton } from "../buttons/styles";
import { AuthContext } from "../../context/auth";

export default function Logout(){
    const {logout } = useContext(AuthContext);

    async function handleLogout() {
        await logout();
    }
    return(
        <TopButton onPress={handleLogout}>
            <MaterialIcons name="logout" size={27} color="#f3f5fb"/>
        </TopButton>
    );
}