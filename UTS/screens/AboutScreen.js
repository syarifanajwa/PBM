import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const AboutScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png' }}
          style={styles.icon}
        />
        <Text style={styles.title}>Tentang Aplikasi</Text>
        <View style={styles.card}>
          <Text style={styles.text}>
            Aplikasi ini saya buat dengan React Native dan Expo untuk tugas UTS.
          </Text>
          <Text style={styles.text}>
            Dibuat oleh <Text style={styles.highlight}>Najwa</Text> — semangat terus belajar coding ya! 💻✨
          </Text>
        </View>
        <Text style={styles.contact}>📧 Hubungi: najwa@gmail.com</Text>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>← Kembali ke Beranda</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#DDEEFF',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2F4F4F',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 25,
    paddingHorizontal: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
    width: '100%',
    maxWidth: 350,
    alignSelf: 'center',
  },
  
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 22,
  },
  
 
  highlight: {
    fontWeight: 'bold',
    color: '#6A5ACD',
  },
  contact: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  backButton: {
    marginTop: 30,
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
