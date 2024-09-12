import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function PageHead({currentPages}) {
    
    function followLink() {
        console.log(currentPages[currentPages.length.title])
    }

  return (
    <View style={styles.pageHeader}>
        <View style={styles.pageCount}>
            <Text>
                {currentPages.length} click{currentPages.length > 1 && 's'}
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
      paddingTop: 5,
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
        paddingTop: 5,
        marginBottom: -20, 
        paddingLeft: 100,
    } 
  });