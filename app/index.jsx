import { Alert, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Task from './components/task'
import StartUp from './components/startUp'
import { createContext, useContext, useEffect, useState } from "react";

export const ItemPortal=createContext()

export default function Index() {

  const [task,setTask] = useState("")
  const [taskItems,setTaskItems] = useState(['Have a Good Sleep','Food'])
  const ItemPortal_values={taskItems,setTaskItems}
  
  // SplashScreen.preventAutoHideAsync();
  const [startUpOpen,setStartUpOpen] = useState(true)

  function handelTask(){
    task=="" ? alert("nothing to add") : setTaskItems([...taskItems,task]);setTask("")
    Keyboard.dismiss()
    Alert.alert('yes',' yes alert',[{text:'ok',onPress:()=>console.log('ok pressed')}])
    // console.log(taskItems)
  }
  const empty=<>
        <View style={styles.empty}>
          <Text>No Task For Today : </Text>
        </View>
  </>

  setTimeout(()=>{
    setStartUpOpen(false)
  },3000)


  const homePage=
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Today's Task </Text>
      </View>
      <View style={styles.listContainer}>
        <ItemPortal.Provider value={ItemPortal_values}>
        {
          taskItems.length==0 ? 
            <View style={styles.middle}>
              <Text >No Task For Today :)</Text>
            </View>
          :
          taskItems.map((items,index)=>(
              <Task key={index} text={items} index={index} />
            ))
        }
        </ItemPortal.Provider>


      </View>
      <View style={styles.addContainer}>
        <KeyboardAvoidingView style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder="Add New Task" value={task} onChangeText={text=>setTask(text)}></TextInput>
          <TouchableOpacity style={styles.addWrapper} onPress={handelTask}>
            <View>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>




  return (
    <>
    {startUpOpen && <StartUp/>}
    {homePage}
    </>
  );
}



const styles = StyleSheet.create({
  container :{
    padding: 20,
    height:'100%',
    flex:1,
    gap:10,
    flexDirection:'column',
    // backgroundColor:"#ffffffff",
    listView:{
      height:"80%"
    },
  },
  headingContainer:{
    flex:'7%',
    borderBottomWidth:1,
    marginBottom:5,
    borderBottomColor:"#00000045",
    paddingBottom:10
  },
  heading:{
    fontSize:30,
    fontWeight:'bold'
  },
  middle:{
    height:'100%',
    justifyContent:'center',
    alignSelf:'center',
  },
  listContainer:{
    flex:'85%',
    height:'100%',
    backgroundColor:'#00ccff7a',
    borderRadius:20,
    padding:20,
    overflow:'scroll'
  },
  addContainer:{
    flex:'10%',
    justifyContent:'center',
  },
  writeTaskWrapper:{
    flexDirection:'row',
    // position:'absolute',
    // left:20,
    // right:20,
    // bottom:20,
    height:60,
    justifyContent:'space-between',
    alignItems:'center',
  },
  input:{
    borderRadius:24,
    // borderWidth:2,
    height:'100%',
    width:'83%',
    paddingHorizontal:20,
    backgroundColor:'#00ccffff',
    outlineColor:'#000000b2',
  },
  addWrapper:{
    borderRadius:'50%',
    height:'100%',
    aspectRatio:'1/1',
    // borderWidth:2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#00ccffff',
  },
  addText:{
    fontSize:20
  },
  
  
});