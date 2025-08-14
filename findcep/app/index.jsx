import { ImageBackground } from "expo-image";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { Input } from '../components/input/input';
import { Botao } from '../components/botao/botao';
import { Card } from '../components/card/card';
export default function Index() {
  return (
    <>
      {/* {"1. logo com*imagem de fundo"} */}
      <ImageBackground source={require('../assets/images/imagemFundo.png')} style={styles.imgFundo}>

        <Image source={require('../assets/images/Logo.png')} style={styles.logo}></Image>

      </ImageBackground>
      {/* {"2. Campo de consulta"} */}

      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>
          {/* {"2.1 titulo"} */}
          <Text style={styles.titulo} >Consulte seu CEP</Text>
          {/* {"2.2 Input"} */}

          <Input />
          {/* {"2.3 botao"} */}
          <Botao titulobotao="Consultar" />

          {/* {"2.4 card de informações"} */}

          <Card />
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
  },

  containerScroll: {
    flex: 1.5,
    paddingTop: 50,
    paddinBottom: 50,
    height: '100%',
    padding: 80,

  },

  titulo: {
    fontSize: 25,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  }

})

