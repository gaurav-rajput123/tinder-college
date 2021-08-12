 import React from 'react'
 import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconButton } from 'react-native-paper'
// import { white } from 'react-native-paper/lib/typescript/styles/colors'
 
 const BottomBar = () => {
     return (
         <View>
             <View style={styles.container}>
                 <TouchableOpacity>
                    <IconButton icon="backup-restore" color="orange" style={styles.reload, styles.bottomIcons} size={42}/>
                 </TouchableOpacity>
                 <TouchableOpacity>
                    <IconButton icon="close-circle-outline" color="red" style={styles.reload, styles.bottomIcons} size={42}/>
                 </TouchableOpacity>
                 <TouchableOpacity>
                    <IconButton icon="heart" color="#E0115F" style={styles.reload, styles.bottomIcons} size={42}/>
                 </TouchableOpacity>
                 <TouchableOpacity>
                    <IconButton icon="star" color="#2643ff" style={styles.reload, styles.bottomIcons} size={42}/>
                 </TouchableOpacity>
             </View>
         </View>
     )
 }
 
 export default BottomBar
 
 const styles = StyleSheet.create({
     bottomIcons: {
         backgroundColor: "white"
     },
     container: {
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "space-between"
     }
 })
 