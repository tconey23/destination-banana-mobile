import React, {useState} from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'

function Links({title, links, id, addPage}) { 

  return (
    <View style={styles.linksView}>
            {links && links.map((link) => (
                <Pressable onPress={() => addPage(link.title)} key={id}>
                    <Text>{link.title}</Text>
                </Pressable>
            ))}
    </View>
  )
}

export default Links

const styles = StyleSheet.create({
    linksView: {
      marginTop: 5,
      alignItems: 'center',
      flexDirection: 'column',
      flex: 1
    }
  })
