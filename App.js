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
  require('./assets/Banner1.jpg'),
  require('./assets/Banner2.jpg'),
  require('./assets/Banner3.jpg'),
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
              // source={{uri: image }} dùng link ảnh
              source = {image}
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
      
      {/* Categories và Show All */}
      <View style={styles.categoriesHeader}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.showAll}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoriesContainer}>
        {animaltype.slice(0,3).map((item, index) => (
          <View key={index} style={styles.categoryItem}>
            <Image
              source={{ uri: item.image }}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>{item.animaltype}</Text>
          </View>
        ))}
      </View>

      {/* Animal List */}
      <View style={styles.animalListHeader}>
      </View>
      <FlatList
        data={animal}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.animalItem}>
            <Image
              source={{ uri: item.image }}
              style={styles.animalImage}
            />
            <View style={styles.animalInfo}>
              <Text style={styles.animalName}>{item.name}</Text>
              <Text>Gender: {item.gender}</Text>
              <Text>YOB: {item.yob}</Text>
              <Text>Location: {item.location}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
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
   sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  categoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
    width: '30%',
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  categoryText: {
    textAlign: 'center',
  },
  showAll: {
    color: '#ff6347',
    fontWeight: 'bold',
    marginRight: 10,
  },
  animalListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  animalItem: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'column', 
    alignItems: 'flex-start',
  },
  animalImage: {
    width: '100%',
    height: 150,
    borderRadius: 10, 
    marginBottom: 10,
  },
  animalInfo: {
    alignSelf: 'flex-start',
  },
  animalName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
