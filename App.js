import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import BitcoinComponent from "./src/screens/BitcoinComponent";
import BitcoinerListComponent from "./src/screens/BitcoinerListComponent";

const navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Bitcoin: BitcoinComponent,
    Bitcoiners: BitcoinerListComponent
  },
  {
    initialRouteName: "Bitcoiners",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
