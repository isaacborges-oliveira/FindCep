import React from "react";

import { Pressable, Text, StyleSheet } from "react-native";

export const Botao = ({ titulobotao, onPress }) => {
    return (
       <Pressable
      onPress={onPress} style={({ pressed }) => [ styles.botao, pressed && { transform: [{ scale: 0.95 }] }, ]}>
      <Text style={styles.textoBotao}>{titulobotao}</Text>
    </Pressable>
    );
};

const styles = StyleSheet.create({
    botao: {
        backgroundColor: "#00aaee",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderTopLeftRadius: 14,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        width: "60%",
        alignItems: "center",
        elevation: 10,
        

    },
    textoBotao: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
