import { createTheme } from "@mui/material/styles";
import purpleUserItemBackground from '../asset/purpleUserItemBackground.png';
import purpleUserCoverBackground from '../asset/purpleUserCoverBackground.png'

const backgroundImage= {
    user:{
        itemBackground: purpleUserItemBackground,
        coverBackground: purpleUserCoverBackground
    }
};

const darkPurpleTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#9e4a9e',
            dark: '#711971',
            light: '#deacde'
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

const lightPurpleTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#9e4a9e',
            dark: '#711971',
            light: '#deacde'
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

const purpleTheme = {
    lightMode: lightPurpleTheme,
    darkMode: darkPurpleTheme
}

export default purpleTheme;