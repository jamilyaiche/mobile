import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { color } from 'react-native-reanimated';
import Colors from '../../assets/styles/Colors';
import Style from '../../assets/styles/Style';
import { Button, Container, TextInput } from '../../designSystem';
import DSText from '../../designSystem/Atoms/DSText/DSText';

export default function Connexion({ navigation }) {
    const image = { uri: "https://reactjs.org/logo-og.png" };
    return (
        <ImageBackground source={require('../../assets/images/background.jpg')} resizeMode="cover" style={{
            flex: 1,
        }}>
            <View style={{ backgroundColor: Colors.black(0.5), width: '100%', height: '100%', justifyContent: 'center' }}>
                <View style={Style.connectionContainer}>

                    <View>
                        <DSText text='Haussman' style={Style.connectionTitle} />
                        <DSText text='Connectez-vous afin d’accéder aux données de vos biens immobilier' style={Style.connectionText} />
                    </View>
                    <View style={{ marginTop: 32 }}>
                        <TextInput placeholder='Email' />
                        <TextInput placeholder='Password' type='password' />
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Button text="Connexion" size='large' theme='primary' styleBtn={{ marginTop: 15 }} />
                        <Button text="Inscription" size='large' theme='white' onPress={() => navigation.navigate('inscription')} />
                    </View>
                    <DSText text='Mot de passe oublié ?' style={{ ...Style.connectionText, textAlign: 'right', marginHorizontal: 0 }} />


                </View>
            </View>
        </ImageBackground>
    )
}
