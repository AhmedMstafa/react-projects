import { Outlet } from 'react-router-dom';

import MuiAppBar from 'MUI-Components/Appbar';
import MuiDrawer from 'MUI-Components/Drawer';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo, useState } from 'react';
import { getLocalMode, setLocalMode } from 'utils/local-storage';
import getDesignTokens from 'styels/MyTheme';

const drawerWidth = 240;

export default function Root() {
  const [myMode, setMyMode] = useState(getLocalMode() ?? 'dark');
  const [noneOrBlock, setNoneOrBlock] = useState('none');
  const [drawerType, setDrawerType] = useState('permanent');

  const theme = useMemo(() => createTheme(getDesignTokens(myMode)), [myMode]);

  function setMyModeHandler(mode) {
    setMyMode(mode);
    setLocalMode(mode);
  }

  function noneOrBlockHandler(dispaly) {
    setNoneOrBlock(dispaly);
  }

  function drowerTypeHandler(type) {
    setDrawerType(type);
  }

  function showDrawer() {
    noneOrBlockHandler('block');
    drowerTypeHandler('temporary');
  }

  function hideDrawer() {
    noneOrBlockHandler('none');
    drowerTypeHandler('permanent');
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div>
          <MuiAppBar showDrawer={showDrawer} drawerWidth={drawerWidth} />
          <MuiDrawer
            drawerType={drawerType}
            noneOrBlock={noneOrBlock}
            setMyModeHandler={setMyModeHandler}
            drawerWidth={drawerWidth}
            hideDrawer={hideDrawer}
          />
          <Box
            component="main"
            sx={{
              mt: '66px',
              ml: { sm: `${drawerWidth}px` },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Outlet />
          </Box>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}
