import { extendTheme } from 'native-base';

const theme = extendTheme({
    colors: {
        // Add new color
        primary: {
            50: '#79f1c9',
            100: '#61eabc',
            200: '#4be1af',
            300: '#37d7a2',
            400: '#28c893',
            500: '#2ab486',
            600: '#2ba179',
            700: '#2b8e6d',
            800: '#2b7c61',
            900: '#2a6c56',
        },
        // Redefining only one shade, rest of the color will remain same.
        amber: {
            400: '#d97706',
        },
    },
});

export default theme;
