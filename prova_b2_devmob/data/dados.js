import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { info } from '../data/dados';

function GroupItem({ grupo, navigation }) {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('InfoPage', { grupo })}
    >
      <Text style={styles.groupName}>{grupo.nome}</Text>
      <Text style={styles.groupDescription}>{grupo.descricao}</Text>
    </TouchableOpacity>
  );
}

export default function MainPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Grupos InovaWeek 2025</Text>
      <FlatList
        data={info}
        renderItem={({ item }) => <GroupItem grupo={item} navigation={navigation} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.buttonText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B4475',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#F5DC46',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  groupName: {
    color: '#333',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  groupDescription: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#F5DC46',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  }
});
