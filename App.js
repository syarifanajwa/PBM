import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const App = () => {
  const [idBarang, setIdBarang] = useState('');
  const [namaBarang, setNamaBarang] = useState('');
  const [alamatTujuan, setAlamatTujuan] = useState('');
  const [pengirim, setPengirim] = useState('');
  const [jumlahBarang, setJumlahBarang] = useState(1);
  const [tanggalKirim, setTanggalKirim] = useState('');
  const [penerima, setPenerima] = useState('');
  const [dataTerkirim, setDataTerkirim] = useState([]);

  const submitData = () => {
    const data = {
      idBarang,
      namaBarang,
      alamatTujuan,
      pengirim,
      jumlahBarang,
      tanggalKirim,
      penerima,
    };
    setDataTerkirim([...dataTerkirim, data]);
    setIdBarang('');
    setNamaBarang('');
    setAlamatTujuan('');
    setPengirim('');
    setJumlahBarang(1);
    setTanggalKirim('');
    setPenerima('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Form Input Data</Text>

      <Text style={styles.label}>ID Barang:</Text>
      <TextInput style={styles.input} placeholder="Masukkan ID Barang" value={idBarang} onChangeText={setIdBarang} />

      <Text style={styles.label}>Nama Barang:</Text>
      <TextInput style={styles.input} placeholder="Masukkan Nama Barang" value={namaBarang} onChangeText={setNamaBarang} />

      <Text style={styles.label}>Alamat Tujuan:</Text>
      <TextInput style={[styles.input, { height: 80 }]} placeholder="Masukkan Alamat Tujuan" value={alamatTujuan} onChangeText={setAlamatTujuan} multiline />

      <Text style={styles.label}>Pengirim:</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={pengirim} onValueChange={(itemValue) => setPengirim(itemValue)}>
          <Picker.Item label="Pilih Pengirim" value="" />
          <Picker.Item label="Najwa" value="Najwa" />
          <Picker.Item label="Aliyah" value="Aliyah" />
          <Picker.Item label="Zahra" value="Zahra" />
        </Picker>
      </View>

      <Text style={styles.label}>Jumlah Barang: {jumlahBarang}</Text>
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={1}
        maximumValue={100}
        step={1}
        value={jumlahBarang}
        onValueChange={(value) => setJumlahBarang(value)}
        minimumTrackTintColor="#3399ff"
        maximumTrackTintColor="#ddd"
        thumbTintColor="#3399ff"
      />

      <Text style={styles.label}>Tanggal Kirim:</Text>
      <TextInput style={styles.input} placeholder="YYYY-MM-DD" value={tanggalKirim} onChangeText={setTanggalKirim} />

      <Text style={styles.label}>Penerima:</Text>
      <TextInput style={styles.input} placeholder="Masukkan nama penerima" value={penerima} onChangeText={setPenerima} />

      <Button title="Simpan" onPress={submitData} />

      <Text style={styles.title}>Data Terkirim:</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>ID</Text>
        <Text style={styles.headerText}>Nama</Text>
        <Text style={styles.headerText}>Alamat</Text>
        <Text style={styles.headerText}>Pengirim</Text>
        <Text style={styles.headerText}>Jumlah</Text>
        <Text style={styles.headerText}>Tgl Kirim</Text>
        <Text style={styles.headerText}>Penerima</Text>
      </View>

      {dataTerkirim.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.cell}>{item.idBarang}</Text>
          <Text style={styles.cell}>{item.namaBarang}</Text>
          <Text style={styles.cell}>{item.alamatTujuan}</Text>
          <Text style={styles.cell}>{item.pengirim}</Text>
          <Text style={styles.cell}>{item.jumlahBarang}</Text>
          <Text style={styles.cell}>{item.tanggalKirim}</Text>
          <Text style={styles.cell}>{item.penerima}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: 20,
    marginVertical: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 5,
  },
  tableHeader: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#eee',
    padding: 5,
    flexWrap: 'wrap',
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    flex: 1,
    fontSize: 12,
  },
});

export default App;
