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

    const userData = {username: username, password: password, email: email, name: name};

    async function saveUserInfo() {
        // POST CALL

        // console.log(username);
        // console.log(password);
        // console.log(email);
        // console.log(name);


        const response = await fetch(`http://192.168.0.228:8080/login/create-account/`, {
                method: 'POST',
                body: userData
            });

            console.log(response.ok);

            if (response.ok) {
                Alert.alert("Account Created");
            }
    
            else {
                Alert.alert("Account Already Exists");;
            }
            
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
                    onChangeText={(val) => setName(val)}
                />
            </View>
            <View style={LoginStyleSheet.margin}>
                <TextInput
                    style={LoginStyleSheet.textBox}
                    placeholder='Email'
                    onChangeText={(val) => setEmail(val)}
                />
            </View>
            <View style={LoginStyleSheet.margin}>
                <TextInput
                    style={LoginStyleSheet.textBox}
                    placeholder='Username'
                    onChangeText={(val) => setUsername(val)}
                />
            </View>
            <View style={LoginStyleSheet.passwordMargin}>
                <TextInput
                    placeholder='Password'
                    style={LoginStyleSheet.textBox}
                    secureTextEntry={true}
                    onChangeText={(val) => setPassword(val)}
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