import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, Pressable, StyleSheet } from 'react-native';

function PulsatingCircle({ title, id, handleLinkClick }) {
    const [canClick, setCanClick] = useState(true)
    const scaleValue = useRef(new Animated.Value(1)).current

    function clickTimeout(title, id) {
        setCanClick(false)
        handleLinkClick(title, id)
    
        setTimeout(() => {
        setCanClick(true)
        }, 500);
    }

    useEffect(() => {
        const pulsate = () => {
        Animated.loop(
            Animated.sequence([
            Animated.timing(scaleValue, {
                toValue: 1.2,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            ])
        ).start()
        }

        pulsate()
    }, [scaleValue]);

    return (
        <Animated.View
            style={[
                styles.circle,
                { transform: [{ scale: scaleValue }] },
            ]}
        >
            <Pressable style={styles.selectedButton} onPress={() => clickTimeout(title, id)}></Pressable>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    right: -10,
    backgroundColor: 'orange',
    width: 40,
    height: 40,
    borderRadius: 50,
    
  },
  selectedButton: {
    zIndex: 10,
    width: '100%',
    height: '100%',
  }
});

export default PulsatingCircle;
