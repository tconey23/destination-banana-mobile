import React from 'react'
import { View, StyleSheet, Image } from 'react-native';

function ArticleSnippet({imageSrc}) {
  return (
    <View style={styles.thumbnailWrapper}>
        <Image style={styles.image} source={{uri: `https:${imageSrc}`}} resizeMode={"contain"}/>
    </View>
  )
}

export default ArticleSnippet

const styles = StyleSheet.create({
    thumbnailWrapper: {
      width: '100%',
      height: 150,
      marginVertical: 10,
    },
    image: {  
      flex: 1
    }
})