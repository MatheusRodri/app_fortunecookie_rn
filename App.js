import React, { useState } from 'react';
import { View, StyleSheet, Text, Image,TouchableOpacity } from 'react-native';


export default function App() {
  const [image, setImage] = useState(require("./src/biscoito.png"));

  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
      />

      <Text style={styles.textPhrases}>
        "First Phase"
      </Text>
      <TouchableOpacity style={styles.button} onClick={()=>{}}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Break cookie</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button,{marginTop:15,borderColor:"#121212"}]} onClick={()=>{}}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnText,{color:"#121212"}]}>Break cookie</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 230,
    height: 230,
  },
  textPhrases:{
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 3,
    borderRadius:25
  },
  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText:{
    fontSize:20,
    color: "#dd7b22",
    fontWeight: 'bold',
  }
})