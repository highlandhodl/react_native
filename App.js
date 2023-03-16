import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import MyFavouriteBitcoiners from "./src/screens/MyFavouriteBitcoiners";

const navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Bitcoiners: MyFavouriteBitcoiners
  },
  {
    initialRouteName: "Bitcoiners",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
