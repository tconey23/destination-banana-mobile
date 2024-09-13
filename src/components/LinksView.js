import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import LinksBox from '../uiElements/LinksBox';
import ArticleSnippet from '../uiElements/ArticleSnippet';

const { width } = Dimensions.get('window'); // Get the screen width

function LinksView({ currentPages, addPage, handleLinkClick, currentIndex, setOnPage }) {
  const [imageSrc, setImageSrc] = useState();

  console.log(currentPages.length)

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
            <View style={styles.page}>
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
    backgroundColor: 'antiquewhite',
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
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center'
  },
});
