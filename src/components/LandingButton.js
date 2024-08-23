import { View, Pressable, StyleSheet, Text } from 'react-native';
import { useFonts, Fredoka_300Light, Fredoka_400Regular, Fredoka_500Medium, Fredoka_600SemiBold, Fredoka_700Bold } from '@expo-google-fonts/fredoka';

function LandingButton({onButtonPress, color, buttonText}) {

    let [fontsLoaded] = useFonts({
        Fredoka_400Regular,
        Fredoka_500Medium,
        Fredoka_600SemiBold,
        Fredoka_700Bold
      })

    return (
        <View>
            <Pressable
                
                onPress={onButtonPress}
                style={({pressed}) => [
                    styles.button,
                    { backgroundColor: color},
                    {transform: pressed ? [{translateY: 15}] : [{translateY: 0}]},
                    pressed && {shadowOffset:  { width: 0, height: 0 }}  
                ]}
                >
                    {fontsLoaded && <Text style={[styles.buttonText, {fontFamily: 'Fredoka_600SemiBold'}]}>{buttonText}</Text>}

                    
            </Pressable>
        </View>
    )
}

export default LandingButton

const styles = StyleSheet.create({
    button: {
        zIndex: 10,
        width: '100%', 
        height: 45,    
        borderWidth: 0,   
        borderRadius: 100,
        backgroundColor: '#fcb805',
        shadowColor: '#ff931e', 
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
    buttonText: {
        fontSize: 25
    }
  });