import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import LandingPage from './src/components/LandingPage'
import { useState } from 'react'

function App() {
  const [onPage, setOnPage] = useState('landing')

  function startGame() {
    setOnPage('game')
  }

  function showHelp() {
    setOnPage('help')
  }

  return (
    
      <View style={styles.mainContainer}>
        {onPage === 'landing' &&
          <LandingPage startGame={startGame} showHelp={showHelp}/>
        }
        {onPage === 'game' &&
          <View></View>
        }
      </View>

  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
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
