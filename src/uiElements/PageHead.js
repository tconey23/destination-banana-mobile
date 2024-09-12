import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function PageHead({currentPages, allPages, setOnPage}) {
    
    function followLink() {
        console.log('click')
        setOnPage('landing')
    }

  return (
    <View style={styles.pageHeader}>
        <View style={styles.pageCount}>
            <Text>
                {allPages.length - 1} click{currentPages.length > 1 && 's'}
            </Text>
        </View>
        <Pressable onPress={() => followLink()} style={styles.linkIcon}>
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