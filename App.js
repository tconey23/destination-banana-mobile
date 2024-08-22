import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import LandingButton from './src/components/LandingButton'


function App() {
  const landingBackground = require('./src/assets/beach_light.png')
  const dBLogoBig = require('./src/assets/DB-vertical-w-banana.png')


  function startGame() {

  }

  function showInstructions() {

  }

  return (
    
      <View style={styles.landingContainer}>
        <ImageBackground source={landingBackground} style={{width: '100%', height: '120%', flex: 1}} resizeMode="stretch">
          <View style={styles.container}>
            <Image source={dBLogoBig} style={styles.dBLogo}/>
            <View style={styles.buttonContainer}>
              <LandingButton onButtonPress={startGame} color='#fcb805' buttonText='start'/>
              <LandingButton onButtonPress={showInstructions} color='#fcb805' buttonText='help'/>
            </View>
            <StatusBar style="auto" />
          </View>
        </ImageBackground>
      </View>

  )
}

export default App

const styles = StyleSheet.create({
  landingContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  dBLogo: {
    width: 290,
    height: 185,
    marginBottom: 50
  },
  text: {
    textAlign: 'center',
  },
  buttonContainer: {
    height: 120,
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
})
