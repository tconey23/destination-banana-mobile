import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PickerSelectButton from './PickerSelectButton';

function LinksBox({ links, id, addPage, currentPages, handleLinkClick }) { 
  const [selectedTitle, setSelectedTitle] = useState([links[0].title, 0])
  const [background] = useState(require('../assets/realistic-old-paper.png'))

  return (
    <ImageBackground source={''} style={styles.linksView}>
      <PickerSelectButton title={selectedTitle[0]} id={id} addPage={addPage} handleLinkClick={handleLinkClick} color={'yellow'} />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedTitle[1]}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedTitle([links[itemIndex].title, itemIndex]);
          }}
          >
          {links && links.map((link, index) => (
            <Picker.Item key={index} label={link.title} value={index}/>
          ))}
        </Picker>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  linksView: {
    marginTop: 5,
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
  },
  pickerContainer: {
    width: 250,
    height: 250,
    borderRadius: 20,
    overflow: 'hidden',
    // backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  picker: {
    flex:1,
    width: 250,
    fontWeight: '900',
    backgroundColor: 'rgba(115,115,115,0.3)',
    justifyContent: 'center',
    borderRadius: 20, 
  },
});

export default LinksBox;
