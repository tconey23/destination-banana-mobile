import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import LinksBox from '../uiElements/LinksBox';
import ArticleSnippet from '../uiElements/ArticleSnippet';

const { width } = Dimensions.get('window');

function LinksView({ currentPages, addPage, handleLinkClick, currentIndex, setOnPage }) {
  const [imageSrc, setImageSrc] = useState();
  const [background] = useState(require('../assets/realistic-old-paper.png'))


  return (
    <View style={styles.pagesWrapper}>
      <Swiper
       loop={false}
        index={currentPages.length -1}
        showsPagination={true}
        containerStyle={styles.swiperContainer}
        slideStyle={styles.slide}
        scrollEnabled={true}
        spaceBetween={1}
        activeSlideAlignment="center"
      >
        {currentPages.map((page, index) => (
          <View key={index} style={styles.slide}>
            <ImageBackground source={background} style={styles.page}>
              <View style={styles.textWrapper}>
                <Text style={styles.title}>
                  {page.title.replace(/_/g, ' ')}
                </Text>
              </View>
              <ArticleSnippet imageSrc={page.image} />
            </ImageBackground>
            <LinksBox
                key={index}
                id={page.id}
                links={page.links}
                currentPages={currentPages}
                handleLinkClick={handleLinkClick}
                addPage={addPage}
                setImageSrc={setImageSrc}
              />
          </View>
        ))}
      </Swiper>
    </View>
  );
}

export default LinksView;

const styles = StyleSheet.create({
  pagesWrapper: {
    flex: 1,
    width: width,
    shadowColor: 'black', 
    shadowOffset: 2,
    shadowRadius: 10,
    shadowOpacity: 1
  },
  swiperContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: width * 1
  },
  slide: {
    width: width-100,
    marginVertical: 20,
    borderRadius: 20,
    overflow: 'visible',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    marginVertical: -30,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  textWrapper: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginTop: 40,
    marginBottom: -30,
    padding: 10,
    borderRadius: 20,
  }
});
