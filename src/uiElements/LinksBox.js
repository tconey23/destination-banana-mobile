import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PickerSelectButton from './PickerSelectButton';
import PulsatingCircle from './PulsatingCircle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const { width } = Dimensions.get('window');

function LinksBox({ links, id, addPage, currentPages, handleLinkClick }) {
  const [selectedTitle, setSelectedTitle] = useState([links[0].title, 0])
  const [linkIndex, setLinkIndex] = useState(0)

  const [background] = useState(require('../assets/realistic-old-paper.png'))



  return (
    <View style={styles.linksViewContainer}>
      <View style={styles.linksView}>
          <ScrollView style={styles.scroll}>
            <View style={styles.linksContainer}>
              {links && links.map((link, index) => (
                <View key={index} style={styles.titleContainer}>
                  <Pressable style={index === linkIndex ? styles.selectedTitle : styles.title} onPress={() => setLinkIndex(index)}>
                    <Text>{link.title}</Text>
                  </Pressable>
                  {index === linkIndex &&
                    <PulsatingCircle 
                      title={link.title}
                      id={id}
                      handleLinkClick={handleLinkClick}
                      style={styles.circle}
                    />
                  }
                </View>
                ))
              }
            </View>
          </ScrollView>
        </View>
      </View>

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
  linksContainer: {
    width: '100%',
    overflow: 'visible'
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 2,
    paddingHorizontal: 0,
    overflow: 'visible'
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    overflow: 'visible'
  },
  selectedTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'orange',
    width: '100%',
    overflow: 'visible'
  },
  scroll: {
    overflow: 'visible',
    // width: '80%'
  },
  circle: {
    zIndex: 10,
  },

linksViewContainer: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  overflow: 'hidden',
  width: width,
  borderRadius: 20
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
