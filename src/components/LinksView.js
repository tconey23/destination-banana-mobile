import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function LinksView({featuredLinks, featuredTitle}) {

  return (
    <View style={{width: '100%', textAlign: 'center', flexDirection: 'column'}}>
        <Text>{featuredTitle}</Text>
        <View style={styles.linksContainer}>{featuredLinks}</View>
    </View>
  )
}

export default LinksView

const styles = StyleSheet.create({
    linksContainer: {
      flexDirection: 'column'
    }
  })