import { Text, SafeAreaView, StyleSheet, View, TextInput, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"

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
    <SafeAreaView style={styles.container}>
      {/*Header*/}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name = "menu" size = {28}/>
        </TouchableOpacity>
        <Text style = {styles.title}>
          PET ADOPTION
        </Text>
      </View>

      {/*Search*/}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for pets"
        />

        <Icon
          name = "search"
          size= {20}
          color="#ccc"
          style={styles.searchIconRight}
        />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  searchContainer: {
    // position: 'relative',
    // marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 35, 
  },
  searchIconRight: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
});
