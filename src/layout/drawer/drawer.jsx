import { React, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { DrawerHeader, Drawer } from '../functions/DrawerFunctions';
import Logo from '../../styles/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleButtonClick = (buttonText, navigate) => {
    console.log(`Botão "${buttonText}" clicado!`);
    navigate(`/${buttonText}`);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        <img 
          src={Logo} 
          alt="Minha Imagem" 
          onClick={handleDrawerToggle} 
          style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
        />
        </DrawerHeader>

        <Divider />

        <List >
          {['Início', 'Relatório', 'Mensal', 'Configurações'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => handleButtonClick(text.toLowerCase(), navigate)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index === 0 ? <HomeIcon/> : 
                    index === 1 ? <BarChartIcon/> :
                    index === 2 ? <CalendarMonthIcon/> :
                    index === 3 ? <SettingsIcon/> : ''
                  }
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />
      </Drawer>
    </Box>
  );
}
