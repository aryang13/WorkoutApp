import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, Alert} from 'react-native';

export default function Login({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('SignUpPage')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.formating}>Log In</Text>
            <TextInput 
            style={styles.input}
            placeholder= 'Username'/>

            <TextInput 
            placeholder= 'Password'
            style={styles.input}
            secureTextEntry={true}
            />  
            <View styles={styles.buttonContainer}>
                <Button 
                    title= 'Login'
                    onPress={() => Alert.alert("Not yet hoe")}
                />
                <Button 
                    title= 'Create account'
                    onPress={pressHandler}
                />
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backButtonContainer: {
        flex: 1,
        backgroundColor:'white',
        top:20,
        right:5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    },

    formating: {
        fontSize: 30, // 'Log In' text font size
        margin: 20
    }
});