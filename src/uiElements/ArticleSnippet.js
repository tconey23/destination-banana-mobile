import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import { View, StyleSheet, Image, ImageBackground } from 'react-native';

function ArticleSnippet({imageSrc}) {
  return (
    <View style={styles.thumbnailWrapper}>
        <Image style={styles.image} source={{uri: `https:${imageSrc}`}} resizeMode="contain"/>
    </View>
  )
}

export default ArticleSnippet

const styles = {
    thumbnailWrapper: {
        width: 200,
        height: 200,
        overflow: 'visibile',
        margin: 10
    },
    image: {
      flex: 1,
      transform: [{ scale: 0.6 }],
      overflow: 'visibile'
    }
}