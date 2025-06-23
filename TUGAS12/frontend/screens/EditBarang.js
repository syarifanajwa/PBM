EditBarang.js;
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';

export default function EditBarang({ route, navigation }) {
  const { id } = route.params;
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');
  const [kategori, setKategori] = useState('');

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/items/${id}`);
      const data = res.data;
      setNama(data.nama_barang);
      setHarga(data.harga.toString());
      setStok(data.stok.toString());
      setKategori(data.kategori);
    } catch (err) {
      console.log(err.message);
    }
  };

  const updateData = async () => {
    try {
      await axios.put(`http://localhost:5000/items/${id}`, {
        nama_barang: nama,
        harga: Number(harga),
        stok: Number(stok),
        kategori,
      });
      navigation.goBack();
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput label="Nama Barang" value={nama} onChangeText={setNama} style={{ marginBottom: 10 }} />
      <TextInput label="Harga" value={harga} onChangeText={setHarga} keyboardType="numeric" style={{ marginBottom: 10 }} />
      <TextInput label="Stok" value={stok} onChangeText={setStok} keyboardType="numeric" style={{ marginBottom: 10 }} />
      <TextInput label="Kategori" value={kategori} onChangeText={setKategori} style={{ marginBottom: 10 }} />
      <Button mode="contained" onPress={updateData}>
        Update
      </Button>
    </View>
  );
}
