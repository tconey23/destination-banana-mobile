import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function PageHead({allPages, returnHome, currentPages}) {
    console.log('cp length', currentPages.length)
    
  return (
    <View style={styles.pageHeader}>
        <View style={styles.pageCount}>
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
    pageCount: {
      width: '50%',
      paddingLeft: 50,
      fontWeight: 'bold',
    },
    pageHeader: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 50,
    },
    linkIcon: { 
        width: '50%',
        paddingLeft: 100,
    } 
  });