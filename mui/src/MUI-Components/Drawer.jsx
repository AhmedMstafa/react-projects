import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  IconButton,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation, useNavigate } from 'react-router-dom';
import { Brightness7, Brightness4 } from '@mui/icons-material';

const items = [
  { name: 'Home', icon: <HomeIcon />, path: '/' },
  { name: 'Create', icon: <CreateIcon />, path: '/create' },
  { name: 'Profile', icon: <SettingsIcon />, path: '/profile' },
  { name: 'Settings', icon: <LogoutIcon />, path: '/settings' },
  { name: 'Logout', icon: <PersonIcon />, path: '/logout' },
];

export default function MuiDrawer({
  drawerWidth,
  setMyModeHandler,
  noneOrBlock,
  drawerType,
  hideDrawer,
}) {
  const location = useLocation();
  const theme = useTheme();
  const navigate = useNavigate();
  function onClickHandler(path) {
    navigate(path);
  }
  return (
    <Box component="nav" sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          display: { xs: noneOrBlock, sm: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant={drawerType}
        anchor="left"
        open
        onClose={hideDrawer}
      >
        <List>
          <ListItem
            sx={{ display: 'flex', justifyContent: 'center', mb: '14px' }}
            disablePadding
          >
            <IconButton
              onClick={() =>
                setMyModeHandler(
                  theme.palette.mode === 'light' ? 'dark' : 'light'
                )
              }
              color="inherit"
            >
              {theme.palette.mode === 'dark' ? (
                <Brightness7 sx={{ color: 'orange' }} />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
          </ListItem>
          <Divider />
          {items.map((item) => (
            <ListItem
              disablePadding
              key={item.name}
              sx={{
                bgcolor:
                  location.pathname === item.path
                    ? // @ts-ignore
                      theme.palette.favColor.main
                    : null,
              }}
            >
              <ListItemButton onClick={() => onClickHandler(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
