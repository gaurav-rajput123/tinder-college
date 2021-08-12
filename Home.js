import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import BottomBar from './BottomBar'

import SwipeableScreen from './SwipeableScreen'
const Home = ({data}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const updateIndex = (index) => {
         
        setCurrentIndex(index)  

    }

    useEffect(()=>{
        console.log("index changed: ", currentIndex)
    }, [currentIndex])
    return (
        <View style={styles.container}>
            <View style={styles.swipeableContainer}>
                {data.length ? (
                    data.map((cardData, index)=>{
                        return (
                            index == currentIndex ? (<View key={index} index={currentIndex}><SwipeableScreen currentIndex={currentIndex} userList={data} updateIndex={updateIndex}/></View>) : null
                        )
                    })
                ): (<View><Text>No data available to show</Text></View>)}
                
            </View>
            <View style={styles.bottomBarContainer}>
                <BottomBar/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    ImageViewContainer: {
        margin: 12,
        backgroundColor: "white",
        borderRadius: 12,
        
    },
    ImageViewImage: {
        height: 450,
        
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    ImageViewImageInfo: {
        paddingBottom: 8,
        paddingTop: 8
    },
    ImageViewFirstName: {
        fontSize: 30,
        marginLeft: 12
    },
    ImageViewEmail: {
        fontSize: 14,
        marginLeft: 12
    }
})



export default Home


