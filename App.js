import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import BitcoinComponent from "./src/screens/BitcoinComponent";
import BitcoinerListComponent from "./src/screens/BitcoinerListComponent";

//change intialRouteName to Welcome to see WelcomeScreen
const navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Bitcoin: BitcoinComponent,
    Bitcoiners: BitcoinerListComponent
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
