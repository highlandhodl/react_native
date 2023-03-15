import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import BitcoinComponent from "./src/screens/BitcoinComponent";

//step 1: import the BitcoinComponent
//step 2: add the BitcoinComponent to the navigator
//step 3: set the initial route to the BitcoinComponent
//step 4: run the app and see your awesome new BitcoinComponent
const navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Bitcoin: BitcoinComponent,
  },
  {
    initialRouteName: "Bitcoin",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
