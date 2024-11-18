import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function InfoPage({ route, navigation }) {
  const { grupo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome do grupo:</Text>
        <Text style={styles.infoText}>{grupo.nome}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Descrição:</Text>
        <Text style={styles.infoText}>{grupo.descricao}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Integrantes:</Text>
        <Text style={styles.infoText}>{grupo.integrantes.join(', ')}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Avaliação:</Text>
        <Text style={styles.infoText}>{grupo.avaliacao}</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B4475',
    padding: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F5DC46',
    marginBottom: 30,
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#03045e',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#03045e',
  },
  button: {
    backgroundColor: '#F5DC46',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#03045e',
    fontWeight: 'bold',
  },
});
