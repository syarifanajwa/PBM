import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert, ActivityIndicator } from 'react-native';

export default function MenuList({ navigation }) {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMenus = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/menu');
      const data = await response.json();
      setMenus(data);
    } catch (err) {
      Alert.alert('Error', 'Gagal mengambil data menu');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchMenus);
    return unsubscribe;
  }, [navigation]);

  const handleDelete = async (id) => {
    Alert.alert(
      'Konfirmasi',
      'Yakin ingin menghapus menu ini?',
      [
        { text: 'Batal' },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: async () => {
            try {
              const response = await fetch(`http://localhost:5000/api/menu/${id}`, {
                method: 'DELETE',
              });

              const data = await response.json();
              if (!response.ok) {
                Alert.alert('Gagal', data.error || 'Gagal menghapus menu');
              } else {
                Alert.alert('Sukses', 'Menu berhasil dihapus');
                fetchMenus(); // Refresh data
              }
            } catch (err) {
              Alert.alert('Error', 'Gagal terhubung ke server');
            }
          },
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.nama}</Text>
      <Text>Deskripsi: {item.deskripsi}</Text>
      <Text>Harga: Rp{item.harga}</Text>
      <Text>Stok: {item.stok}</Text>

      <View style={styles.buttonGroup}>
        <Button
          title="Edit"
          onPress={() => navigation.navigate('EditMenu', { id: item.id })}
        />
        <Button
          title="Hapus"
          color="red"
          onPress={() => handleDelete(item.id)}
        />
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button title="Tambah Menu Baru" onPress={() => navigation.navigate('TambahMenu')} />
      <FlatList
        data={menus}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
