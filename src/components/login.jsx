import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import  ThemeToggle from './theme';
import {Box,Button,FormControl,InputRightElement,chakra,InputLeftElement,InputGroup,Input,Stack,Heading,Flex, Center, FormLabel} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login=()=>{
    const {register,handleSubmit}=useForm();
    const navigate=useNavigate();

    const [showPassword,setShowPassword] = useState(false);
    const handleShowClick=()=> setShowPassword(!showPassword);

    const onSubmit=(data) =>{
        if(data.username === 'username'  && data.password === 'password'){
            localStorage.setItem('authenticated',true);
            navigate('/order');
        }
        else{
            alert('gmail or password is incorrect');
        }
    };


    return (
        <>
        <Center height="100vh" width='220vh' >
        <Box p={6} rounded="md" boxShadow='lg' w="sm" >
          <Stack spacing={4}>
            <Flex justify="space-between" align="center">
              <Heading as="h1" size="lg" textAlign="center">Login</Heading>
              <ThemeToggle />
            </Flex>
            <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id='username'>
                <FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="text" {...register('username')} placeholder="Enter Username" />
                </InputGroup>
                </FormLabel>
                </FormControl>
                <FormControl id='password' >
                  <FormLabel>
                  <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input type={showPassword ? "text":"password"} {...register('password')} placeholder="Enter password" />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                  </FormLabel>
                </FormControl>
              <Box m={[2, 3]} />
              <Button type="submit" colorScheme="blue" size="md" width="full">Login</Button>
            </form>
          </Stack>
        </Box>
      </Center>
      </>
    );

};

export default Login;

