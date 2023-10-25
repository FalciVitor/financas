import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Drawer from '../layout/drawer/drawer';
import Inicio from './home/home';
import Relatorio from './reports/reports';
import Mensal from './monthly/monthly';
import Configuracoes from './settings/settings';

function App() {
  return (
    <Router>
      <Drawer />
      <Routes>
        <Route path="/início" element={<Inicio />} />
        <Route path="/mensal" element={<Mensal />} />
        <Route path="/relatório" element={<Relatorio />} />
        <Route path="/configurações" element={<Configuracoes />} />
      </Routes>
    </Router>
  );
}

export default App;
