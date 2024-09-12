import React from 'react'
import { View, StyleSheet, Image } from 'react-native';

function PageThumbnail({imageSrc}) {
  return (
    <View style={styles.thumbnailWrapper}>
        <Image style={styles.image} source={{uri: `https:${imageSrc}`}}/>
    </View>
  )
}

export default PageThumbnail

const styles = {
    thumbnailWrapper: {
        
    },
    image: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginVertical: 10
    }
}