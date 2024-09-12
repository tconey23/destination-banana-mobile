import React from 'react';
import { StyleSheet, View, Text, ScrollView, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import LinksBox from '../uiElements/LinksBox';
import PageHead from '../uiElements/PageHead';

function LinksView({ currentPages, addPage }) {
  const landingBackground = require('../../src/assets/beach_light.png');
  
  return (
    <ImageBackground source={landingBackground} style={{ width: '100%', height: '120%', flex: 1 }} resizeMode="cover">
      <Swiper
        index={currentPages.length - 1}
        style={styles.wrapper}
        showsButtons={true}
        autoplay={false}
        loop={false}
      >
        {currentPages.map((page, index) => (
          <View key={index} style={styles.pageContainer}>
            <PageHead currentPages={currentPages}/>
            <Text style={styles.title}>
              {page.title} 
            </Text>
            <ScrollView>
              <LinksBox
                key={index}
                id={page.id}
                links={page.links}
                addPage={addPage}
              />
            </ScrollView>
          </View>
        ))}
      </Swiper>
    </ImageBackground>
  );
}

export default LinksView;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'antiquewhite',
    margin: 30,
  },
  wrapper: {
    height: '80%',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 30,
    paddingBottom: -30,
    justifyContent: 'center',
    fontSize: 20,
  },
  pageCount: {
    paddingLeft: 50,
    paddingTop: 10,
    marginBottom: -20,
    fontWeight: 'bold',
  },
});
