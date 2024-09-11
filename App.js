import { StyleSheet, View, StatusBar, Text } from 'react-native'
import { useState } from 'react'
import LandingPage from './src/components/LandingPage'
import GamePage from './src/components/GamePage'
import { getLinks, getFeatured } from './apiCalls'

function App() {
  const [onPage, setOnPage] = useState('landing')
  const [id, setId] = useState(0)
  const [currentPages, setCurrentPages] = useState([])
  const [allPages, setAllPages] = useState([])

  async function makePage(title) {
    const links = await getLinks(title)
    const newPage = {
      id: id,
      title: title,
      links: links,
    }
    return newPage
  }

  function storePage(page) {
    setCurrentPages(prev => [...prev, page])
    setAllPages(prev => [...prev, page])
    setId(prev => prev++)
  }

  async function startGame() {
    
    try {
      const data = await getFeatured()
      const title = await data.tfa.title
      const newPage = await makePage(title)
      storePage(newPage)
      setOnPage('game')
    } catch (error) {
      console.error(error)
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
          <GamePage currentPages={currentPages}></GamePage>
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
