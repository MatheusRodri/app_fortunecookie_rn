import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';


export default function App() {
  const [image, setImage] = useState(require("./src/biscoito.png"));
  const [textPhrases, setTextPhrases] = useState("");

  let phrases = [
    'Siga os bons e aprenda com eles',
    'O bom-senso vale mais do que muito conhecimento',
    'O riso é a menor distancia entre duas pessoas',
    'deixe de lado  as preocupações e seja feliz',
    'Realize o obvio, pense no improvavel e conquiste o impossivel',
    'Acredite em milagres, mas não dependa deles',
    'A maior barreira para o sucesso é o medo do fracasso'
  ];

  function breakCookie() {
    let randomNumber = Math.floor(Math.random() * phrases.length);
    setImage(require("./src/biscoitoAberto.png"))
    setTextPhrases('" ' + phrases[randomNumber] + '" ');
  }

  function resetCookie(){
    setImage(require("./src/biscoito.png"))
    setTextPhrases("");
  }

  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
      />

      <Text style={styles.textPhrases}>
        {textPhrases}
      </Text>
      <TouchableOpacity style={styles.button} onPress={breakCookie}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Break cookie</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={resetCookie} style={[styles.button, { marginTop: 15, borderColor: "#121212" }]} onClick={() => { }}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, { color: "#121212" }]}>Break cookie</Text>
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
  textPhrases: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 3,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    color: "#dd7b22",
    fontWeight: 'bold',
  }
})