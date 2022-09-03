import React, {useState} from 'react';
import { Button, View, Text, TextInput, Alert } from 'react-native';
import LoginStyleSheet from '../styles/LoginStyleSheet';

export default function LoginPage({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('SignUpPage')
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function validateUserInfo(username, password) {
        console.log(username);
        console.log(password);
    }

    return (
        <View style={LoginStyleSheet.container}>
            <View style={LoginStyleSheet.margin}>
                <Text style={LoginStyleSheet.setFontSizeOne}>Login</Text>
            </View>

            <View style={LoginStyleSheet.margin}>
                <TextInput
                    style={LoginStyleSheet.textBox}
                    placeholder='Username'
                    onChangeText={(val) => setUsername(val)}
                />
            </View>
            
            <View style={LoginStyleSheet.margin}>
                <TextInput
                    placeholder='Password'
                    style={LoginStyleSheet.textBox}
                    secureTextEntry={true}
                    onChangeText={(val) => setPassword(val)}
                />
            </View>
            <View styles={LoginStyleSheet.margin}>
                <Button
                    title='Login'
                    onPress={validateUserInfo(username, password)}
                />
                <Button
                    title='Sign Up'
                    onPress={pressHandler}
                />
            </View>
        </View>
    );
};