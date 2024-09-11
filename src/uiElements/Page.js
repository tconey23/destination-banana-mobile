import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'

function Page({title, links, id}) { 

  return (
    <View style={styles.pageView}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.linksView}>
            {links && links.map((link) => (
                <Text key={id}>{link.title}</Text>
            ))}
        </View>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
    pageView: {
        // height: '95%',
        // backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        flex: 1,
        marginTop: 50,
    },
    title:{
      width: '100%', 
      textAlign: 'center',
      fontWeight: 'bold'
    //   backgroundColor: 'green',
    //   height: '100%'
    },
      linksView: {
        // flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        height: '90%',
        width: '90%',
        // backgroundColor: 'red'
      },
   
  })
