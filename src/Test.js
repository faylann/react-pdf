import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  tanggalCetak: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
    fontSize: 10,
    paddingBottom: 0,
  },
  idTransaksi: {
    fontSize: 18,
    marginBottom: 30,
  },
  dataDiri: {
    display: 'table',
    width: 'auto',
    borderStyle: 'none',
  },
  tableColFooter: {
    width: '50%',
    padding: '20',
    borderStyle: 'none',
  },
  tableColDataDiri: {
    width: '20%',
    borderStyle: 'none',
  },
  tableColDataDiriValue: {
    width: '30%',
    borderStyle: 'none',
  },
  tableCellDataDiri: {
    margin: 'auto',
    fontSize: 12,
    fontWeight: 500,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 10,
    marginBottom: 30,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '25%',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderBottomColor: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '10',
  },
  tableColDisk1: {
    width: '75%',
    padding: '10',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColDisk2: {
    width: '25%',
    padding: '10',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol: {
    width: '25%',
    padding: '10',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeader: {
    margin: 'auto',
    fontSize: 12,
    fontWeight: 500,
  },
  tableCell: {
    margin: 'auto',
    fontSize: 10,
  },
});

const Test = () => (
  <Document>
    <Page size="A4" style={styles.body}>
      <View style={styles.tanggalCetak}>
        <Text>Tanggal Cetak: Senin, 15 Juni 2020 - Jam 11.11, Kasir: Miaw</Text>
        <Text style={styles.idTransaksi}>ID Transaksi: XXxxxxx</Text>
      </View>
      <View style={styles.data}>
        <View style={styles.tableRow}>
          <View style={styles.tableColDataDiri}>
            <Text style={styles.tableCellDataDiri}>Nama: </Text>
          </View>
          <View style={styles.tableColDataDiriValue}>
            <Text style={styles.tableCellDataDiri}>Namanya Nama</Text>
          </View>
          <View style={styles.tableColDataDiri}>
            <Text style={styles.tableCellDataDiri}>No:</Text>
          </View>
          <View style={styles.tableColDataDiriValue}>
            <Text style={styles.tableCellDataDiri}>8129307</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableColDataDiri}>
            <Text style={styles.tableCellDataDiri}>Jaminan:</Text>
          </View>
          <View style={styles.tableColDataDiriValue}>
            <Text style={styles.tableCellDataDiri}>BPJS</Text>
          </View>
          <View style={styles.tableColDataDiri}>
            <Text style={styles.tableCellDataDiri}>Jenis Pelayanan:</Text>
          </View>
          <View style={styles.tableColDataDiriValue}>
            <Text style={styles.tableCellDataDiri}>Rawat Jalan</Text>
          </View>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Jenis</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Harga</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Jumlah</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Harga Total</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis asdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis asdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis asdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis asdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis asdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis asdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis asdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis asdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis asdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis asdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 19.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis Qasdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis Qasdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis Qasdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis Qasdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis Qasdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis Qasdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis Qasdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis Qasdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis Qasdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis Qasdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Jenis Qasdasdasd</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Rp. 20.000,-</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableColDisk1}>
            <Text style={styles.tableCellHeader}>Diskon</Text>
          </View>
          <View style={styles.tableColDisk2}>
            <Text style={styles.tableCellHeader}>0%</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableColDisk1}>
            <Text style={styles.tableCellHeader}>Total Bayar</Text>
          </View>
          <View style={styles.tableColDisk2}>
            <Text style={styles.tableCellHeader}>Rp. 39.000,-</Text>
          </View>
        </View>
      </View>
      <View style={styles.data}>
        <View style={styles.tableRow}>
          <View style={styles.tableColFooter}>
            <Text style={styles.tableCellDataDiri}>Nama</Text>
          </View>
          <View style={styles.tableColFooter}>
            <Text style={styles.tableCellDataDiri}>Petugas Kasir</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableColFooter}>
            <Text style={styles.tableCellDataDiri}>Namanya Nama</Text>
          </View>
          <View style={styles.tableColFooter}>
            <Text style={styles.tableCellDataDiri}>Namanya Petugas Kasir</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Test;
