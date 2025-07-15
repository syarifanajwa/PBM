import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, Alert } from 'react-native';

export default function HomeScreen() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMenu = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/menu');
      const data = await res.json();
      setMenu(data);
    } catch (err) {
      Alert.alert('Error', 'Gagal mengambil data menu');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {item.gambar_url && (
        <Image source={{ uri: `http://localhost:5000/${item.gambar_url}` }} style={styles.image} />
      )}
      <Text style={styles.nama}>{item.nama}</Text>
      <Text style={styles.deskripsi}>{item.deskripsi}</Text>
      <Text style={styles.harga}>Rp {item.harga}</Text>
      <Text style={styles.stok}>Stok: {item.stok}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Menu</Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={menu}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2,
  },
  image: { width: '100%', height: 160, borderRadius: 8, marginBottom: 10 },
  nama: { fontSize: 18, fontWeight: 'bold' },
  deskripsi: { fontSize: 14, color: '#555', marginVertical: 4 },
  harga: { fontSize: 16, color: '#000' },
  stok: { fontSize: 14, color: '#333' },
});
