import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import LandingButton from './src/components/LandingButton'


function App() {
  const landingBackground = require('./src/assets/beach_light.png')


  function startGame() {

  }

  function showInstructions() {

  }

  return (
    
      <View style={styles.landingContainer}>
        <ImageBackground source={landingBackground} style={{width: '100%', height: '100%', flex: 1}} resizeMode="stretch">
          <View style={styles.container}>
            <Text style={styles.text}>Destination: Banana Home Page</Text>
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
  text: {
    textAlign: 'center',
  },
  buttonContainer: {
    height: 170,
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
})
