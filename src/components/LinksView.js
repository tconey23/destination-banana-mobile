import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView, ImageBackground, Image, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';
import LinksBox from '../uiElements/LinksBox';
import PageHead from '../uiElements/PageHead';
import ArticleSnippet from '../uiElements/ArticleSnippet';

function LinksView({ currentPages, addPage, handleLinkClick, allPages, toggleGameViews, currentIndex, setOnPage }) {
  const [imageSrc, setImageSrc] = useState()

  return (
    <View style={styles.pagesContainer}>
      <Swiper
        index={currentIndex}
        containerStyle={styles.swiperContainer}
        slideStyle={styles.slide}
        showsButtons={true}
        autoplay={false}
        loop={false}
        activeSlideAlignment="center"
      >
        {currentPages.map((page, index) => (
          <View key={index} style={styles.pageContainer}>
            <View style={styles.pageWrapper}>
              <Text style={styles.title}>
                {page.title} 
              </Text>
              <ArticleSnippet style={styles.pageThumbnail} imageSrc={page.image}/>
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
  pagesContainer: {
    flex: 1
  },
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
  },
  swiperContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250, // Adjust the width to make space for the previous and next slides
    height: 300, // Adjust the height as needed
  }
});
