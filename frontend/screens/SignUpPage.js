import React, {useState} from 'react';
import { Text, TextInput, View, Button, Alert } from 'react-native';
import LoginStyleSheet from '../styles/LoginStyleSheet';

export default function SignUpPage({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('LoginPage')
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const userData = {username, password, email, name};

    async function saveUserInfo() {
        const response = await fetch(`http://206.12.136.100:8080/login/create-account`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        console.log(response);
            
    }
    
    return (
        <View style={LoginStyleSheet.container}>
            <View style={LoginStyleSheet.margin}>
                <Text style={LoginStyleSheet.setFontSizeOne}>Sign Up</Text>
            </View>
            <View style={LoginStyleSheet.margin}>
                <TextInput
                    style={LoginStyleSheet.textBox}
                    placeholder='Name'
                />
            </View>
            <View style={LoginStyleSheet.margin}>
                <TextInput
                    style={LoginStyleSheet.textBox}
                    placeholder='Email'
                />
            </View>
            <View style={LoginStyleSheet.margin}>
                <TextInput
                    style={LoginStyleSheet.textBox}
                    placeholder='Username'
                />
            </View>
            <View style={LoginStyleSheet.passwordMargin}>
                <TextInput
                    placeholder='Password'
                    style={LoginStyleSheet.textBox}
                    secureTextEntry={true}
                />
            </View>
            <View style={LoginStyleSheet.margin}>
                <Text style={LoginStyleSheet.setFontSizeTwo}>Password should be minimum 8 characters in length</Text>
                <Text style={LoginStyleSheet.setFontSizeTwo}>Password should contain at least 1 number</Text>
            </View>
            <TextInput
                placeholder='Re-enter Password'
                style={LoginStyleSheet.textBox}
                secureTextEntry={true}
            />
            <View style={LoginStyleSheet.buttonMargin}>
                <Button // add box to button with colour and appropriate amount of padding 
                    title="Create Account"
                    onPress={() => saveUserInfo()}
                       // Alert.alert("Make this send an API Request... this is pending")}
                />
            </View>
            <View style={LoginStyleSheet.backButtonContainer}>
                <Button
                    title="Back"
                    onPress={pressHandler}
                />
            </View>
        </View>
    );
}