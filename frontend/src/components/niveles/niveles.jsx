import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from '../../assets/Lenguas.pdf'
import App from '../../App'

const Niveles = () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
);

ReactDOM.render(<Niveles />, document.getElementById('root'));

  export default Niveles