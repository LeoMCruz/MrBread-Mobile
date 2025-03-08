import React, { useContext } from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Orders from "../screens/orders";
import NewOrder from "../screens/newOrder";
import Products from "../screens/products";
import NewProducts from "../screens/newProducts";
import Services from "../screens/screenServices";
import NewServices from "../screens/newServices";
import Settings from "../screens/settings";
import Clients from "../screens/clients";
import NewClients from "../screens/newClient";

export type AdminStackParams = {
  Home: undefined;
  Orders: undefined;
  NewOrder: undefined;
  Products: undefined;
  NewProducts: undefined;
  Services: undefined;
  NewServices: undefined;
  Settings: undefined;
  Clients: undefined;
  NewClients: undefined;
}
export type AdminNavigationProp = NativeStackNavigationProp<AdminStackParams>;
const Stack = createNativeStackNavigator<AdminStackParams>();

export default function AdminStackRoutes(): JSX.Element {
//   const {isAuthenticated} = useContext(AuthContext);

  return (
    <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{ 
            headerShown: true ,
            title: 'Meus Pedidos',
            headerStyle: {
              backgroundColor: '#4657a1',
            },
            headerTintColor: '#f3f5fb',
          }}
        />
        <Stack.Screen
          name="NewOrder"
          component={NewOrder}
          options={{ 
            headerShown: true ,
            title: 'Novo Pedido',
            headerStyle: {
              backgroundColor: '#4657a1',
            },
            headerTintColor: '#f3f5fb',
          }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{ 
            headerShown: true ,
            title: 'Meus Produtos',
            headerStyle: {
              backgroundColor: '#4657a1',
            },
            headerTintColor: '#f3f5fb',
          }}
        />
        <Stack.Screen
          name="NewProducts"
          component={NewProducts}
          options={{ 
            headerShown: true ,
            title: 'Novo Produto',
            headerStyle: {
              backgroundColor: '#4657a1',
            },
            headerTintColor: '#f3f5fb',
          }}
        />
        <Stack.Screen
          name="Services"
          component={Services}
          options={{ 
            headerShown: true ,
            title: 'Meus Serviços',
            headerStyle: {
              backgroundColor: '#4657a1',
            },
            headerTintColor: '#f3f5fb',
          }}
        />
        <Stack.Screen
          name="NewServices"
          component={NewServices}
          options={{ 
            headerShown: true ,
            title: 'Novo Serviço',
            headerStyle: {
              backgroundColor: '#4657a1',
            },
            headerTintColor: '#f3f5fb',
          }}
        />
        <Stack.Screen
          name="Clients"
          component={Clients}
          options={{ 
            headerShown: true ,
            title: 'Meus Clientes',
            headerStyle: {
              backgroundColor: '#4657a1',
            },
            headerTintColor: '#f3f5fb',
          }}
        />
        <Stack.Screen
          name="NewClients"
          component={NewClients}
          options={{ 
            headerShown: true ,
            title: 'Adicionar Cliente',
            headerStyle: {
              backgroundColor: '#4657a1',
            },
            headerTintColor: '#f3f5fb',
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ 
            headerShown: true ,
            title: 'Configurações',
            headerStyle: {
              backgroundColor: '#4657a1',
            },
            headerTintColor: '#f3f5fb',
          }}
        />
    </Stack.Navigator>
  );
}