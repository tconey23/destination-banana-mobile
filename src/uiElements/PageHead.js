import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faLink} size={20} color="#000" />
        </Pressable>
    </View>
  )
}

export default PageHead

const styles = StyleSheet.create({
    pageCount: {
      width: '50%',
      paddingLeft: 50,
      paddingTop: 40,
      marginBottom: -20,
      fontWeight: 'bold',
    },
    pageHeader: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    linkIcon: { 
        width: '50%',
        paddingTop: 40,
        marginBottom: -20, 
        paddingLeft: 100,
    } 
  });