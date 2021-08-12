import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Button, TextInput } from 'react-native-paper'

const ProfileFullName = ({navigation, fullName}) => {
    const [name, setName] = useState("")
    const handleSubmit = () => {

        console.log("submitPressed")
        navigation.navigate("useryear")
    }
    const flipRef = useRef()
    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}><View style={{flex: 1, backgroundColor: "white"}}>
            {/* <ImageBackground  source={back} style={{flex: 1, justifyContent: 'center'}} ref={reference}> */}
                <View style={styles.itemContainer}>
                    <Text style={styles.heading}>Complete your profile</Text>
                    <View style={[styles.flipQuestions]} ref={flipRef}>
                        <View style={styles.questionBox}>
                            <Text style={styles.questionLabel}>My Name Is</Text>
                            <TextInput maxLength={15} mode='flat' underlineColor="pink" value={name} onChangeText={(value)=>setName(value)} style={[styles.input]} theme={{ colors: { primary: 'pink',underlineColor:'transparent',}}}/>
                        </View>
                    </View>
                    <LinearGradient style={styles.gradient} start={{x: 0.5, y: 0.5}} end={{x: 1, y: 0.5}} colors={["#ec008c", "#fc6767"]}>
                        <TouchableOpacity><Button mode="contained" labelStyle={{fontSize: 18, letterSpacing: 4}} style={{backgroundColor: "transparent", borderRadius: 24}} onPress={handleSubmit}>Next</Button></TouchableOpacity>
                    </LinearGradient>
                </View>
            {/* </ImageBackground> */}
        </View>
        </TouchableWithoutFeedback>
    )
}

export default ProfileFullName

const styles = StyleSheet.create({
    itemContainer: {
        flex:1,
        backgroundColor: "white"
        // paddingHorizontal: 60,
        // justifyContent: "center"
    },
    input: {
        backgroundColor: "white",
        fontSize: 20,
        marginRight: 90,
        letterSpacing: 2
    },
    heading: {
        marginTop: 24,
        paddingHorizontal: 24,
        fontSize: 30,
        fontWeight: "bold"
    },
    gradient: {
        borderRadius: 24,
        marginTop: 48,
        marginHorizontal: 36
    },
    flipQuestions: {
        marginTop: 36,
        justifyContent: "center",
        // backgroundColor: "red",
        // alignItems: 'center',
        marginHorizontal: 24,
    },
    questionLabel: {
        fontSize: 20,
        color: 'grey'
    }
})
