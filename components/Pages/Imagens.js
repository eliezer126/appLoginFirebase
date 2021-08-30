import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';

const request = async(callback)=>{
const response = await fetch('https://apieliezer.azurewebsites.net/v1/Api.php?apicall=getDicastb');
const parsed = await response.json();
callback(parsed.dadoslista)
}

export default function Imagens({navigation}) {

  const [registro, setRegistro] = useState([]);

  useEffect(()=> {request(setRegistro);},[]);

  return (
    <View style={estilo.container}>
     <FlatList
      data = {registro}
      keyExtractor={(item) => item.uid.toString()}
      renderItem={({item})=>
      <View style={estilo.cont}>
      <View>
        <Text style={estilo.texto}>{item.cidade}</Text>
      </View>
      <View style={estilo.imag}>
      <View style={estilo.con1}>
        <Text style={estilo.tex1}>Ponto turisticos</Text>
        <View style={estilo.img1}>
        <Image style={estilo.img} source={{uri:item.imgPotur01}} />
        <Image style={estilo.img} source={{uri:item.imgPotur02}} />
        </View>
        </View>
        <View style={estilo.gas}>
        <Text style={estilo.tex1}>Gastronomia</Text>
        <Image style={estilo.img} source={{uri:item.imgGast03}} />
        </View>
      </View>
      </View>
      } />
<TouchableOpacity onPress={() => navigation.navigate('Home')}>
  <Text style={estilo.btntex}>Voltar</Text>
</TouchableOpacity>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginTop:20,
    marginBottom:0,
  },
  imag:{
    flexDirection: 'row',
    alignSelf:'center'
  },
  cont:{
    width:344,
    height:200,
    marginTop:10,
    backgroundColor:'#00FFFF',
    borderRadius:10,
    textAlign: 'center',
  },
  texto:{
    fontSize: 30,
    textAlign:'center',
  },
  con1:{

    textAlign: 'center',
    alignItems: 'center',
  },
  img1:{
        flexDirection:'row',
  },
  tex1:{
    textAlign:'center',
  },
  img:{
    width:100,
    height:100,
    margin:5,
    borderRadius:5,
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