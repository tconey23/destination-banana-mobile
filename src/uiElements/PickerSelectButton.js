import React, {useState, useEffect} from 'react'
import { View, Pressable, StyleSheet, Text } from 'react-native';


function PickerSelectButton({title, id, handleLinkClick}) {



  return (
    <View>
        <Pressable onPress={() => handleLinkClick(title, id)}>
            <Text>Select Link</Text>
        </Pressable>
    </View>
  )
}

export default PickerSelectButton
