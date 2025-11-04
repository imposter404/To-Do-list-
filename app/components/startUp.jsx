import { useEffect, useRef } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";
import { FadeIn } from "react-native-reanimated";

export default function StartUp() {
  const fadeAnim = useRef(new Animated.Value(1)).current; // Initial opacity is 1 (fully visible)

  const fadeOut = () => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0, 
        duration: 1000, 
        useNativeDriver: false, 
      }
    ).start();
  };
  
  // setTimeout(()=>{
  //   fadeOut()
  // },2000)

return(
      <Animated.View style={[styles.container,{opacity: fadeAnim}]}>
        <Text style={styles.heading1}>Welcome</Text>
        <Text style={styles.heading2}>Back</Text>
        {/* <Button title="Fade Out" onPress={fadeOut} /> */}
      </Animated.View>
)}

const styles = StyleSheet.create({
  container :{
    backgroundColor:'#002129ff',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    color:'white'
  },
  heading1:{
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    letterSpacing:10,
    paddingVertical:20,
  },
  heading2:{
    color:'white',
    letterSpacing:5,
    fontSize:20,
  }
})