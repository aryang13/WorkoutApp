import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from '../screens/Login';
import SignUpPage from '../screens/SignUpPage';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
          }
    },

    SignUpPage: {
        screen: SignUpPage,
        navigationOptions: {
            headerShown: false,
        }
    }
}

const LogInScreen = createStackNavigator(screens);

export default createAppContainer(LogInScreen);