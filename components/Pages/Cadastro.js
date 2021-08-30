import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,Alert
} from 'react-native';
import firebase from 'firebase';
export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  function cadastrar() {
    firebase.auth().createUserWithEmailAndPassword(email,senha).then(()=>{
        Alert.alert("Atenção","Dados cadastrados com sucesso. Faça login..");
        navigation.navigate('Login',{email})
      }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode == "auth/email-already-in-use"){
          Alert.alert("Atenção","Este e-mail já tem cadastro.","Faça login...");
        }else
        if(errorCode == "euth/weak-password"){
          Alert.alert("Senha","Deve ter no minimo 6 Caracteres.");
        }else
        if(errorCode == "auth/invalid-email"){
          Alert.alert("E-mail","Este Email é ivalido.");
        }
        Alert.alert(errorCode);
      });
  }
  return (
    <View style={estilo.container}>
      <View style={estilo.cont2}>
        <Image
          style={estilo.img}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Google_Contacts_logo.png/170px-Google_Contacts_logo.png',
          }}
        />
        <Text style={estilo.tex1}> Cadastre seus Dados </Text>
      </View>
      <View style={estilo.con1}>
        <TextInput
          style={estilo.campo1}
          onChangeText={(email) => setEmail(email)}
          value={email}
          placeholder="Digite o email"
        />
        <TextInput
          secureTextEntry={true}
          style={estilo.campo}
          onChangeText={(senha) => setSenha(senha)}
          value={senha}
          placeholder="Digite sua senha"
        />

        <TouchableOpacity
          style={estilo.btn}
          onPress={() => {
            cadastrar();
          }}>
          <Text style={estilo.btntex}> Cadastrar </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={estilo.btntex}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0E68C',
  },
  con1: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 310,
    height: 180,
    textAlign: 'center',
    backgroundColor: '#00BFFF',
    borderRadius: 10,
    marginTop: 30,
  },
  cont2: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 0,
  },
  tex1: {
    textAlign: 'center',
    fontSize: 30,
  },
  campo: {
    width: 300,
    backgroundColor: '#ffffff',
    marginVertical: 4,
    borderRadius: 5,
    alignSelf: 'center',
    textAlign: 'center',
  },
  campo1: {
    width: 300,
    backgroundColor: '#ffffff',
    marginVertical: 4,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 30,
    textAlign: 'center',
  },
  img: {
    width: 150,
    height: 150,
    marginTop: 0,
    alignSelf: 'center',
  },
  btntex: {
    width: 90,
    alignSelf: 'center',
    backgroundColor: '#FFD700',
    marginTop: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 17,
  },
});
