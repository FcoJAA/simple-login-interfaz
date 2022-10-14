import React from 'react';
import { Button, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerbig}
    >
      <View style={styles.container}>
        <View style={styles.panel}>
          <View style={styles.divs}>
            <Text style={styles.title}>Name</Text>
            <TextInput style={styles.input} placeholder="Enter your Name"></TextInput>
          </View>
          <View style={styles.divs}>
            <Text style={styles.title}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter your Password" secureTextEntry={true}></TextInput>
          </View>
          <View>
             <Button title='Login' color={"blue"}></Button>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footer_text}>Prueba realizada para crear una pequeña interfaz de logeo usando los recursos de React-Native.Prueba realizada para crear una pequeña interfaz de logeo usando los recursos de React-Native.</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  containerbig:{
    flex:1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#99ffff',
  },
  footer:{
    backgroundColor: '#99ffff',
    padding: 5
  },
  footer_text:{
    textAlign:"center",
    fontSize:10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input:{
    backgroundColor:"#ffffff",
    width:"99%",
    textAlign: "center",
    height:"35%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    fontSize:18,
  },
  panel:{
    width: "89%",
    height: "45%",
    borderRadius:20,
    borderWidth:1,
    borderColor:"black",
    justifyContent: "center",
    alignItems: "center",
  },
  divs:{
    width: "85%",
    height: "40%",
  },
});
