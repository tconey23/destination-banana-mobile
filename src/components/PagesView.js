import {useState} from 'react'
import { StyleSheet, View, Text, Image, ScrollView, Pressable} from 'react-native'

function PagesView({currentPages, allPages, setCurrentIndex, setOnLinksView}) {

  function handlePress(pageId){
    setCurrentIndex(pageId)
    setOnLinksView(prev => !prev)
  }

  const thumbs = allPages.map((page, index) => {
    let thumbStyle
    thumbStyle = currentPages.includes(page) ? 'active' : 'inactive'

    return (
      <View style={thumbStyle === 'active' ? styles.activeThumb : styles.inactiveThumb}>
        <Pressable onPress={() => handlePress(page.id)} key={index} style={styles.pageWrapper}>
          <Image style={styles.image} source={{uri: `https:${page.image}`}}/>
          <Text style={styles.title}>{page.title}</Text>
        </Pressable>
      </View>
    )
  })

  return (
      <ScrollView>
        <View style={styles.pagesContainer}>
          {thumbs}
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
    width: '85%',
    marginTop: 20
  },
  title: {
    alignSelf: 'center',
    marginLeft: 10
  },
  activeThumb: {
    backgroundColor: 'antiquewhite',
    width: '85%',
    marginTop: 20,
  },
  inactiveThumb: {
    backgroundColor: 'red',
    width: '85%',
    marginTop: 20
  }
}