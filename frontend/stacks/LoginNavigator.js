import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginPage from '../screens/LoginPage';
import SignUpPage from '../screens/SignUpPage';

const screens = {
    LoginPage: {
        screen: LoginPage,
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

const LoginScreen = createStackNavigator(screens);

export default createAppContainer(LoginScreen);