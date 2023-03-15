import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";

const navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
