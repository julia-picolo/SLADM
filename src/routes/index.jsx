import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./Stack.routes";

const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default Routes;
