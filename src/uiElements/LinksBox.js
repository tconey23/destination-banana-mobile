import React, {useState} from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'

function Links({links, id, addPage}) { 
  const [maxLength] = useState(35)

  return (
    <View style={styles.linksView}>
      {links && links.map((link, index) => (
        <Pressable onPress={() => addPage(link.title)} key={index}>
          <Text style={styles.linkTitle}>
            {link.title.length > maxLength ? link.title.slice(0, maxLength) + '...' : link.title}
          </Text>
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
      flex: 1,
    },
    linkTitle: {
      fontSize: 20,
      paddingVertical: 2
    }
  })
