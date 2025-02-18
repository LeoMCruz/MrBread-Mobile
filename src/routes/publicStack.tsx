import React, { useContext } from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import SignIn from "../screens/signIn";
import SignUp from "../screens/signUp";

export type PublicStackParams = {
  SignIn: undefined;
  SignUp: undefined;
}
export type PublicNavigationProp = NativeStackNavigationProp<PublicStackParams>;
const Stack = createNativeStackNavigator<PublicStackParams>();

export default function PublicStackRoutes(): JSX.Element {
//   const {isAuthenticated} = useContext(AuthContext);

  return (
    <Stack.Navigator >
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
    </Stack.Navigator>
  );
}