import React, {useState, useEffect} from 'react'
import { View, Pressable, StyleSheet, Text } from 'react-native';
import { getMedia } from '../../apiCalls';

function PickerSelectButton({title, setImageSrc}) {

    const [imageUrl, setImageUrl] = useState()

    async function getImageSource(title) {
        const url = await getMedia(title)
        setImageUrl(url)
    }

    useEffect(() => {
        if(imageUrl){
            setImageSrc(imageUrl)
        }
    }, [imageUrl])

  return (
    <View>
        <Pressable onPress={() => getImageSource(title)}>
            <Text>Select Link</Text>
        </Pressable>
    </View>
  )
}

export default PickerSelectButton
