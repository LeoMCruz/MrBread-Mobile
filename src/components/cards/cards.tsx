import React from "react";
import { Box } from "../views/styles";
import { FakeButton } from "../buttons/styles";
import { AntDesign, Entypo, FontAwesome6, Fontisto, Ionicons, Octicons } from "@expo/vector-icons";
import { CardText } from "../texts/styles";
import { useNavigation } from "@react-navigation/native";
import { AdminNavigationProp } from "../../routes/adminStack";

export function CardOrder(){
    const navigation = useNavigation<AdminNavigationProp>();
    return(
        <FakeButton onPress={() => navigation.navigate("NewOrder")}>
            <Box>
                <AntDesign name="addfile" size={24} color="#4657a1" />
                <CardText>Novo Pedido</CardText>
            </Box>
        </FakeButton>
    );
}

export function CardMyOrders(){
    const navigation = useNavigation<AdminNavigationProp>();
    return(
        <FakeButton onPress={() => navigation.navigate("Orders")}>
            <Box>
                <Fontisto name="file-1" size={24} color="#4657a1" />
                <CardText>Meus Pedidos</CardText>
            </Box>
        </FakeButton>
    );
}

export function CardProducts(){
    const navigation = useNavigation<AdminNavigationProp>();
    return(
        <FakeButton onPress={() => navigation.navigate("Products")}>
            <Box>
                <Ionicons name="bag-outline" size={24} color="#4657a1" />
                <CardText>Meus Produtos</CardText>
            </Box>
        </FakeButton>
    );
}

export function CardServices(){
    const navigation = useNavigation<AdminNavigationProp>();
    return(
        <FakeButton onPress={() => navigation.navigate("Services")}>
            <Box>
                <Entypo name="tools" size={24} color="#4657a1" />
                <CardText>Meus Serviços</CardText>
            </Box>
        </FakeButton>
    );
}

export function CardCrateClient(){
    const navigation = useNavigation<AdminNavigationProp>();
    return(
        <FakeButton onPress={() => navigation.navigate("NewClients")}>
            <Box>
                <AntDesign name="adduser" size={24} color="#4657a1" />
                <CardText>Adicionar Cliente</CardText>
            </Box>
        </FakeButton>
    );
}

export function CardMyClients(){
    const navigation = useNavigation<AdminNavigationProp>();
    return(
        <FakeButton onPress={() => navigation.navigate("Clients")}>
            <Box>
                <FontAwesome6 name="address-book" size={24} color="#4657a1" />
                <CardText>Meus Clientes</CardText>
            </Box>
        </FakeButton>
    );
}

export function CardConfig(){
    const navigation = useNavigation<AdminNavigationProp>();
    return(
        <FakeButton onPress={() => navigation.navigate("Settings")}>
            <Box>
                <Ionicons name="options" size={24} color="#4657a1" />
                {/* <Octicons name="gear" size={24} color="#4657a1" /> */}
                <CardText>Configurações</CardText>
            </Box>
        </FakeButton>
    );
}
