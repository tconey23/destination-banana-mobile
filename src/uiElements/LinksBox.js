import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PickerSelectButton from './PickerSelectButton';

function LinksBox({ links, id, addPage, currentPages, handleLinkClick }) { 
  const [selectedTitle, setSelectedTitle] = useState([links[0].title, 0]);

  return (
    <View style={styles.linksView}>
      <Text style={styles.selectedLink}>{selectedTitle[0]}</Text>
        <PickerSelectButton title={selectedTitle[0]} id={id} addPage={addPage} handleLinkClick={handleLinkClick} color={'yellow'} />
      <Picker
        selectedValue={selectedTitle[1]}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedTitle([links[itemIndex].title, itemIndex]);
          console.log(links[itemIndex].title); 
        }}
      >
        {links && links.map((link, index) => (
          <Picker.Item key={index} label={link.title} value={index}/>
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  linksView: {
    marginTop: 5,
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  picker: {
    height: 50,
    width: 250,
  },
  linkLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedText: {
    fontSize: 16,
    marginTop: 10,
    color: 'gray',
  },
  selectedLink: {
    fontSize: 25,
    marginVertical: 15,
  }
});

export default LinksBox;
