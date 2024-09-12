import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import LinksBox from '../uiElements/LinksBox';
import PageHead from '../uiElements/PageHead';
import PageThumbnail from '../uiElements/PageThumbnail';

function LinksView({ currentPages, addPage }) {
  const landingBackground = require('../../src/assets/beach_light.png');
  const [imageSrc, setImageSrc] = useState()

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
            <View style={styles.pageWrapper}>
              <PageHead currentPages={currentPages}/>
              <Text style={styles.title}>
                {page.title} 
              </Text>
              <PageThumbnail style={styles.pageThumbnail} imageSrc={imageSrc}/>
              <ScrollView style={styles.scrollView}>
                <LinksBox
                  key={index}
                  id={page.id}
                  links={page.links}
                  addPage={addPage}
                  setImageSrc={setImageSrc}
                  />
              </ScrollView>
            </View>
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
    marginVertical: 40,
    marginHorizontal: 30,
  },
  pageWrapper: {
    paddingTop: 10,
    flex: 1,
    // backgroundColor: 'blue',
    justifyContent: 'flex-start'
  },
  scrollView: {
    flex: 1
  }, 
  title: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 30,
    paddingBottom: -30,
    fontSize: 20,
  },
  pageThumbnail: {
    height: 100,
    backgroundColor: 'blue'
  }
});
