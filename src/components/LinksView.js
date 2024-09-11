import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper'
import Links from '../uiElements/Links'

function LinksView({currentPages, addPage}) {

  return (
    <Swiper
    index={currentPages.length - 1}
    style={styles.wrapper}
    showsButtons={true}  
    autoplay={false}       
    loop={false}          
    dotColor="gray"      
    activeDotColor="blue" 
  >

        {currentPages.map((page) => (
          <View style={styles.pageContainer}>
          <Text style={styles.title}>{page.title}</Text>
          <ScrollView>
            <Links
              key={page.id}
              id={page.id}
              title={page.title}
              links={page.links}
              addPage={addPage}
              />
          </ScrollView>
              </View>
        ))}
    
  </Swiper>
      
  )
}

export default LinksView

const styles = StyleSheet.create({
  pageContainer:{
    flex: 1,
    
  },
  wrapper: {
    height: '80%'
  },
  title:{
    width: '100%', 
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 30,
    paddingBottom: -30,
    justifyContent: 'center',
    fontSize: 20
  //   backgroundColor: 'green',
  //   height: '100%'
  },
})