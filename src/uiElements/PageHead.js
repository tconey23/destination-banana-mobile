import React from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import BananaButton from '../uiElements/BananaButton'

function PageHead({allPages, returnHome, currentPages, toggleGameViews}) {
    const palmTree = require('../../src/assets/tree_icon.png')

  return (
    <View style={styles.pageHeader}>
        <Pressable onPress={() => toggleGameViews()}>
            <Image source={palmTree} style={styles.palm}/>
        </Pressable>
        <View style={styles.pageCountWrapper}>
            <Text style={styles.pageCount}>
                {currentPages.length ?
                    <Text>{allPages.length - 1} click{currentPages.length - 1 !== 1 && 's'}</Text>
                    :
                    '0 clicks'
                }
            </Text>
        </View>
        <Pressable onPress={() => returnHome()}>
            <FontAwesomeIcon icon={faHome} size={30} color="#000" />
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
        paddingHorizontal: 30,
    },
    pageCount: {
        fontWeight: '800',
        color: 'orange',
        fontSize: 20
    },
    palm: {
        width: 30,
        height: 30
    }
  });