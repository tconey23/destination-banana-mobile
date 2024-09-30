import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';
import LinksBox from '../uiElements/LinksBox';
import ArticleSnippet from '../uiElements/ArticleSnippet';
import { Easing } from 'react-native-reanimated'

const { width } = Dimensions.get('window');

function LinksView({ currentPages, addPage, handleLinkClick, currentIndex, setOnPage }) {
  const [imageSrc, setImageSrc] = useState();
  const [background] = useState(require('../assets/realistic-old-paper.png'))
  const [thisIndex, setThisIndex] = useState(currentPages.length - 2)


  useEffect(() => {
    setThisIndex(currentPages.length - 1)
  }, [currentPages.length])

  return (
    <View style={styles.pagesWrapper}>
      <Swiper
        loop={false}
        showsButtons={true}
        easing={Easing.ease}
        index={thisIndex}
        showsPagination={true}
        containerStyle={styles.swiperContainer}
        slideStyle={styles.slide}
        scrollEnabled={true}
        spaceBetween={1}
        activeSlideAlignment="center"
      >
        {currentPages.map((page, index) => (
          <View key={index} style={styles.slide}>
            <ImageBackground source={''} style={styles.page}>
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
    marginBottom: 50,
    borderRadius: 20,
    overflow: 'visible',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
    borderRadius: 20
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  textWrapper: {
    marginTop: 20,
    borderRadius: 20,
  }
});
