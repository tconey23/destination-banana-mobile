import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PickerSelectButton from './PickerSelectButton';

function LinksBox({ links, id, addPage, currentPages, handleLinkClick }) {
  const [selectedTitle, setSelectedTitle] = useState([links[0].title, 0])
  const [background] = useState(require('../assets/realistic-old-paper.png'))

  const [linkIndex, setLinkIndex] = useState(0)

  return (
    <View style={styles.linksView}>
        <ScrollView>
          <View style={styles.linksContainer}>
            {links && links.map((link, index) => (
              <Pressable style={styles.titleContainer} onPress={() => setLinkIndex(index)}>
                <Text style={index === linkIndex ? styles.selectedTitle : styles.title}>{link.title}</Text>
                {index === linkIndex && <Text style={styles.selectedButton}>Click</Text>}
              </Pressable>
              ))
            }
          </View>
        </ScrollView>
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    margin: 2,
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    width: '100%'
  },
  selectedTitle: {
    textAlign: 'center',
    backgroundColor: 'orange',
    width: '100%'
  },
  selectedButton: {
    position: 'absolute',
    right: -20,
  },




  linksView: {
    flex: 1,
    marginTop: 15,
    width: 300,
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
