import React from 'react'
import LinksView from './LinksView'
import PagesView from './PagesView'
import {View, StyleSheet, Text} from 'react-native'

function GamePage({currentPages, addPage, handleLinkClick}) {
  return (
    <View style={styles.gamePage}>
      <LinksView key={Date.now()} currentPages={currentPages} addPage={addPage} handleLinkClick={handleLinkClick}/>
      <PagesView></PagesView>
    </View>
  )
}

export default GamePage

const styles = StyleSheet.create({
  gamePage:{
    flex: 1,
  }
})

