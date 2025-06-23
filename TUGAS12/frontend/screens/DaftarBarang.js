import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import axios from 'axios';

export default function DaftarBarang({ navigation }) {
  const [barang, setBarang] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/items');
      setBarang(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const hapusBarang = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/items/${id}`);
      getData();
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', getData);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Button mode="contained" onPress={() => navigation.navigate('Tambah Barang')}>
        Tambah Barang
      </Button>
      <FlatList
        data={barang}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Card style={{ marginTop: 10 }}>
            <Card.Title title={item.nama_barang} subtitle={`Rp ${item.harga} - Stok: ${item.stok}`} />
            <Card.Content>
              <Text>Kategori: {item.kategori}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.navigate('Edit Barang', { id: item._id })}>Edit</Button>
              <Button onPress={() => hapusBarang(item._id)}>Hapus</Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}
