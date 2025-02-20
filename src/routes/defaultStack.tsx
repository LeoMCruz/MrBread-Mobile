import React, { useContext } from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import Home from "../screens/home";

export type DefaultStackParams = {
  Home: undefined;
}
export type DefaultNavigationProp = NativeStackNavigationProp<DefaultStackParams>;
const Stack = createNativeStackNavigator<DefaultStackParams>();

export default function DefaultStackRoutes(): JSX.Element {
//   const {isAuthenticated} = useContext(AuthContext);

  return (
    <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
    </Stack.Navigator>
  );
}