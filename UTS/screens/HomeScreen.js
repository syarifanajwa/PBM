import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonScale = useRef(new Animated.Value(0.8)).current;
  const titlePosition = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(titlePosition, {
        toValue: 0,
        speed: 2,
        bounciness: 8,
        useNativeDriver: true,
      }),
      Animated.spring(buttonScale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { transform: [{ translateY: titlePosition }] }]}>
        <Text style={styles.title}>Selamat Datang!</Text>
        <Text style={styles.subtitle}>Beranda Aplikasi</Text>
      </Animated.View>

      <View style={styles.buttonContainer}>
        <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
          <TouchableOpacity 
            style={[styles.button, styles.profileButton]} 
            onPress={() => navigation.navigate('Profile')}
            activeOpacity={0.8}
          >
            <Ionicons name="person-circle-outline" size={24} color="#fff" />
            <Text style={styles.buttonText}>  Ke Profil</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
          <TouchableOpacity 
            style={[styles.button, styles.aboutButton]} 
            onPress={() => navigation.navigate('About')}
            activeOpacity={0.8}
          >
            <Ionicons name="information-circle-outline" size={24} color="#fff" />
            <Text style={styles.buttonText}>  Tentang Aplikasi</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>React Native App</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3a4a6b',
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 18,
    color: '#6b7b9d',
    fontWeight: '500',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 100,
  },
  button: {
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 15,
    width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  profileButton: {
    backgroundColor: '#FF6B8B',
  },
  aboutButton: {
    backgroundColor: '#5E72E4',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  footerText: {
    color: '#6b7b9d',
    fontSize: 14,
  },
});