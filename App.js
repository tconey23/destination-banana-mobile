import { StyleSheet, View, StatusBar, Text } from 'react-native'
import { useState } from 'react'
import LandingPage from './src/components/LandingPage'
import GamePage from './src/components/GamePage'


function App() {
  const [onPage, setOnPage] = useState('landing')

  function showHelp() {
    setOnPage('help')
  }

  function clickStart() {
    setOnPage('game')
  }

  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.mainContainer}>
        {onPage === 'landing' &&
          <LandingPage clickStart={clickStart} showHelp={showHelp}/>
        }
        {onPage === 'game' &&
          <GamePage setOnPage={setOnPage}></GamePage>
        }
        {onPage === 'help' &&
          <View></View>
        }
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 0,
  }
})
