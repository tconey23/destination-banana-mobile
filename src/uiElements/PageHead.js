import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function PageHead({allPages, returnHome, currentPages}) {
    console.log('cp length', currentPages.length)
    
  return (
    <View style={styles.pageHeader}>
        <View style={styles.pageCountWrapper}>
            <Text style={styles.pageCount}>
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
        backgroundColor: 'rgba(0,0,0,0.25)',
        marginTop: 50,
        height: 50,
        alignItems: 'center'
    },
    pageCount: {
      fontWeight: '800',
    },
    pageCountWrapper: {
        paddingLeft: 50,
        flex: 3
    },
    linkIcon: { 
        paddingLeft: 100,
        flex: 2,
    } 
  });