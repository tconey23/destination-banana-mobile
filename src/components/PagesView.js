import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView, Pressable} from 'react-native'

function PagesView({currentPages, allPages, setCurrentIndex, setOnLinksView}) {
  function handlePress(pageId){
    setCurrentIndex(pageId)
    setOnLinksView(prev => !prev)
  }
    
//this is mapping all pages. We will need to grey out current pages if that's our desire.

  return (
      <ScrollView>
        <View style={styles.pagesContainer}>
          {
            allPages.map((page, index) => (
              <Pressable onPress={() => handlePress(page.id)} key={index} style={styles.pageWrapper}>
                <Image style={styles.image} source={{uri: `https:${page.image}`}}/>
                <Text style={styles.title}>{page.title}</Text>
              </Pressable>
            ))
          }
        </View>
      </ScrollView>
  )
}

export default PagesView

const styles = {
  pagesContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 100
  },
  image: {
    height: 60,
    width: 60,
    margin: 5
  },
  pageWrapper: {
    flexDirection: 'row',
    backgroundColor: 'antiquewhite',
    width: '85%',
    marginTop: 20
  },
  title: {
    alignSelf: 'center',
    marginLeft: 10
  }
}