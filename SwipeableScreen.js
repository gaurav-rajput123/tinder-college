import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'

const SwipeableScreen = ({currentIndex, userList, updateIndex}) => {
    const [nextCardIndex, setNextCardIndex] = useState(0)
    const nextCard = () => {
        return (
            <View style={{width: "100%"}}>
                <ImageView profile={userList[nextCardIndex]}/>
            </View>
        )
    }

    const changeIndex = () => {
        if(currentIndex == userList.length - 1){
            updateIndex(0)
        }else{
            updateIndex(currentIndex+1)
        }
    }

    const likeUser = () => {
        // Like user actions

        changeIndex()
    }
    
    const dislikeUser = () => {
        // Dislike user Actions

        changeIndex()
    }
    useEffect(()=>{
        if(currentIndex == userList.length - 1){
            setNextCardIndex(0)
        }else{
            setNextCardIndex(currentIndex + 1)
        }
    })

    return (
        <Swipeable 
        friction={1.5}
        leftThreshold={150}
        rightThreshold={150}
        renderLeftActions={nextCard}
        renderRightActions={nextCard}
        onSwipeableOpen={changeIndex}
        onSwipeableRightOpen={likeUser}
        onSwipeableLeftOpen={dislikeUser}
        >
            <ImageView profile={userList[currentIndex]}/>
         </Swipeable>
    )
}


const ImageView = ({profile}) => {
    return (<View style={styles.ImageViewContainer}>
        <TouchableOpacity>
            <Image source={{uri: profile["avatar"]}} style={styles.ImageViewImage}/>
            <TouchableOpacity>
                <View style={styles.ImageViewImageInfo}>
                    <Text style={styles.ImageViewFirstName}>{profile.first_name}</Text>
                    <Text style={styles.ImageViewEmail}>{profile.email}</Text>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
    </View>)
}

export default SwipeableScreen


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