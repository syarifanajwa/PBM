import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';

export default function EditMenu({ route, navigation }) {
  const { id } = route.params; // ID menu yang dikirim dari halaman sebelumnya
  const [form, setForm] = useState({
    nama: '',
    deskripsi: '',
    harga: '',
    stok: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ambil data menu by ID
    const fetchMenu = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/menu`);
        const menus = await response.json();
        const menu = menus.find(item => item.id === id);

        if (menu) {
          setForm({
            nama: menu.nama,
            deskripsi: menu.deskripsi || '',
            harga: String(menu.harga),
            stok: String(menu.stok),
          });
        } else {
          Alert.alert('Gagal', 'Menu tidak ditemukan');
          navigation.goBack();
        }
      } catch (err) {
        Alert.alert('Error', 'Gagal ambil data dari server');
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [id]);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleUpdate = async () => {
    const { nama, deskripsi, harga, stok } = form;

    if (!nama || !harga || !stok) {
      Alert.alert('Peringatan', 'Nama, harga, dan stok wajib diisi');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/menu/${id}`, {
        method: 'PUT',
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
        Alert.alert('Gagal', data.error || 'Gagal update menu');
      } else {
        Alert.alert('Sukses', 'Menu berhasil diperbarui');
        navigation.goBack();
      }
    } catch (err) {
      Alert.alert('Error', 'Tidak dapat terhubung ke server');
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Menu</Text>

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

      <Button title="Simpan Perubahan" onPress={handleUpdate} />
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
