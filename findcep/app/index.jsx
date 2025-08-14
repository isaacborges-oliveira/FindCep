import { ImageBackground } from "expo-image";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { Input } from '../components/input/input';
import { Botao } from '../components/botao/botao';
import { Card } from '../components/card/card';
import { useState } from "react";
import axios from "axios";

export default function Index() {
  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});

  async function consultarCep() {
    try {
      if (cep !== "" && cep.length === 8) {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
        setJsonCep(resposta.data);
        
      } else {
        alert("O CEP está incorreto. Digite 8 números");
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao consultar CEP");
    }
  }

  return (
    <>
      <ImageBackground source={require('../assets/images/imagemFundo.png')} style={styles.imgFundo}>
        <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
      </ImageBackground>

      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Consulte seu CEP</Text>

          <Input
            valorCep={cep}
            onchangeValorCep={e => setCep(e)}
          />

          <Botao
            titulobotao="Consultar"
            onPress={consultarCep} 
          />

         
          {jsonCep.cep && ( <Card
              cep={jsonCep.cep}
              logradouro={jsonCep.logradouro}
              bairro={jsonCep.bairro}
              uf={jsonCep.uf}
              localidade={jsonCep.localidade}
              complemento={jsonCep.complemento}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  imgFundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  logo: {
    width: 150,
    height: 190,
  },
  container: {
    gap: 40,
    width: "100%",
    minHeight: "100%",
    alignItems: "center",
    paddingBottom: 50,
  },
  containerScroll: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    height: '100%',
  },
  titulo: {
    fontSize: 25,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  }
});
