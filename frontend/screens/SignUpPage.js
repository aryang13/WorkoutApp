import { NavigationContainer, PrivateValueStore } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import Login from './Login';

export default function SignUpPage({ navigation }) {
    const backPressHandler = () => {
        navigation.navigate('Login');
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.margin}>
                <Text style={styles.setFontSizeOne}>Sign Up</Text>
            </View>
            <View style={styles.margin}>
                <TextInput
                    style={styles.textBox}
                    placeholder='Name'
                />
            </View>
            <View style={styles.margin}>
                <TextInput
                    style={styles.textBox}
                    placeholder='Email'
                />
            </View>
            <View style={styles.margin}>
                <TextInput
                    style={styles.textBox}
                    placeholder='Username'
                />
            </View>
            <View style={styles.passwordMargin}>
                <TextInput
                    placeholder='Password'
                    style={styles.textBox}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.margin}>
                <Text style={styles.setFontSizeTwo}>Password should be minimum 8 characters in length</Text>
                <Text style={styles.setFontSizeTwo}>Password should contain at least 1 number</Text>
            </View>
            <TextInput
                placeholder='Re-enter Password'
                style={styles.textBox}
                secureTextEntry={true}
            />
            <View style={styles.buttonMargin}>
                <Button // add box to button with colour and appropriate amount of padding 
                    title="Create Account"
                    onPress={() => Alert.alert("Make this send an API Request... this is pending")}
                />
            </View>
            <View style={styles.backButtonContainer}>
                <Button
                    title="Back"
                    onPress={backPressHandler}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButtonContainer: {
        ...StyleSheet.absoluteFillObject,
        top: 65,
        right: 350
    },
    setFontSizeOne: {
        fontSize: 30 // "Sign Up"'s font size
    },
    setFontSizeTwo: {
        fontSize: 10 // Password requirements' font size
    },
    textBox: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 200,
        paddingHorizontal: 10
    },
    margin: {
        backgroundColor: 'white',
        marginBottom: 25
    },
    passwordMargin: {
        backgroundColor: 'white',
        marginBottom: 1
    },
    buttonMargin: {
        backgroundColor: 'white',
        marginTop: 50
    },
});