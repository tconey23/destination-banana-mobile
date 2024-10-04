import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PickerSelectButton from './PickerSelectButton';
import BananaButton from './BananaButton';
import PulsatingCircle from './PulsatingCircle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faShuffle } from '@fortawesome/free-solid-svg-icons'
import { randomizeLinks } from '../../apiCalls'

const { width } = Dimensions.get('window');

function LinksBox({ links, id, addPage, currentPages, handleLinkClick }) {
  const [selectedTitle, setSelectedTitle] = useState(links[0].title)
  const [linkIndex, setLinkIndex] = useState(0)
  const [sortedLinks, setSortedLinks] = useState(links)


  const [background] = useState(require('../assets/realistic-old-paper.png'))

  function sortAlpha() {
    const sorted = [...links].sort((a, b) => {
      if (a.title < b.title) return -1
      if (a.title > b.title) return 1
      return 0
    })

    setSortedLinks(sorted)
  }

  function sortRandom() {
    console.log('in random')
    const randoLinks = randomizeLinks([...links])
    setSortedLinks(randoLinks)
  }

  console.log('sortedLinks', sortedLinks)

  return (
    <>
      <View style={styles.currentLinkContainer}>
        <View style={styles.currentLinkTitleContainer}>
          <Text style={styles.currentLinkTitle}>{selectedTitle}</Text>
        </View>
          <PulsatingCircle 
            title={selectedTitle}
            id={id}
            handleLinkClick={handleLinkClick}
            style={styles.circle}
          />
        </View>
      <View style={styles.wholePageContainer}>  
        <View style={styles.sortButtonsContainer}>
          <BananaButton onButtonPress={sortAlpha} color='lightgrey' buttonDepth={5} height={30} width={30} buttonImage='alphabetical'/>
          <BananaButton onButtonPress={sortRandom} color='lightgrey' buttonDepth={5} height={30} width={30} buttonImage='random'/>
        </View>
        <View style={styles.linksViewContainer}>
          <View style={styles.linksView}>
              <ScrollView style={styles.scroll}>
                <View style={styles.linksContainer}>
                  {links && sortedLinks && sortedLinks.map((link, index) => (
                    <View key={index} style={styles.titleContainer}>
                      <Pressable
                        style={index === linkIndex ? styles.selectedTitle : styles.title}
                        onPress={() => {
                          setLinkIndex(index)
                          setSelectedTitle(link.title)
                        }}
                      >
                          <Text style={styles.titleText}>{link.title}</Text>
                      </Pressable>
                    </View>
                    ))
                  }
                </View>
              </ScrollView>
            </View>
          </View>
      </View>
    </>

    //   <ImageBackground source={''} style={styles.linksView}>
    //   <PickerSelectButton title={selectedTitle[0]} id={id} addPage={addPage} handleLinkClick={handleLinkClick} color={'yellow'} />
    //   <View style={styles.pickerContainer}>
    //     <Picker
    //       selectedValue={selectedTitle[1]}
    //       style={styles.picker}
    //       onValueChange={(itemValue, itemIndex) => {
    //         setSelectedTitle([links[itemIndex].title, itemIndex]);
    //       }}
    //       >
    //       {links && links.map((link, index) => (
    //           <Picker.Item
    //             key={index}
    //             label={link.title}
    //             value={index}
    //             backgroundColor={selectedTitle[1] === index ? 'blue' : 'black'}/>
    //       ))}
    //     </Picker>
    //   </View>
    // </ImageBackground>
  )
}

const styles = StyleSheet.create({
  wholePageContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  currentLinkContainer: {
    width: '105%',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // position: 'relative',
    marginVertical: 25,
    // borderRadius: '20'
    // height: 25
  },
  circle: {
    zIndex: 10,
  },
  currentLinkTitleContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'orange',
    height: 26
  },
  currentLinkTitle: {
    flexDirection: 'column',
    width: '100%',
    textAlign: 'center',
    height: 25,
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  linksContainer: {
    width: '100%',
    overflow: 'visible',
    alignItems: 'center',
    paddingTop: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '98%',
    margin: 2,
    paddingHorizontal: 0,
    overflow: 'visible',
  },
  titleText: {
    fontSize: 16,
    textAlign: 'center'
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    overflow: 'visible',
    paddingVertical: 2,
  },
  selectedTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'orange',
    width: '100%',
    overflow: 'visible',
    borderRadius: 10,
    paddingVertical: 2,
  },
  scroll: {
    overflow: 'visible',
    // width: '80%'
  },
  sortButtonsContainer: {
    position: 'absolute',
    width: '80%',
    top: -5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 15,
  },
  linksViewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
    width: width,
    borderRadius: 20,
    // paddingTop: 20
  },

  linksView: {
    marginTop: 15,
    width: '80%',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  pickerContainer: {
    width: 300,
    height: 250,
    alignItems: 'center',
    overflow: 'hidden',
    // backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  picker: {
    flex:1,
    width: 250,
    fontWeight: '900',
    // backgroundColor: 'rgba(115,115,115,0.3)',
    justifyContent: 'center',
    borderRadius: 20, 
  },
});

export default LinksBox;
