import React, { useState } from 'react'
import LinksView from './LinksView'
import PagesView from './PagesView'
import {View, StyleSheet, Pressable, Image, ImageBackground, setOnPage} from 'react-native'

function GamePage({currentPages, addPage, handleLinkClick, allPages, setOnPage}) {
  const landingBackground = require('../../src/assets/beach_light.png')
  const treeIcon = require('../../src/assets/tree_icon.png')

  const [onLinksView, setOnLinksView] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(currentPages.length - 1)

  function toggleGameViews() {
    setOnLinksView(prev => !prev)
  }

  return (
    <ImageBackground source={landingBackground} style={{ width: '100%', height: '120%', flex: 1 }} resizeMode="cover">
      <View style={styles.gamePage}>
        {onLinksView ?
          <LinksView key={Date.now()} currentPages={currentPages} addPage={addPage} handleLinkClick={handleLinkClick} allPages={allPages} currentIndex={currentIndex} setOnPage={setOnPage}/>
          :
          <PagesView currentPages={currentPages} allPages={allPages} setCurrentIndex={setCurrentIndex} setOnLinksView={setOnLinksView} setOnPage={setOnPage}></PagesView>
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

