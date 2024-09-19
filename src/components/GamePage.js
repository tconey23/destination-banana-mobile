import React, { useState, useEffect } from 'react'
import LinksView from './LinksView'
import PagesView from './PagesView'
import PageHead from '../uiElements/PageHead'
import {View, StyleSheet, Pressable, Image, ImageBackground, setOnPage} from 'react-native'
import { getLinks, getFeatured, getMedia } from '../../apiCalls'

function GamePage({setOnPage}) {
  const landingBackground = require('../../src/assets/beach_light.png')
  const treeIcon = require('../../src/assets/tree_icon.png')

  const [onLinksView, setOnLinksView] = useState(true)
  const [currentPages, setCurrentPages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(null)
  const [id, setId] = useState(0)
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
    } catch (error) {
      console.error(error)
    }
  }

  function handleLinkClick(title, pageId) {
    if(pageId !== allPages.length - 1) {
      const toSlice = (currentPages.length) - pageId
      for(let i=currentPages.length - 1; i > currentPages.length + 1 - toSlice; i--) {
        setAllPages(prev => [...prev, currentPages[i]])  
      }
      
      setCurrentPages(prev => prev.slice(0, toSlice))
    }
    
    addPage(title)
  }
  
  function toggleGameViews() {
    setOnLinksView(prev => !prev)
  }

  function returnHome() {
    console.log('jere')
    setOnPage('landing')
    setCurrentPages([])
    setAllPages([])
    setId(0)
  }

  useEffect(() => {
    startGame()
  }, [])

  useEffect(() => {
    setCurrentIndex(currentPages.length - 1)
  }, [currentPages.length])

  return (
    <ImageBackground source={landingBackground} style={{ width: '100%', height: '120%', flex: 1 }} resizeMode="cover">
      <PageHead allPages={allPages} currentPages={currentPages} returnHome={returnHome} />
      <View style={styles.gamePage}>
        {onLinksView ?
          <LinksView 
            key={Date.now()}
            currentPages={currentPages}
            allPages={allPages}
            currentIndex={currentIndex}
            addPage={addPage}
            handleLinkClick={handleLinkClick}
            setOnPage={setOnPage}/>
          :
          <PagesView
            currentPages={currentPages}
            allPages={allPages}
            setCurrentIndex={setCurrentIndex}
            setOnLinksView={setOnLinksView}
            setOnPage={setOnPage}>
          </PagesView>
        }
          <Pressable onPress={() => toggleGameViews()}>
            <Image style={styles.treeIcon} source={treeIcon}/>
          </Pressable>
      </View>
        </ImageBackground>
  )
}

export default GamePage

const styles = StyleSheet.create({
  gamePage:{
    flex: 1,
  },
  treeIcon: {
    width: 50,
    height: 50,
    margin: 30
  }
})

