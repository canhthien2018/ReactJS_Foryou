import { createTheme } from "@mui/material/styles";
import greenUserItemBackground from '../asset/greenUserItemBackground.png';
import greenUserCoverBackground from '../asset/greenUserCoverBackground.png'

const backgroundImage= {
    user:{
        itemBackground: greenUserItemBackground,
        coverBackground: greenUserCoverBackground
    }
};

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#508D4E',
            dark: '#1A5319',
            light: '#80AF81'
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

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#508D4E',
            dark: '#1A5319',
            light: '#80AF81'
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

const greenTheme = {
    lightMode: lightTheme,
    darkMode: darkTheme 
}

export default greenTheme;