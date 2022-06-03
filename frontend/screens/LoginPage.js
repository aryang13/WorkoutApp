import React from 'react';
import { Button, View, Text, TextInput, Alert } from 'react-native';
import LoginStyleSheet from '../styles/LoginStyleSheet';

export default function LoginPage({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('SignUpPage')
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
                />
            </View>
            <View style={LoginStyleSheet.margin}>
                <TextInput
                    placeholder='Password'
                    style={LoginStyleSheet.textBox}
                    secureTextEntry={true}
                />
            </View>
            <View styles={LoginStyleSheet.margin}>
                <Button
                    title='Login'
                    onPress={() => Alert.alert("Not yet hoe")}
                />
                <Button
                    title='Sign Up'
                    onPress={pressHandler}
                />
            </View>
        </View>
    );
};