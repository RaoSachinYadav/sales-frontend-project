import {ChakraProvider,extendTheme,ColorModeScript} from '@chakra-ui/react';


const config={
    initialColor:'light',
    useSystemColoMode:false,
};

const theme = extendTheme({config});


const ChakraProviderWrapper=({children})=>{
    return (
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            {children}
        </ChakraProvider>
    );
}

export default ChakraProviderWrapper;