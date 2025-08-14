import { StyleSheet, Text, View } from "react-native";

export const Card = ({ cep, logradouro, bairro, uf, localidade, complemento }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.titulo}>CEP:</Text>
        <Text style={styles.valor}>{cep}</Text>
      </View>
      <View>
        <Text style={styles.titulo}>Logradouro:</Text>
        <Text style={styles.valor}>{logradouro}</Text>
      </View>
      <View>
        <Text style={styles.titulo}>Bairro:</Text>
        <Text style={styles.valor}>{bairro}</Text>
      </View>
      <View>
        <Text style={styles.titulo}>UF:</Text>
        <Text style={styles.valor}>{uf}</Text>
      </View>
      <View>
        <Text style={styles.titulo}>Cidade:</Text>
        <Text style={styles.valor}>{localidade}</Text>
      </View>
      <View>
        <Text style={styles.titulo}>Complemento:</Text>
        <Text style={styles.valor}>{complemento || "-"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    padding: 20,
    borderRadius: 7,
    gap: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    marginVertical: 20,
  },
  titulo: {
    fontWeight: "600",
    fontSize: 16,
  },
  valor: {
    fontSize: 16,
    marginBottom: 5,
  }
});
