import React from 'react';
import { Text, TextInput, View, Button, Alert } from 'react-native';
import LoginStyleSheet from '../styles/LoginStyleSheet';

export default function SignUpPage({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('LoginPage')
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
                    onPress={() => Alert.alert("Make this send an API Request... this is pending")}
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