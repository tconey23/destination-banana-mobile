import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Page from '../uiElements/Page'

function LinksView({currentPages}) {

  return (
      <View style={styles.pagesContainer}>
        {currentPages.map((page) => (
          <Page
            key={page.id}
            id={page.id}
            title={page.title}
            links={page.links}
          />
        ))}
      </View>
  )
}

export default LinksView

const styles = StyleSheet.create({
  pagesContainer:{
    flex: 1,
  }
})