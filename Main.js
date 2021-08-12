import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import BottomBar from './BottomBar'

const Main = ({users, currentIndex}) => {
    const [username, setUsername] = useState(null)
    const [info, setInfo] = useState(null)
    useEffect(()=>{
        setUsername(users[currentIndex].first_name)
        setInfo(users[currentIndex].email)
        console.log(username, info)
    }, [])
    return (
        <View style={{backgroundColor: "#EBEBEB", flex: 1}}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={()=>null} >
                        <Image source={{uri: users[currentIndex].avatar }} style={styles.image}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileDetails}>
                    <View style={styles.foreInfo}> 
                        <Text style={styles.first_name}>{username}</Text>
                        <Text style={styles.age}>{users[currentIndex].id}</Text>
                    </View>
                    <Text style={styles.info}>{info}</Text>
                </View>
            </View>
            <View style={styles.bottomToolBar}> 
                <BottomBar/> 
            </View>
        </View>
        // <View style={{backgroundColor: "black", flex: 1}}><Text>hello</Text></View>
    )
}

export default Main 

const styles = StyleSheet.create({
    imageContainer: {
        elevation: 5,
        height: 460
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 12,
    },
    first_name: {
        fontSize: 24,
        color: "black",
    },
    info: {
        fontSize: 16,
        color: "grey",
        marginBottom: 12
    },
    profileDetails: {
        paddingTop: 8,
        paddingHorizontal: 12,
    },
    container: {
        margin: 12,
        backgroundColor: "#ffffff",
        borderRadius: 12,
        marginBottom: 6,
        flex: 1
    },
    foreInfo: {
        display: "flex",
        flexDirection: "row"
    },
    age: {
        fontSize: 12,
        position: "relative",
        bottom: -2,
        left: 8,
        color: "black"
    },
    bottomToolBar: {
        // marginTop: 12
        marginBottom: 18
    }
})
