import { View, Pressable, StyleSheet, Text, Image } from 'react-native';
import { useFonts, Fredoka_300Light, Fredoka_400Regular, Fredoka_500Medium, Fredoka_600SemiBold, Fredoka_700Bold } from '@expo-google-fonts/fredoka';

function BananaButton({onButtonPress, color, buttonText, buttonDepth = 12, buttonImage, height, width}) {
    let [fontsLoaded] = useFonts({
        Fredoka_400Regular,
        Fredoka_500Medium,
        Fredoka_600SemiBold,
        Fredoka_700Bold
      })

      const alphabeticalIcon = require(`../../src/assets/alphabetical-icon.png`)
      const randomIcon = require(`../../src/assets/random-icon.png`)

    return (
        <View>
            <Pressable
                onPress={onButtonPress}
                style={({pressed}) => [
                    styles.button,
                    { backgroundColor: color},
                    { height: height },
                    { width: width },
                    {shadowOffset: { width: 0, height: buttonDepth }},
                    {transform: pressed ? [{translateY: buttonDepth}] : [{translateY: 0}]},
                    pressed && { shadowOffset: { width: 0, height: 0 } },
                    color === 'white' && { 
                        backgroundColor: styles.button.backgroundColorWhite, 
                        shadowColor: styles.button.shadowColorWhite 
                    },
                    color === 'yellow' && { 
                        backgroundColor: styles.button.backgroundColorYellow, 
                        shadowColor: styles.button.shadowColorYellow 
                    }
                ]}
                >
                    {fontsLoaded && 
                        (buttonText ? (
                            <Text
                                style={[styles.buttonText, {fontFamily: 'Fredoka_600SemiBold'}]}>
                                    {buttonText}
                            </Text>
                          ) : (
                            <Image
                                source={buttonImage === "random" ? randomIcon : alphabeticalIcon}
                                style={[styles.buttonImage, {width: width-10}]}
                                resizeMode="contain"
                            />
                          ))
                    }

                    
            </Pressable>
        </View>
    )
}

export default BananaButton

const styles = StyleSheet.create({
    button: {
        zIndex: 10,
        height: '100%',
        // height: 45,    
        borderWidth: 0,   
        borderRadius: 100,
        backgroundColorYellow: '#fcb805',
        shadowColorYellow: '#ff931e', 
        backgroundColorWhite: '#e5fdfb',
        shadowColorWhite: '#bdeafd', 
        shadowOpacity: 1, 
        shadowRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 25
    },
    buttonImage: {
        margin: 10
    }
  });