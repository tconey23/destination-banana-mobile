import { View, Pressable, StyleSheet } from 'react-native';

function LandingButton({onButtonPress, color}) {

    return (
        <View>
            <Pressable
                onPress={onButtonPress}
                style={[styles.landingButton, { backgroundColor: color }]}>
            </Pressable>
        </View>
    )
}

export default LandingButton

const styles = StyleSheet.create({
    landingButton: {
        width: '100%',
        height: 20,
        borderColor: 'green',
        borderWidth: 2,
        borderStyle: 'solid'
    }
  })