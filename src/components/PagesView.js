import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import { StyleSheet, View, Text, Image, ScrollView, Pressable, ImageBackground, Dimensions} from 'react-native'

const { width } = Dimensions.get('window');

function PagesView({currentPages, allPages, setCurrentIndex, setOnLinksView}) {

  function handlePress(pageId){
    setCurrentIndex(pageId)
    setOnLinksView(prev => !prev)
  }

  const thumbs = allPages.map((page, index) => {
    let thumbStyle
    thumbStyle = currentPages.includes(page) ? 'active' : 'inactive'

    return (
      <ImageBackground source={require('../assets/realistic-old-paper.png')} style={thumbStyle === 'active' ? styles.activeThumb : styles.inactiveThumb}>
        <Pressable
          onPress={() => thumbStyle === 'active' && handlePress(page.id)}
          key={index}
          style={styles.pageWrapper}
        >
          <Image resizeMode="cover" style={styles.image} source={{uri: `https:${page.image}`}}/>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>{page.title.replace(/_/g, ' ')}</Text>
        </Pressable>
      </ImageBackground>
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
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 40
  },
  title: {
    alignSelf: 'center',
    marginLeft: 10,
    flexDirection: 'row',
    width: '50%',
    fontSize: 20,
    fontWeight: '800'
  },
  activeThumb: {
    marginTop: 20,
    flex: 1,
  },
  inactiveThumb: {
    // backgroundColor: 'red',
    tintColor: 'gray',
    marginTop: 20,
    opacity: 0.6,
  }
}