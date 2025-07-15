import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function TambahMenu({ navigation }) {
  const [form, setForm] = useState({
    nama: '',
    deskripsi: '',
    harga: '',
    stok: '',
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    const { nama, deskripsi, harga, stok } = form;

    if (!nama || !harga || !stok) {
      Alert.alert('Peringatan', 'Nama, harga, dan stok wajib diisi');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nama,
          deskripsi,
          harga,
          stok,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        Alert.alert('Gagal', data.error || 'Gagal tambah menu');
      } else {
        Alert.alert('Sukses', 'Menu berhasil ditambahkan');
        navigation.goBack();
      }
    } catch (err) {
      Alert.alert('Error', 'Tidak dapat terhubung ke server');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah Menu Baru</Text>

      <TextInput
        style={styles.input}
        placeholder="Nama Makanan"
        value={form.nama}
        onChangeText={(text) => handleChange('nama', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Deskripsi"
        value={form.deskripsi}
        onChangeText={(text) => handleChange('deskripsi', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Harga"
        value={form.harga}
        keyboardType="numeric"
        onChangeText={(text) => handleChange('harga', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Stok"
        value={form.stok}
        keyboardType="numeric"
        onChangeText={(text) => handleChange('stok', text)}
      />

      <Button title="Simpan Menu" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
});
