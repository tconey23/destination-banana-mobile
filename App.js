import { StyleSheet, View, StatusBar, Text } from 'react-native'
import { useState } from 'react'
import LandingPage from './src/components/LandingPage'
import GamePage from './src/components/GamePage'
import { getLinks, getFeatured, getMedia } from './apiCalls'

function App() {
  const [onPage, setOnPage] = useState('landing')
  const [id, setId] = useState(0)
  const [currentPages, setCurrentPages] = useState([])
  const [allPages, setAllPages] = useState([])

  async function makePage(title) {
    const links = await getLinks(title)
    const url = await getMedia(title)
    const newPage = {
      id: id,
      title: title,
      links: links,
      image: url
    }

    return newPage
  }

  function storePage(page) {
    setCurrentPages(prev => [...prev, page])
    setAllPages(prev => [...prev, page])
    setId(prev => prev += 1)
  }

  async function addPage(title) {
    const newPage = await makePage(title)
    storePage(newPage)
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

  function handleLinkClick(title, pageId) {
    if(pageId !== allPages.length - 1) {
      const toSlice = (currentPages.length) - pageId
      for(let i=currentPages.length - 1; i > currentPages.length - toSlice; i--) {
        setAllPages(prev => [...prev, currentPages[i]])  
      }

      setCurrentPages(prev => prev.slice(0, toSlice))
    }

    addPage(title)
  }

  // console.log('AP in App', allPages[0].title)

  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.mainContainer}>
        {onPage === 'landing' &&
          <LandingPage startGame={startGame} showHelp={showHelp}/>
        }
        {onPage === 'game' &&
          <GamePage currentPages={currentPages} addPage={addPage} handleLinkClick={handleLinkClick} allPages={allPages} setOnPage={setOnPage}></GamePage>
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
