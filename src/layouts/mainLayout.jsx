import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import DesktopLayout from './desktopLayout';
import MobileLayout from './mobileLayout';

import { useSelector } from 'react-redux';
import { mainLayoutSelector } from '../redux/selectors';
import AppAlert from '../components/shared/alert';
import purpleTheme from '../themes/purple';
import blueTheme from '../themes/blue';
import greenTheme from '../themes/green';
import { Theme } from '../constants/mainLayout';


function MainLayout() {
  const isDarkMode = useSelector(mainLayoutSelector).isDarkMode;
  const theme = useSelector(mainLayoutSelector).theme;

  let currentTheme = purpleTheme;
  switch (theme) {
    case Theme.Purple:
      currentTheme = purpleTheme;
      break;
    case Theme.Blue:
      currentTheme = blueTheme;
      break;
    case Theme.Green:
      currentTheme = greenTheme;
      break;
    default:
      currentTheme = purpleTheme;
  }


  return (
    <>
      <ThemeProvider theme={isDarkMode ? currentTheme.darkMode : currentTheme.lightMode}>
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <DesktopLayout>
            <Outlet />
          </DesktopLayout>
        </Box>
        <Box sx={{ display: { md: 'none' } }}>
          <MobileLayout>
            <Outlet />
          </MobileLayout>
        </Box>
        <AppAlert />
      </ThemeProvider>

    </>
  );
}

export default MainLayout;