import React, {useState} from 'react';
import { Button, View, Text, TextInput, Alert } from 'react-native';
import LoginStyleSheet from '../styles/LoginStyleSheet';

export default function LoginPage({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('SignUpPage')
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function validateUserInfo() {
        console.log(username);
        console.log(password);

        const response = await fetch(`http://206.12.142.61:8080/login/sign-in/?username=${username}&password=${password}`);
        
        console.log(response.status);

        if (response.ok) {
            Alert.alert("Logged in");
        }

        else {
            Alert.alert("get fucked");;
        }
    }

    return (
        <View style={LoginStyleSheet.container}>
            <View style={LoginStyleSheet.margin}>
                <Text style={LoginStyleSheet.setFontSizeOne}>Login</Text>
            </View>

            <View style={LoginStyleSheet.margin}>
                <TextInput
                     placeholder='Username'
                    style={LoginStyleSheet.textBox}
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
                    onPress={() => validateUserInfo()}
                />
                <Button
                    title='Sign Up'
                    onPress={() => pressHandler()}
                />
            </View>
        </View>
    );
};