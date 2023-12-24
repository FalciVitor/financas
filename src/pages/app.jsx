import React from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Drawer from '../layout/drawer/drawer';
import Inicio from './home/home';
import Relatorio from './reports/reports';
import Mensal from './monthly/monthly';
import Configuracoes from './settings/settings';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
      <Drawer />
      <Box component="main" sx={{ flexGrow: 1}}>
        <Routes>
          <Route
              path="/"
              element={<Inicio />}
            />
          <Route path="/início" element={<Inicio />} />
          <Route path="/mensal" element={<Mensal />} />
          <Route path="/relatório" element={<Relatorio />} />
          <Route path="/configurações" element={<Configuracoes />} />
        </Routes>
      </Box>
      </Box>
    </Router>
  );
}

export default App;
