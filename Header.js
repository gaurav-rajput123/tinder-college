import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Appbar } from 'react-native-paper'

const Header = () => {
    const [activeChat, setActiveChat] = useState(false)
    const [activeFire, setActiveFire] = useState(false)
    const [activeSetting, setActiveSetting] = useState(false)
    const makeInactive = () => {
        setActiveChat(false)
        setActiveFire(false)
        setActiveSetting(false)
    }
    const activeNotation = {
        borderBottomWidth: 2,
        borderBottomColor: "white",
    }
    useEffect(()=>{
        makeInactive()
        setActiveFire(true)
    }, [])
    return (
        <Appbar style={styles.appbar}>
            <StatusBar style="light"/>
            <TouchableOpacity style={{flexGrow: 1}} onPress={()=>{
                makeInactive();
                setActiveChat(true)
            }}>
                <View style={[styles.headerButtonContainer, activeChat ? activeNotation : null]}>
                    <Appbar.Action icon="chat" style={styles.icon} color="white" size={34}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexGrow: 1}}
            onPress={()=>{
                makeInactive();
                setActiveFire(true)
            }}>
                <View style={[styles.headerButtonContainer, activeFire ? activeNotation : null]}>
                    <Appbar.Action icon="fire" style={styles.icon} color="white" size={34}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexGrow: 1}} onPress={()=>{
                makeInactive();
                setActiveSetting(true)
            }}>
                <View style={[styles.headerButtonContainer, activeSetting ? activeNotation : null]}>
                    <Appbar.Action icon="account-settings" style={styles.icon} color="white" size={34}/>
                </View>
            </TouchableOpacity>
        </Appbar>
    )
}

export default Header

const styles = StyleSheet.create({
    appbar: {
        paddingTop: 32,
        justifyContent: "space-between",
        height: "auto",
        backgroundColor: "#FD297B"
    },
    headerButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
      
        flexGrow: 1
    },
    icon: {
        color: "white",
    }
}) 
