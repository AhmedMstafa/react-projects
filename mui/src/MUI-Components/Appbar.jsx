import { Menu } from '@mui/icons-material';
import {
  Avatar,
  Link,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';

export default function MuiAppbar({ drawerWidth, showDrawer }) {
  return (
    <>
      <AppBar
        sx={{
          ml: { xs: 0, sm: `${drawerWidth}px` },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          boxSizing: 'border-box',
        }}
        position="static"
      >
        <Toolbar>
          <IconButton onClick={showDrawer}>
            <Menu sx={{ mr: '9px', display: { sm: 'none' } }} />
          </IconButton>
          <Link
            underline="none"
            color="inherit"
            href="/"
            sx={{
              flexGrow: 1,
              '&:hover': { fontSize: '16.5px' },
            }}
          >
            My expenses
          </Link>

          <Typography sx={{ mr: 2 }} variant="body1" color="inerit">
            Ahmed Mostafa
          </Typography>

          <Avatar alt="Ahmed Mostafa" src="/images/avatar.jpg" />
        </Toolbar>
      </AppBar>
    </>
  );
}
