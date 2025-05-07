import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ProfileScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideUpAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start();
  }, [fadeAnim, slideUpAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      
      <Animated.View 
        style={[
          styles.content,
          { 
            opacity: fadeAnim,
            transform: [{ translateY: slideUpAnim }] 
          }
        ]}
      >
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>NJ</Text>
        </View>
        
        <Text style={styles.name}>Najwa</Text>
        <Text style={styles.info}>Mahasiswi | Belajar React Native</Text>
        
        <View style={styles.divider} />
        
        <Text style={styles.description}>
          Ini adalah aplikasi yang saya buat sebagai bagian dari pembelajaran React Native. 
          Di sini, kamu bisa melihat profil saya dan belajar lebih banyak tentang proyek yang sedang saya kerjakan.
        </Text>
      </Animated.View>

      <TouchableOpacity 
        onPress={() => navigation.goBack()} 
        style={styles.backButton}
      >
        <Text style={styles.backText}>← Kembali</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '40%',
    backgroundColor: '#FF9EB7',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  content: {
    width: width * 0.85,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FF6B8B',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#fff',
  },
  avatarText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  divider: {
    height: 1,
    width: '80%',
    backgroundColor: '#FF9EB7',
    marginVertical: 15,
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    lineHeight: 22,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
  },
  backText: {
    color: '#FF6B8B',
    fontSize: 16,
    fontWeight: '600',
  },
});