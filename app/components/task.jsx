import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ItemPortal } from '../index';





function Task(props){
    const {taskItems,setTaskItems}=useContext(ItemPortal)
    function deleteItems(index){
        console.log(taskItems)
        taskItems.splice(index,1)
        setTaskItems([...taskItems])
    }

console.log(props)
    return(
        <View style={styles.items}>
            <View style={styles.left}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.textColor}>{props.text}</Text>  
            </View>
                <TouchableOpacity style={styles.circle}  onPress={()=> deleteItems(props.index)}></TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    items:{
        color:'#FFF',
        // backgroundColor:'#bbbbbbff',
        backgroundColor:'#001d5cff',
        paddingVertical:20,
        paddingHorizontal:10,
        marginVertical:5,
        marginBottom:15,
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        boxShadow:"0 13px 15px -16px #000",
    },
    left:{
        flexDirection:'row',
        maxWidth: '80%',
        overflow:'hidden'
    },
    square:{
        width:24,
        height:24,
        marginLeft:5,
        backgroundColor:'#1e8febb2',
        borderRadius:5,
        marginRight:10
    },
    circle:{
        width:24,
        height:24,
        // backgroundColor:'#1e8febff',
        borderColor:'#1e8febff',
        borderWidth:2,
        borderRadius:50,
        marginRight:10
    },
    textColor:{
        color:'#ffffffff',
    }
})

export default Task