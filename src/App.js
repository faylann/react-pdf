import React from 'react';
import Test from './Test';
import './App.css';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

const App = () => (
  <div className="app">
    <button className="buttonDownload">
      <PDFDownloadLink document={<Test />} fileName="namafile.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
    </button>
  </div>
);
export default App;
