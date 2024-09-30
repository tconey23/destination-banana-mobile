import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import HighButton from '../uiElements/HighButton'

function PageHead({allPages, returnHome, currentPages, toggleGameViews}) {
    
  return (
    <View style={styles.pageHeader}> 
        <View style={styles.toggleButton}>
            <HighButton onButtonPress={toggleGameViews} color='yellow' buttonText='🌴'/>
        </View>
        <View style={styles.pageCountWrapper}>
            <Text>
                {currentPages.length ?
                    <Text>{allPages.length - 1} click{currentPages.length - 1 !== 1 && 's'}</Text>
                    :
                    '0 clicks'
                }
            </Text>
        </View>
        <Pressable onPress={() => returnHome()} style={styles.linkIcon}>
            <FontAwesomeIcon icon={faHome} size={20} color="#000" />
        </Pressable>
    </View>
  )
}

export default PageHead

const styles = StyleSheet.create({
    pageHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    pageCount: {
      fontWeight: '800',
      color: 'yellow',

    },
    linkIcon: { 
        
    } 
  });