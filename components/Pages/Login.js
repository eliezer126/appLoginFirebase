import React, {useState,useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import Firebase from '../Firebase';

export default function Login({navigation}){
  const [email,setEmail] = useState(null);
  const [senha,setSenha] = useState(null);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function dados(user){
    setUser(user);
    if(initializing) setInitializing(false);
  }
  function logar(){
    Firebase.auth().signInWithEmailAndPassword(email,senha).then(()=>{
      if(user){
        alert("Usuário não existe.");
        return;
      }
      navigation.navigate('Home',{email})
    })
    .catch(error => { alert(error)
    navigation.navigate('Login')
  })
  .catch(error => { alert(error)
    navigation.navigate('Login')
  })
  }
  useEffect(()=>{
    Firebase.auth().onAuthStateChanged(function(user){
      const uid = user.uid
      const email = user.email
    });
  },[])

  return(
    <View style={estilo.container}>
    <View style={estilo.cont2}>
    <Image style={estilo.img} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Google_Contacts_logo.png/170px-Google_Contacts_logo.png'}}/>
    <Text style={estilo.tex1}> Contato</Text>
    </View>
    <View style={estilo.con1}>
      <TextInput style={estilo.campo1} onChangeText={(email) => setEmail(email)} value={email}  placeholder='Digite o email' />
      <TextInput secureTextEntry={true} style={estilo.campo} onChangeText={(senha) => setSenha(senha)} value={senha} placeholder='Digite sua senha' />
     
      <TouchableOpacity style={estilo.btn} onPress={()=>{logar()}}>
        <Text style={estilo.btntex}> Logar </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Cadastro')}>
        <Text style={estilo.btntex}>Cadastrar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0E68C'
  },
  con1:{
    alignSelf: 'center',
    alignItems: 'center',
    width:310,
    height:180,
    textAlign: 'center',
    backgroundColor:'#00BFFF',
    borderRadius:10,
    marginTop:30
  },
  cont2:{
    alignSelf: 'center',
    textAlign: 'center',
    marginTop:0
  },
  tex1:{
    textAlign:'center',
    fontSize:30
    
  },
  campo:{
    width:300,
    backgroundColor: '#ffffff',
    marginVertical: 4,
    borderRadius:5,
    alignSelf: 'center',
    textAlign:'center'
    
  },
  campo1:{
    width:300,
    backgroundColor: '#ffffff',
    marginVertical: 4,
    borderRadius:5,
    alignSelf: 'center',
    marginTop:30,
    textAlign:'center'
  },
  img:{
    width:150,
    height:150,
    marginTop:0
  },
  btntex:{
    width:90,
    alignSelf:'center',
    backgroundColor:'#FFD700',
    marginTop:10,
    borderRadius:5,
    textAlign:'center',
    fontSize:17,
    
  }
});