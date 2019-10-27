/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { bgimage, logo } from './assets/index.js';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width: WIDTH } = Dimensions.get('window');

class App extends Component {
    constructor() {
        super();
        this.state = {
            securePass: true,
            press: false,
        };
    }

    securePass = () => {
        if (this.state.press) {
            this.setState({ securePass: true, press: false });
        }
        else {
            this.setState({ securePass: false, press: true });
        }
    }

    render() {
        return (
            <ImageBackground source={bgimage} style={styles.backgroundContainer}>
                <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo}/>
                    <Text style={styles.logoText}> Login Page </Text>
                </View>

                <View style={styles.inputContainer}>
                    <Icon name={'user'} size={25} color={'black'} style={styles.iconStyle}/>
                    <TextInput
                        style={{ fontSize: 17, width: 190 }}
                        placeholder={'Username'}
                        placeholderTextColor={'black'}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name={'lock'} size={25} color={'black'} style={styles.iconStyle}/>
                    <TextInput
                        style={{ fontSize: 17, width: 200 }}
                        placeholder={'Password'}
                        secureTextEntry={this.state.securePass}
                        placeholderTextColor={'black'}
                    />

                    <TouchableOpacity onPress={this.securePass.bind(this)} style={styles.showPassword}>
                        <Icon name={this.state.securePass === true ? 'eye' : 'eye-slash' }
                        size={25} color={'black'}  />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.signInBtn}>
                    <Text style={styles.signInText}> Sign In </Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        bottom: 10,
        alignItems: 'center',
    },
    logo: {
        width: 180,
        height: 180,
    },
    logoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 25,
    },
    iconStyle: {
        position: 'absolute',
        top: 8,
        left: 17,
    },
    inputContainer: {
        width: WIDTH - 55,
        height: 45,
        marginBottom: 15,
        paddingLeft: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(0, 228, 240, 0.6)',
    },
    showPassword: {
        bottom: 35,
        left: 200,
    },
    signInBtn: {
        width: WIDTH - 55,
        height: 45,
        marginTop: 15,
        borderRadius: 25,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 200, 18, 0.5)',
    },
    signInText: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default App;
