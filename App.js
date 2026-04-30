import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { drivers } from './data/drivers';

const DriverCard = ({ driver }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: driver.image }} style={styles.image} />
      <Text style={styles.name}>{driver.name}</Text>
      <Text style={styles.description}>{driver.description}</Text>
      <Text style={styles.team}>Equipe: {driver.team}</Text>
      <Text style={styles.country}>País: {driver.country}</Text>
      <Text style={styles.stars}>Estrelas: {'⭐'.repeat(driver.stars)}</Text>
    </View>
  );
};

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cartas Super Trunfo - Pilotos F1</Text>
      {drivers.map((driver) => (
        <DriverCard key={driver.id} driver={driver} />
      ))}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  team: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
  },
  country: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
  },
  stars: {
    fontSize: 18,
    color: '#ffd700',
  },
});
