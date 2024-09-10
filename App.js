import { StyleSheet, Text, View, Draggable, StatusBar } from 'react-native'
import { useState } from 'react'
import LandingPage from './src/components/LandingPage'
import { getLinks, getFeatured } from './apiCalls'

function App() {
  const [onPage, setOnPage] = useState('landing')
  const [featuredTitle, setFeaturedTitle] = useState('')
  const [featuredLinks, setFeaturedLinks] = useState('')

  async function startGame() {
    setOnPage('game')
    try {
      const data = await getFeatured()
      const title = data.tfa.title
      setFeaturedTitle(title)
      try {
        const links = await getLinks(title)
        setFeaturedLinks(links)
      } catch (error) {
        console.error('An error occurred:', error)
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  function showHelp() {
    setOnPage('help')
  }

  return (
    
    <>
      <StatusBar hidden={true} />
      <View style={styles.mainContainer}>
        {onPage === 'landing' &&
          <LandingPage startGame={startGame} showHelp={showHelp}/>
        }
        {onPage === 'game' &&
          <View style={{width: '100%', textAlign: 'center', flexDirection: 'column'}}>
            <Text>{featuredTitle}</Text>
            <View style={styles.linksContainer}>{featuredLinks}</View>
          </View>
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
    flex: 1
  },
  linksContainer: {
    flexDirection: 'column'
  }
})
