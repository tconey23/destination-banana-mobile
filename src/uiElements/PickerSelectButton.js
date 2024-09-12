import React, {useState, useEffect} from 'react'
import { View, Pressable, StyleSheet, Text } from 'react-native';


function PickerSelectButton({title, addPage}) {

  return (
    <View>
        <Pressable onPress={() => addPage(title)}>
            <Text>Select Link</Text>
        </Pressable>
    </View>
  )
}

export default PickerSelectButton
