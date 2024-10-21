import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const animal = [
  {
    name: 'Olivia',
    gender: 'Female',
    yob: 2018,
    location: 'Hanoi',
    image: 'https://via.placeholder.com/80',
  },
  {
    name: 'Pedro',
    gender: 'Male',
    yob: 2017,
    location: 'Ho Chi Minh City',
    image: 'https://via.placeholder.com/80',
  },
  {
    name: 'Lily',
    gender: 'Female',
    yob: 2019,
    location: 'Da Nang',
    image: 'https://via.placeholder.com/80',
  },
  {
    name: 'Max',
    gender: 'Male',
    yob: 2016,
    location: 'Hai Phong',
    image: 'https://via.placeholder.com/80',
  },
  {
    name: 'Bella',
    gender: 'Female',
    yob: 2020,
    location: 'Can Tho',
    image: 'https://via.placeholder.com/80',
  },
  {
    name: 'Charlie',
    gender: 'Male',
    yob: 2015,
    location: 'Hue',
    image: 'https://via.placeholder.com/80',
  },
];

const animaltype = [
  { animaltype: 'Cat', image: 'https://via.placeholder.com/80' },
  { animaltype: 'Dog', image: 'https://via.placeholder.com/80' },
  { animaltype: 'Rabbit', image: 'https://via.placeholder.com/80' },
  { animaltype: 'Bird', image: 'https://via.placeholder.com/80' },
  { animaltype: 'Fish', image: 'https://via.placeholder.com/80' },
  { animaltype: 'Others', image: 'https://via.placeholder.com/80' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
