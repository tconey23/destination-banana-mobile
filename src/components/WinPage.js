import {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Modal, Dimensions } from 'react-native';
import PagesView from './PagesView';
import BananaButton from '../uiElements/BananaButton'

function WinPage({setOnPage, currentPages, currentIndex, allPages, setCurrentIndex, setOnLinksView, setIsWinner}) {

    const [selectedLink, setSelectedLink] = useState()

    function handleReturn(){
        setSelectedLink(null)
        setOnPage('landing')
        setIsWinner(false)
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
        // visible={selectedLink === 'Banana'}
        >
            <View style={styles.fullPage}>
                <Text>{`You won in ${currentPages.length} links!`}</Text>
                <Text>yay</Text>
                <BananaButton color='yellow' onButtonPress={handleReturn} buttonText="Play Again!" />
                <View style={styles.pages}>
                    {currentPages.map((page) => <Text style={styles.links}>🍌{page.title}</Text>)}
                </View>
                {/* <PagesView
                    currentPages={currentPages}
                    allPages={allPages}
                    setCurrentIndex={setCurrentIndex}
                    setOnLinksView={setOnLinksView}
                    setOnPage={setOnPage}>
                </PagesView> */}
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
        backgroundColor: 'yellow'
    },
    pages: {
        marginTop: 30
    },
    links: {
        fontWeight: 'bold'
    }

    // pressable:{
    //     borderColor: 'black',
    //     borderStyle: 'solid',
    //     borderWidth: 1,
    //     padding: 10,
    //     marginVertical: 50
    // }
})