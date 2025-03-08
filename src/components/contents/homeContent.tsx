import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import { PublicContent, Wrapper } from "../views/styles";
import { CardMyClients, CardOrder, CardProducts, CardCrateClient, CardMyOrders, CardServices, CardConfig } from "../cards/cards";

export default function HomeContent(){
    const {user} = useContext(AuthContext);
    // const navigation = useNavigation<AppNavigationProp>();
    const [isVisible, setIsVisible] = useState(false);
    const [apiResponse, setApiResponse] = useState("");
    const [loading, setLoading] = useState(false);

    return(
        <PublicContent ySize={80}>
            <Wrapper>
                <CardOrder/>
                <CardMyOrders/>
                <CardProducts/>
                <CardServices/>
                <CardCrateClient/>
                <CardMyClients/>
                <CardConfig/>
            </Wrapper>
        </PublicContent>
    );
}