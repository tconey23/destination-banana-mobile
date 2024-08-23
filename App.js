import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import LandingPage from './src/components/LandingPage'
import { useState } from 'react'

function App() {
  const [onPage, setOnPage] = useState('landing')
  const [featuredTitle, setFeaturedTitle] = useState('')
  const [featuredLinks, setFeaturedLinks] = useState('')

async function getFeatured() {
  const currentDate = new Date();
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, '0')
  const day = String(currentDate.getDate()).padStart(2, '0')
  const parsedDate = `${year}/${month}/${day}`
  const res = await fetch(`https://en.wikipedia.org/api/rest_v1/feed/featured/${parsedDate}`)
  return res.json()
}

async function getLinks(title) {
  const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/related/${title}`)
  return res.json()
}

async function startGame() {
 setOnPage('game')
  try {
    const data = await getFeatured()
    setFeaturedTitle(data.tfa.title)
    try{
      const links = await getLinks()
      setFeaturedLinks(links.links)
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
    
      <View style={styles.mainContainer}>
        {onPage === 'landing' &&
          <LandingPage startGame={startGame} showHelp={showHelp}/>
        }
        {onPage === 'game' &&
          <View style={{width: '100%', textAlign: 'center', flexDirection: 'column'}}>
            <Text>{featuredTitle}</Text>
            <Text>{featuredLinks}</Text>
          </View>
        }
        {onPage === 'help' &&
          <View></View>
        }
      </View>

  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
})
