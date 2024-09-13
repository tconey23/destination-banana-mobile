import React, {useState, useEffect} from 'react'
import { View, Pressable, StyleSheet, Text } from 'react-native';


function PickerSelectButton({title, id, handleLinkClick, color}) {

  const [canClick, setCanClick] = useState(true)

function clickTimeout(title, id) {
  setCanClick(false)
  handleLinkClick(title, id)

  setTimeout(() => {
    setCanClick(true)
  }, 500);
}

  return (
    <View>
        <Pressable onPress={() => canClick === true && clickTimeout(title, id)}
          style={({pressed}) => [
            styles.button,
            { backgroundColor: color},
            {transform: pressed ? [{translateY: 15}] : [{translateY: 0}]},
            pressed && { shadowOffset: { width: 0, height: 0 } },
            color === 'white' && { 
                backgroundColor: styles.button.backgroundColorWhite, 
                shadowColor: styles.button.shadowColorWhite 
            },
            color !== 'white' && { 
                backgroundColor: styles.button.backgroundColorYellow, 
                shadowColor: styles.button.shadowColorYellow 
            }
          ]}>
          <Text>Select Link</Text>
        </Pressable>
    </View>
  )
}

export default PickerSelectButton

const styles = {
  button: {
    zIndex: 10,
    width: 100, 
    height: 45,    
    borderWidth: 0,   
    borderRadius: 100,
    backgroundColorYellow: '#fcb805',
    shadowColorYellow: '#ff931e', 
    backgroundColorWhite: '#e5fdfb',
    shadowColorWhite: '#bdeafd', 
    shadowOffset: { width: 0, height: 12 }, 
    shadowOpacity: 1, 
    shadowRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
},
}