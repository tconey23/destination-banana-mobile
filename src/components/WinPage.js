import {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Pressable, Modal, Dimensions } from 'react-native';
import PagesView from './PagesView';

function WinPage({setOnPage, currentPages, currentIndex, allPages, setCurrentIndex, setOnLinksView}) {

    const [selectedLink, setSelectedLink] = useState()

    function handleReturn(){
        setSelectedLink(null)
        setOnPage('landing')
    }

    useEffect(() => {
        if(currentPages && currentIndex){
            currentPages[currentIndex] && setSelectedLink(currentPages[currentIndex].title)
        }
    }, [currentPages, currentIndex])

    return (
        <Modal
        style={styles.modal}
        animationType="slide"
        transparent={false}
        visible={selectedLink === 'Banana'}
        >
            <View style={styles.fullPage}>
                <Text>{`You won in ${currentPages.length} links!`}</Text>
                <Text>yay</Text>
                <Pressable style={styles.pressable} onPress={() => handleReturn()}>
                    <Text>Start a new game</Text>
                </Pressable>

                <PagesView
                    currentPages={currentPages}
                    allPages={allPages}
                    setCurrentIndex={setCurrentIndex}
                    setOnLinksView={setOnLinksView}
                    setOnPage={setOnPage}>
                </PagesView>
            </View>
        </Modal>
    )

}

export default WinPage

const styles = StyleSheet.create({
    fullPage: {
        flex:1,
        width: '100%',
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignItems: 'center',
        paddingVertical: 60,
        paddingHorizontal: 30,
    },
    pressable:{
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10,
        marginVertical: 50
    }
})