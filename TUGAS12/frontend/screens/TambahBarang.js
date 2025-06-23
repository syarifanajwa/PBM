import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';

export default function TambahBarang({ navigation }) {
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');
  const [kategori, setKategori] = useState('');

  const simpanData = async () => {
    try {
      await axios.post('http://localhost:5000/items', {
        nama_barang: nama,
        harga: Number(harga),
        stok: Number(stok),
        kategori
      });
      navigation.goBack();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput label="Nama Barang" value={nama} onChangeText={setNama} style={{ marginBottom: 10 }} />
      <TextInput label="Harga" value={harga} onChangeText={setHarga} keyboardType="numeric" style={{ marginBottom: 10 }} />
      <TextInput label="Stok" value={stok} onChangeText={setStok} keyboardType="numeric" style={{ marginBottom: 10 }} />
      <TextInput label="Kategori" value={kategori} onChangeText={setKategori} style={{ marginBottom: 10 }} />
      <Button mode="contained" onPress={simpanData}>
        Simpan
      </Button>
    </View>
  );
}
