import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PickerSelectButton from './PickerSelectButton';

function Links({ links, id, addPage, setImageSrc }) { 
  const [selectedTitle, setSelectedTitle] = useState(['Select an option', 0]);

  return (
    <View style={styles.linksView}>
      <Text style={styles.selectedLink}>{selectedTitle[0]}</Text>
      {selectedTitle[0] !== 'Select an option' && 
        <PickerSelectButton title={selectedTitle[0]} setImageSrc={setImageSrc}/>
      }
      <Picker
        selectedValue={selectedTitle[1]}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedTitle([links[itemIndex].title, itemIndex]);
          console.log(links[itemIndex].title);
        }}
      >
        {links && links.map((link, index) => (
          <Picker.Item key={index} label={link.title} value={index} />
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

export default Links;
