import { Button, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    useEffect(() => {
        localStorage.setItem('chakra-ui-color-mode', colorMode);
    }, [colorMode]);

    return (
        <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
    );
};

export default ThemeToggle;