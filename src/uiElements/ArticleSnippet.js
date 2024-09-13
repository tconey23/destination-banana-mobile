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
        backgroundColor: 'white',
        width: 200,
        height: 200,
        overflow: 'visibile',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1.5,
        margin: 20
    },
    image: {
      flex: 1,
      transform: [{ scale: 0.9 }],
      overflow: 'visibile'
    }
}