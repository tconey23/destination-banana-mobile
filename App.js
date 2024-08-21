import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import LandingButton from './components/LandingButton'

function App() {

  function startGame() {

  }

  function showInstructions() {

  }



  return (
    <View style={styles.container}>
      <Text style={styles.text}>Destination: Banana Home Page</Text>
      <View style={styles.buttonContainer}>
        <LandingButton onButtonPress={startGame} color="black"/>
        <LandingButton onButtonPress={showInstructions} color="red"/>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
  buttonContainer: {
    height: 300,
    width: 300,
    backgroundColor: 'pink'
  }
})
