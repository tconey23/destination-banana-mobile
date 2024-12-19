import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Dimensions, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';
import LinksBox from '../uiElements/LinksBox';
import ArticleSnippet from '../uiElements/ArticleSnippet';
import { Easing } from 'react-native-reanimated'

const { width } = Dimensions.get('window')

function LinksView({ currentPages, addPage, handleLinkClick, currentIndex, setOnPage }) {
  const [imageSrc, setImageSrc] = useState()
  const [background] = useState(require('../assets/realistic-old-paper.png'))
  const [thisIndex, setThisIndex] = useState(currentPages.length - 2)

  const swiperRef = useRef(null);

  useEffect(() => {
    setThisIndex(currentPages.length - 1)
  }, [currentPages.length])

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.scrollTo(thisIndex)
    }
  }, [thisIndex])



  return (
    <View style={styles.pagesWrapper}>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsButtons={true}
        easing={Easing.ease}
        showsPagination={true}
        containerStyle={styles.swiperContainer}
        slideStyle={styles.slide}
        scrollEnabled={true}
        spaceBetween={1}
        activeSlideAlignment="center"
      >
        {currentPages.map((page, index) => (
          <View key={index} style={styles.page}>
            <Text style={styles.title}>
              {page.title.replace(/_/g, ' ')}
            </Text>
            <ArticleSnippet imageSrc={page.image} />
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
    shadowOpacity: .3
  },
  swiperContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: width
  },
  page: {
    width: width-100,
    alignItems: 'center',
    marginBottom: 50,
    borderRadius: 20,
    overflow: 'visible',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 0,
    // borderStyle: 'solid',
    // borderColor: "red",
    // borderWidth: 2,
  },
  title: {
    color: 'black',
    marginVertical: 5,
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
  },
});
