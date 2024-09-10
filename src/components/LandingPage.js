import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import LandingButton from '../uiElements/LandingButton'
import { StatusBar } from 'expo-status-bar'

function LandingPage({startGame, showHelp}) {
    const landingBackground = require('../../src/assets/beach_light.png')
    const dBLogoBig = require('../../src/assets/DB-vertical-w-banana.png')

    return (
        <ImageBackground source={landingBackground} style={{width: '100%', height: '120%', flex: 1}} resizeMode="cover">
            <View style={styles.landingContainer}>
                <Image source={dBLogoBig} style={styles.dBLogo}/>
                <Text style={styles.landingText}>A game of connections. And bananas. Can you get to "banana" before the pesky monkeys gobble them all up??</Text>
                <View style={styles.buttonContainer}>
                    <LandingButton onButtonPress={startGame} color='yellow' buttonText='start'/>
                    <LandingButton onButtonPress={showHelp} color='white' buttonText='help'/>
                </View>
                <StatusBar style="auto" />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    landingContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10
    },
    dBLogo: {
      width: 290,
      height: 185,
      marginBottom: 30
    },
    landingText: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 15,
      marginBottom: 30,
      width: '80%'
    },
    buttonContainer: {
      height: 120,
      width: '50%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginBottom: 30
    }
  })
  

export default LandingPage