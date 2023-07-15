import { createDrawerNavigator } from "@react-navigation/drawer";

import TabRoutes from "./Tab.routes";

import { Feather } from "@expo/vector-icons";
import { Linking } from "react-native";
import { auth } from "../services/firebaseAuthentication";
import HomeProducer from "../pages/ProducerScreens/HomeProducer";

const Drawer = createDrawerNavigator();

const Logout = () => {
  auth.signOut();
};
const Instagram = () => {
  Linking.openURL("https://www.instagram.com/solo_fertil_campus_aquidauana/");
};

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{
        title: "",
        headerStyle: {
          backgroundColor: "#4D8900",
        },
      }}
    >
      <Drawer.Screen
        name="home"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) => {
            <Feather name="home" color={color} size={size} />;
          },
          drawerLabel: "Início",
        }}
      />

      <Drawer.Screen
        name="instagram"
        component={Instagram}
        options={{
          drawerLabel: "Instagram",
        }}
      />

      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerLabel: "Sair",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
