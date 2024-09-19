import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PickerSelectButton from './PickerSelectButton';

function LinksBox({ links, id, addPage, currentPages, handleLinkClick }) { 
  const [selectedTitle, setSelectedTitle] = useState([links[0].title, 0]);

  return (
    <ImageBackground source={require('../assets/realistic-old-paper.png')} style={styles.linksView}>
        <PickerSelectButton title={selectedTitle[0]} id={id} addPage={addPage} handleLinkClick={handleLinkClick} color={'yellow'} />
      <Picker
        selectedValue={selectedTitle[1]}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedTitle([links[itemIndex].title, itemIndex]);
        }}
        >
        {links && links.map((link, index) => (
          <Picker.Item key={index} label={link.title} value={index} />
        ))}
      </Picker>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  linksView: {
    marginTop: 5,
    alignItems: 'center',
    flexDirection: 'column',
    paddingVertical: 70,
    flex: 1,
  },
  picker: {
    flex:1,
    width: 250,
    fontWeight: '900',
    fontSize: 20,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    borderRadius: 20
  },
  linkLabel: {
    fontSize: 15,
    marginBottom: 15,
  },
  selectedText: {
    fontSize: 16,
    marginTop: 10,
    color: 'gray',
  },
  selectedLink: {
    fontSize: 20,
    marginVertical: 20,
    fontWeight: '900'
  },
  pickerItem: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  }
});

export default LinksBox;
