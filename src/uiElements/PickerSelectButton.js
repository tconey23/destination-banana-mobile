import React, {useState, useEffect} from 'react'
import { View, Pressable, StyleSheet, Text } from 'react-native';


function PickerSelectButton({title, id, handleLinkClick}) {



  return (
    <View>
        <Pressable style={styles.button} onPress={() => handleLinkClick(title, id)}>
            <Text>Select Link</Text>
        </Pressable>
    </View>
  )
}

export default PickerSelectButton

const styles = {
  button: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20
  }
}