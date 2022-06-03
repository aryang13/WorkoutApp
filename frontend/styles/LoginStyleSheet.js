import { StyleSheet } from 'react-native';

export default StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButtonContainer: {
        ...StyleSheet.absoluteFillObject,
        top: 65,
        right: 330
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