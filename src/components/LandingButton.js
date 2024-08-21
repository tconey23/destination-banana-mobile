import { View, Pressable, StyleSheet, Text } from 'react-native';

function LandingButton({onButtonPress, color, buttonText}) {

    return (
        <View>
            <Pressable
                
                onPress={onButtonPress}
                style={[styles.button, { backgroundColor: color }]}>
                    <Text style={styles.buttonText}>{buttonText}</Text>
            </Pressable>
        </View>
    )
}

export default LandingButton

const styles = StyleSheet.create({
    button: {
        zIndex: 10,
        width: '100%', 
        height: 70,    
        borderWidth: 0,   
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 100,
        backgroundColor: '#fcb805',
        shadowColor: '#ff931e', 
        shadowOffset: { width: 0, height: 15 }, 
        shadowOpacity: 1, 
        shadowRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontFamily: "Fredoka",
        fontSize: '2em',
    }
  });