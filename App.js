import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  Image, 
  ScrollView, 
  Dimensions, 
  FlatList, 
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

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

const bannerImages = [
  'https://via.placeholder.com/400x200',
  'https://via.placeholder.com/400x200',
  'https://via.placeholder.com/400x200',
];

export default function App() {
  const [currentBanner, setCurrentBanner] = useState(0);

  const handleScroll = (event) => {
    const windowWidth = Dimensions.get('window').width;
    const index = Math.round(event.nativeEvent.contentOffset.x / windowWidth);
    setCurrentBanner(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="menu" size={28} />
        </TouchableOpacity>
        <Text style={styles.title}>PET ADOPTION</Text>
        <View style={{ width: 28 }} />
      </View>
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for pets"
        />
        <Icon 
          name="search" 
          size={20} 
          color="#ccc" 
          style={styles.searchIconRight} 
        />
      </View>
      
      {/* Banner */}
      <View style={styles.bannerContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll} 
          style={styles.banner}
        >
          {bannerImages.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={styles.bannerImage}
            />
          ))}
        </ScrollView>
        
        {/* Adopt Now Button */}
        <TouchableOpacity style={styles.adoptButton}>
          <Text style={styles.adoptButtonText}>Adopt Now</Text>
        </TouchableOpacity>
      </View>
      
      {/* Dots */}
      <View style={styles.dotsContainer}>
        {bannerImages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentBanner === index ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  searchContainer: {
    position: 'relative',
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 35, 
    backgroundColor: '#f9f9f9',
  },
  searchIconRight: {
    position: 'absolute',
    right: 25,
    top: 10,
  },
  bannerContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  banner: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  bannerImage: {
    width: Dimensions.get('window').width,
    height: 200,
    borderRadius: 10,
  },
  adoptButton: {
    position: "absolute",
    top: "50%",
    right: 20, 
    transform: [{ translateY: -20 }],
    backgroundColor: '#ff6347',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    elevation: 2,
  },
  adoptButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#000',
  },
});
