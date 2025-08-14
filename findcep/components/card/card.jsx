import { StyleSheet, Text, View } from "react-native";



export const Card = () => {
    return (
        <>
            <View style={styles.card} >
                <View>
                    <Text style={styles.titulo}>CEP:</Text>

                    <Text style={styles.valor}>Dado 01</Text>

                </View>
                <View>
                    <Text style={styles.titulo}>Logradouro:</Text>

                    <Text style={styles.valor}>Dado 02</Text>

                </View>
                <View>
                    <Text style={styles.titulo}>Bairro:</Text>

                    <Text style={styles.valor}>Dado 03</Text>

                </View>
                <View>
                    <Text style={styles.titulo}>Uf:</Text>

                    <Text style={styles.valor}>Dado 04</Text>

                </View>
                <View>
                    <Text style={styles.titulo}>Estado:</Text>

                    <Text style={styles.valor}>Dado 05</Text>

                </View>
                <View>
                    <Text style={styles.titulo}>Região:</Text>

                    <Text style={styles.valor}>Dado 06</Text>

                </View>
              
            </View>




        </>
    )
};
const styles = StyleSheet.create({
    card: {
        width: '70%',
        minHeight: '60%',
        padding: 20,
        boxShadow: "rgba(128, 128, 128, 1) 0px 1px 4px,",

        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
     borderRadius: 7,
     gap: 10

    },
    titulo: {
    fontWeight: 600
    }

})