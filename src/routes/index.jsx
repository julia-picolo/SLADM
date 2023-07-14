import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/ChecksScreens/Login";
import SignUp from "../pages/ChecksScreens/SignUp";
import DrawerRoutes from "./Drawer.routes";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          component={Login}
          name="Login"
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />

        <Stack.Screen
          component={SignUp}
          name="SignUp"
          options={{
            headerStyle: {
              backgroundColor: "#008000",
              borderBottomWidth: 0.8,
              borderBottomColor: "#fff",
            },
            headerTintColor: "#fff",
            headerBackTitleVisible: false,
            headerTitle: "Voltar",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
