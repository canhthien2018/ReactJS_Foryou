import { createTheme } from "@mui/material/styles";
import blueUserItemBackground from '../asset/blueUserItemBackground.png';
import blueUserCoverBackground from '../asset/blueUserCoverBackground.png'

const backgroundImage= {
    user:{
        itemBackground: blueUserItemBackground,
        coverBackground: blueUserCoverBackground
    }
};

const lightBlueTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#6497b1',
        dark: '#005b96',
        light: '#b3cde0'
      },
      backgroundLayout: '#E7EDF3'
    },
    backgroundImage: backgroundImage,
    components: {
      MuiBackdrop: {
        styleOverrides: {
          root: {
            '&[style*="opacity: 0"]': {
              pointerEvents: 'none',
            },
          },
        },
      },
    },
  });

  const darkBlueTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#6497b1',
        dark: '#005b96',
        light: '#b3cde0'
      },
      backgroundLayout: '#15191E'
    },
    backgroundImage: backgroundImage,
    components: {
      MuiBackdrop: {
        styleOverrides: {
          root: {
            '&[style*="opacity: 0"]': {
              pointerEvents: 'none',
            },
          },
        },
      },
    },
  });

const blueTheme = {
    lightMode: lightBlueTheme,
    darkMode: darkBlueTheme
}

export default blueTheme;